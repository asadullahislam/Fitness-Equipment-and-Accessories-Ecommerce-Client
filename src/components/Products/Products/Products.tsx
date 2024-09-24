// Products.tsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProductCart from "../ProductCard/ProductCard";
import { useGetProductsQuery } from "../../../redux/api/api";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { data: product, error, isLoading } = useGetProductsQuery();
  const location = useLocation();
  const navigate = useNavigate();
  // Read the query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category");

  // Initialize the selected category from the URL query parameter
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategories([categoryFromUrl]);
    }
  }, [categoryFromUrl]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products. Please try again later.</div>;
  }

  const products = product?.data || [];

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.some((selectedCategory) =>
          product.category.includes(selectedCategory)
        )
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      }
      if (sortOrder === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });

  const categories = ["Cardio", "Strength", "Yoga", "Accessories", "Recovery"];

  const handleClearFilter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Fix the typo here
    const confirmed = window.confirm(
      "Are you sure you want to clear all filters?"
    );
    if (confirmed) {
      setSelectedCategories([]);
      setSortOrder("");
      setSearchTerm("");
      navigate("/products");
    }
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">All Products</h1>
      </div>
      <div className="flex gap-7 justify-end m-5">
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <div className="flex justify-between">
        <h1 className="text-center text-4xl font-bold my-6 ">Category</h1>
        <Link
          onClick={handleClearFilter}
          to="/products"
          className="btn bg-red-600 text-white font-bold"
        >
          Clear Filter
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
        ) : (
          <div className="flex justify-center items-center my-5">
            <h1 className="text-center font-semibold text-red-600 text-4xl">
              No products found.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
