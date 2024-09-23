import { Minus, Plus, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  updateQuantity,
  clearCart,
  deleteFormCart,
} from "../../../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Get products from the cart slice in the Redux store
  const products = useAppSelector((store) => store.cart.products);

  const handleQuantity = (type: string, _id: string, quantity: number) => {
    if (type === "decrement" && quantity === 1) return; // Prevent quantity from going below 1

    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  const handleDelete = (_id: string) => {
    dispatch(deleteFormCart(_id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    if (products.length === 0) {
      alert("No products in cart to checkout");
      return;
    }
    navigate("/checkout"); // Navigate to checkout page
  };

  const totalPrice = products.reduce(
    (total: number, product: any) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40">
        {/* Selected items (cart products) */}
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: any) => (
              // CartDetails component to show each product in the cart
              <div
                key={product._id}
                className="flex items-center justify-between space-x-4 border border-gray-300 rounded-lg p-4 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg w-full max-w-md mx-auto"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-grow mx-4">
                  <h3 className="text-lg font-semibold text-green-700 truncate mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-red-600">
                    ${product.price}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      handleQuantity("decrement", product._id, product.quantity)
                    }
                    className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
                    disabled={product.quantity === 1} // Prevent reducing below 1
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-lg font-semibold">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantity("increment", product._id, product.quantity)
                    }
                    className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-2xl text-red-500">No products found</p>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-300 w-full max-w-md mx-auto lg:mx-0">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Order Summary
          </h2>

          {/* Dynamically showing selected items */}
          <div className="space-y-2 mb-4">
            <h1 className="text-purple-600 font-semibold">Selected Items</h1>
            {products.length > 0 ? (
              products.map((product: any) => (
                <div key={product._id} className="flex justify-between">
                  <p className="text-gray-700">{product.name}</p>
                  <p className="text-gray-700">
                    {product.quantity} x ${product.price}
                  </p>
                </div>
              ))
            ) : (
              <p className="font-bold text-2xl text-red-500">
                No items in the cart
              </p>
            )}
          </div>

          {/* Total Price */}
          <p className="text-lg mb-4">
            Total Price:{" "}
            <span className="font-bold text-red-600">
              ${totalPrice.toFixed(2)}
            </span>
          </p>

          {/* Clear Cart Button */}
          <button
            onClick={handleClearCart}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 mb-4"
          >
            Clear Cart
          </button>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className={`w-full py-2 px-4 rounded-lg ${
              products.length === 0
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
