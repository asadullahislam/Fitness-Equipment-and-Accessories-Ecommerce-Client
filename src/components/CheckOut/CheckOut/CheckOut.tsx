import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useCreateOrderMutation } from "../../../redux/api/checkoutApi";
import { clearCart } from "../../../redux/features/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { useGetProductsQuery } from "../../../redux/api/api";

const CheckOut = () => {
  const { refetch: refetchProducts } = useGetProductsQuery({});

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const products = useAppSelector((state) => state.cart.products);
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [paymentMethod] = useState<"COD">("COD"); // Fixed to 'Cash on Delivery'
  const totalAmount = products.reduce(
    (acc: number, product: any) => acc + product.price * product.quantity,
    0
  );

  // RTK Query mutation hook
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!user.name || !user.address || !user.phone) {
      toast.error("Please fill in all the fields.");
      return;
    }

    const orderData = {
      cartItems: products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
      })),
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
      },
      paymentMethod, // Always 'Cash on Delivery'
    };

    try {
      await createOrder(orderData).unwrap();
      toast.success("Order created  successfully!");
      setTimeout(() => {
        dispatch(clearCart());
        refetchProducts();
        navigate("/checkout-success");
      }, 2000);
    } catch (error) {
      toast.error("Failed to place the order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-5">Checkout</h2>
      <form
        className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="block w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="block w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            className="block w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="block w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Payment Method
          </label>
          <input
            type="text"
            value="Cash on Delivery"
            disabled
            className="block w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Total Amount
          </label>
          <input
            type="text"
            value={`$${totalAmount.toFixed(2)}`}
            disabled
            className="block w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 px-4 text-white bg-green-600 rounded-lg ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
      {/* Add ToastContainer to render toasts */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default CheckOut;
