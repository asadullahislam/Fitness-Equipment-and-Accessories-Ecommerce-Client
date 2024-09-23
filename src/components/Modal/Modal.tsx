import { ShoppingCart } from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";

const Modal = ({ product, onClose }: any) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        {/* Modal Container */}
        <div className="bg-white shadow-xl rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col sm:grid sm:grid-cols-1 lg:grid-cols-[2fr_1fr] overflow-hidden">
          {/* Product Image */}
          <img
            className="w-full object-cover h-auto max-h-[300px] rounded-t-2xl sm:rounded-none lg:rounded-l-2xl lg:max-h-[400px] transition duration-300 ease-in-out hover:opacity-90"
            src={product?.image}
            alt={product?.name}
          />

          {/* Product Details */}
          <div className="p-5 lg:p-11 flex flex-col justify-between">
            {/* Product Name */}
            <div>
              <h2 className="text-3xl lg:text-[40px] mb-4 font-bold text-green-700">
                {product?.name}
              </h2>

              {/* Product Description */}
              <p className="text-sm lg:text-base text-gray-800 mb-4">
                {product?.description}
              </p>

              {/* Seller Information */}
              <p className="text-sm lg:text-base font-semibold text-gray-600">
                Sold by: {product?.seller}
              </p>
            </div>

            {/* Add to Cart and Cancel Buttons */}
            <div className="mt-6">
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                ${product?.price}
              </p>
              <div className="grid gap-4">
                {/* Add to Cart Button */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="bg-green-700 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-white font-semibold text-sm hover:bg-green-800 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>

                {/* Cancel Button */}
                <button
                  onClick={onClose}
                  className="border border-red-600 rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-red-600 font-semibold text-sm hover:bg-red-50 hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
