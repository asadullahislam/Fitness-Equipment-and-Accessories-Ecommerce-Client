import img1 from "../../../assets/category/dumble.webp";
import img2 from "../../../assets/category/ex-bike.jpeg";
import img3 from "../../../assets/category/weight.webp";
import img4 from "../../../assets/category/conditioning.webp";

const categories = [
  {
    title: "Dumbbells",
    imageUrl: img1,
  },
  {
    title: "Exercise Bikes",
    imageUrl: img2,
  },
  {
    title: "Weight Plates",
    imageUrl: img3,
  },
  {
    title: "Conditioning",
    imageUrl: img4,
  },
];

const CategoryCard = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Shop By Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Dynamically render cards using map */}
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
