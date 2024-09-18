// import { useState } from "react";
// import productsData from "../../../data/products";
// import ProductCard from "../ProductCard/ProductCard";

// const Products = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState<string>("");

//   const products = productsData;

//   const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortOrder(e.target.value);
//   };

//   const filteredProducts = products
//     .filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
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
//         <button className="btn btn-primary">Search</button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useGetProductsQuery } from "../../../redux/api/api";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { data: product, error, isLoading } = useGetProductsQuery();

  // Safely access the products array
  const products = product?.data || []; // Default to an empty array if product or product.data is undefined

  console.log(products);

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">All Products</h1>
      </div>
      <div className="flex gap-7 justify-end m-5">
        <button className="btn btn-primary">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Products;
