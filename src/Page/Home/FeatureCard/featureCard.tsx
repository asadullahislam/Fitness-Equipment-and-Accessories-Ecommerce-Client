import { Link } from "react-router-dom";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string[];
  quantity: number;
  description: string;
  image: string;
}

interface FeatureCardProps {
  product: Product;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ product }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="card bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col items-start justify-between">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold mb-2 px-2">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-4 transition-opacity duration-300 group-hover:opacity-75 line-clamp-3 px-2">
            {product.description.slice(0, 80)}
          </p>
          <p className="font-semibold  my-2 px-2">Price: $ {product.price}</p>

          {/* "View More" Button */}
          <div className="mt-auto w-full">
            <Link
              to={`/product/${product._id}`}
              className="block text-center bg-red-600 text-white font-medium py-2 rounded-full hover:bg-red-700 hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1"
            >
              Show Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
