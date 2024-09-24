import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/api/api";
// Adjust path as per your project structure

const FeatureCardDetails = () => {
  const { _id } = useParams(); // Get the product ID from the URL

  // Use the RTK Query hook to fetch product details by ID
  const { data: product, error, isLoading } = useGetProductByIdQuery(_id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details. Please try again later.</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  // Assume product data is inside product.data
  const productDetails = product.data;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={productDetails.image}
            alt={productDetails.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{productDetails.name}</h1>
          <p className="text-lg font-semibold text-red-600 mb-2 px-3 text-xl">
            Price: ${productDetails.price}
          </p>
          <p className="text-lg px-3 mb-2 font-semibold">
            Stock quantity : {productDetails.quantity}
          </p>
          <p className=" my-3 text-sm px-3 ">
            description: {productDetails.description}
          </p>
          <p className="text-sm text-gray-600 font-semibold px-3">
            Category: {productDetails.category}
          </p>

          <div className="my-5 sm:text-center">
            <Link
              to="/products"
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
              View More Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCardDetails;
