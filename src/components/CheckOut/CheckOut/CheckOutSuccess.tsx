import { Link } from "react-router-dom";

const CheckOutSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your order. We will deliver your items soon.
        </p>

        <Link
          to="/products"
          className="inline-block px-6 py-3 text-white bg-green-600 rounded-full hover:bg-green-700 transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckOutSuccess;
