// import img1 from "../../../assets/category/dumble.webp";
// import img2 from "../../../assets/category/ex-bike.jpeg";
// import img3 from "../../../assets/category/weight.webp";
// import img4 from "../../../assets/category/conditioning.webp";

// const categories = [
//   {
//     category: "Cardio",
//     image: img1,
//   },
//   {
//     category: "Strength",
//     image: img2,
//   },
//   {
//     category: "Yoga",
//     image: img3,
//   },
//   {
//     category: "Accessories",
//     image: img4,
//   },
//   {
//     category: " Recovery",
//     image: img4,
//   },
// ];

// const CategoryCard = () => {
//   return (
//     <div className="container mx-auto py-10">
//       <h2 className="text-2xl font-bold mb-6 text-center">Shop By Category</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//         {/* Dynamically render cards using map */}
//         {categories.map((category, index) => (
//           <div key={index} className="relative group">
//             <img
//               src={category.image}
//               alt={category.category}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-white text-2xl font-bold">
//                 {category.category}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

// CategoryCard.tsx
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/category/dumble.webp";
import img2 from "../../../assets/category/ex-bike.jpeg";
import img3 from "../../../assets/category/weight.webp";
import img4 from "../../../assets/category/conditioning.webp";

const categories = [
  {
    category: "Cardio",
    image: img1,
  },
  {
    category: "Strength",
    image: img2,
  },
  {
    category: "Yoga",
    image: img3,
  },
  {
    category: "Accessories",
    image: img4,
  },
  {
    category: "Recovery",
    image: img4,
  },
];

const CategoryCard = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    // Navigate to the Products page with the selected category as a query parameter
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop By Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleCategoryClick(category.category)}
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">
                {category.category}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
