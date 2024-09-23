import { useNavigate } from "react-router-dom";

const CheckoutSummary = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Your order has been placed successfully!</p>
      {/* Here you can display order details, such as purchased items, total price, etc. */}
      <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default CheckoutSummary;
