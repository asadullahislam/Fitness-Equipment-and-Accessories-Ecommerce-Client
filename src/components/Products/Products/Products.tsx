import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import getAllProducts from "../../../data/products";

const Products = () => {
  const [sortOrder, setSortOrder] = useState("low-to-high"); // default sorting order
  const products = getAllProducts;

  // Sorting function
  const sortedProducts = products.sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  // for category

  const categories = [
    "Strength",
    "Cardio",
    "Flexibility",
    "Recovery",
    "Core",
    "Resistance",
  ];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">All products</h1>
      </div>
      <div className="flex gap-7 justify-end m-5">
        <h1 className="mt-2">Sort by:</h1>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-info"
        >
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
        <input
          type="search"
          placeholder="Search Products"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button className="btn btn-primary">Search</button>
      </div>

      <div>
        <h1 className="text-red-400 font-semibold text-3xl m-5 text-center">
          Showing Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

// import { useState } from "react";
// import productsData from "../../../data/products";
// import ProductCard from "../ProductCard/ProductCard";

// const categories = [
//   "Strength",
//   "Cardio",
//   "Flexibility",
//   "Recovery",
//   "Core",
//   "Resistance",
// ];

// const Products = () => {
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleCategoryChange = (category: string) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(
//         selectedCategories.filter((cat) => cat !== category)
//       );
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const filteredProducts = productsData
//     .filter((product) =>
//       selectedCategories.length
//         ? product.category.some((category) =>
//             selectedCategories.includes(category)
//           )
//         : true
//     )
//     .filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   return (
//     <div>
//       <div className="text-center">
//         <h1 className="text-5xl font-bold">All Products</h1>
//       </div>
//       <div className="flex gap-7 justify-end m-5">
//         <h1 className="mt-2">Sort by:</h1>
//         <input
//           type="search"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Type here"
//           className="input input-bordered input-info w-full max-w-xs"
//         />
//         <button className="btn btn-primary">Search</button>
//       </div>

//       <div className="flex gap-4 justify-center mb-5">
//         {categories.map((category) => (
//           <div key={category}>
//             <label>
//               <input
//                 type="checkbox"
//                 value={category}
//                 checked={selectedCategories.includes(category)}
//                 onChange={() => handleCategoryChange(category)}
//               />
//               {category}
//             </label>
//           </div>
//         ))}
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
