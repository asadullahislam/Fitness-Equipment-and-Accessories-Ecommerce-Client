import { useState } from "react";
import ProductCart from "../ProductCard/ProductCard";
import { useGetProductsQuery } from "../../../redux/api/api";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Fetching products using RTK Query
  const { data: product, error, isLoading } = useGetProductsQuery();

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching products. Please try again later.</div>;
  }

  // If no products are returned, handle it gracefully
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

  // Filter products by search term and selected categories
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    // Sort products by price based on the selected sort order
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.price - b.price;
      }
      if (sortOrder === "highToLow") {
        return b.price - a.price;
      }
      return 0; // No sorting if no option selected
    });

  const categories = ["Cardio", "Strength", "Yoga", "Accessories", "Recovery"];

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
      <h1 className="text-center text-4xl font-bold my-6">Category</h1>
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
      {/* Display products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
        ) : (
          <div>No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Products;

// import { useState } from "react";
// import ProductCart from "../ProductCard/ProductCard";
// import { useGetProductsQuery } from "../../../redux/api/api";

// const Products = () => {
//   const [searchTerm, setSearchTerm] = useState(""); // For input field
//   const [searchQuery, setSearchQuery] = useState(""); // For filtering
//   const [sortOrder, setSortOrder] = useState<string>("");
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // For category selection

//   const categories = ["Cardio", "Strength", "Yoga", "Accessories", "Recovery"]; // Fixed categories

//   // Fetching products using RTK Query
//   const { data: productData, error, isLoading } = useGetProductsQuery();

//   // Handle loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>Error fetching products. Please try again later.</div>;
//   }

//   // If no products are returned, handle it gracefully
//   const products = productData?.data || [];

//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortOrder(e.target.value);
//   };

//   const handleSearchClick = () => {
//     setSearchQuery(searchTerm); // Set search query when button is clicked
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories(
//       (prev) =>
//         prev.includes(category)
//           ? prev.filter((cat) => cat !== category) // Remove category if already selected
//           : [...prev, category] // Add category if not selected
//     );
//   };

//   // Filter and sort products only if there are products available
//   const filteredProducts = products
//     .filter((product) => {
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());

//       const matchesCategory =
//         selectedCategories.length === 0 || // No category selected
//         selectedCategories.includes(product.category); // Category matches

//       return matchesSearch && matchesCategory;
//     })
//     // Sort products by price based on the selected sort order
//     .sort((a, b) => {
//       if (sortOrder === "lowToHigh") {
//         return a.price - b.price;
//       }
//       if (sortOrder === "highToLow") {
//         return b.price - a.price;
//       }
//       return 0; // No sorting if no option selected
//     });

//   return (
//     <div>
//       <div className="text-center">
//         <h1 className="text-5xl font-bold">All Products</h1>
//       </div>
//       <div className="flex gap-7 justify-end m-5">
//         <select
//           value={sortOrder}
//           onChange={handleSortChange}
//           className="select select-bordered w-full max-w-xs"
//         >
//           <option value="">Sort by Price</option>
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//         </select>
//         <input
//           type="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Type here"
//           className="input input-bordered input-info w-full max-w-xs"
//         />
//         <button className="btn btn-primary" onClick={handleSearchClick}>
//           Search
//         </button>
//       </div>

//       <h1 className="text-center text-3xl font-semibold my-5">Category</h1>

//       {/* Category Filters */}
//       <div className="flex flex-wrap gap-4 justify-center mb-5">
//         {categories.map((category) => (
//           <div key={category}>
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               <span>{category}</span>
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Display products */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <ProductCart key={product.id} product={product} />
//           ))
//         ) : (
//           <div>No products found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;
