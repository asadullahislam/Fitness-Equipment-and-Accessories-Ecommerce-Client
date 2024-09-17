import { Link } from "react-router-dom";
import img1 from "../../../assets/feature/1.webp";
import img2 from "../../../assets/feature/2.webp";
import img3 from "../../../assets/feature/3.webp";
import img4 from "../../../assets/feature/4.webp";

// Product Data Array
const products = [
  {
    id: 1,
    title: "Hammer Strength PRO 100 Adjustable Dumbbells",
    imageUrl: img1,
    rating: 5,
    reviews: 13,
    description: "Adjustable dumbbells for strength training.",
  },
  {
    id: 2,
    title: "G7 Home Gym",
    imageUrl: img2,
    rating: 5,
    reviews: 52,
    description: "Complete home gym for all your workout needs.",
  },
  {
    id: 3,
    title: "Hammer Strength Home Multi-Adjustable Bench",
    imageUrl: img3,
    rating: 4.5,
    reviews: 22,
    description: "Adjustable bench for various strength exercises.",
  },
  {
    id: 4,
    title: "Hammer Strength HD Athletic NX Half Rack",
    imageUrl: img4,
    rating: 5,
    reviews: 10,
    description: "Heavy-duty half rack for serious lifters.",
  },
];

// Function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>&#9733;</span>); // Full Star
  }

  if (halfStar) {
    stars.push(<span key="half">&#9733;</span>); // Half Star
  }

  return stars;
};

const FeatureCard = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6 animate-pulse">
        Build Your Home Weight Room
      </h2>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Using map to render each product card */}
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Link to product detail */}
            <Link to={`/product/${product.id}`}>
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Title */}
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-red-600">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-500 animate-bounce">
                  {renderStars(product.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  ({product.reviews})
                </span>
              </div>

              {/* Product Description */}
              <p className="text-gray-600 text-sm transition-opacity group-hover:opacity-75">
                {product.description}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* "View More" Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/products"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
