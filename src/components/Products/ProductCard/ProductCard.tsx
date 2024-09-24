// import { useState } from "react";
// import { addToCart } from "../../../redux/features/cartSlice";
// import { useAppDispatch } from "../../../redux/hooks";
// import Modal from "../../Modal/Modal";
// import { Link } from "react-router-dom";

// const ProductCart = ({ product }: { product: any }) => {
//   const dispatch = useAppDispatch();
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);

//   const handleShowModal = (product: any) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setShowModal(false);
//   };
//   const handleAddToCart = (e: any, product: any) => {
//     e.stopPropagation();
//     dispatch(addToCart(product));
//   };
//   console.log(product.quantity);

//   return (
//     <div className="relative">
//       {showModal && (
//         <Modal product={selectedProduct} onClose={handleCloseModal}></Modal>
//       )}
//       <div
//         onClick={() => handleShowModal(product)}
//         className="card bg-base-100 w-96 h-[400px] shadow-xl"
//       >
//         <figure className="px-10 pt-10">
//           <img src={product.image} alt={product.name} className="rounded-xl" />
//         </figure>
//         <div className="card-body items-center text-center">
//           <h2 className="card-title">{product.name}</h2>
//           <p className="">{product.description}</p>
//           <p className="text-lg font-bold text-red-600 mb-4">
//             Price: {product.price}
//           </p>
//           <p className="font-semibold">Avialabe quantity: {product.quantity}</p>
//           <div className="card-actions">
//             <div className="px-5">
//               <Link to={`/product/${product._id}`} className="btn btn-accent">
//                 View Details
//               </Link>
//             </div>
//             <div className="px-5">
//               <button
//                 onClick={(e) => {
//                   handleAddToCart(e, product);
//                 }}
//                 className={`w-full py-2 px-4 rounded-lg ${
//                   product.quantity === 0
//                     ? "bg-gray-400 text-gray-200 cursor-not-allowed"
//                     : "btn btn-primary"
//                 }`}
//                 disabled={product.quantity === 0}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCart;

import { useState } from "react";
import { addToCart } from "../../../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";

const ProductCart = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.products) || [];
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Find the product in the cart
  const cartItem = cartItems.find((item: any) => item._id === product._id);
  const productQuantityInCart = cartItem ? cartItem.quantity : 0;

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const handleAddToCart = (e: any, product: any) => {
    e.stopPropagation();

    const totalQuantityInCart = productQuantityInCart + 1;
    if (totalQuantityInCart > product.quantity) {
      alert("Not enough product available!");
      return;
    }

    // Dispatch action to add the product to cart
    dispatch(addToCart({ ...product, quantity: product.quantity })); // Pass the available quantity
  };

  const isOutOfStock = productQuantityInCart >= product.quantity;

  return (
    <div className="relative">
      {showModal && (
        <Modal product={selectedProduct} onClose={handleCloseModal}></Modal>
      )}
      <div
        onClick={() => handleShowModal(product)}
        className="card bg-base-100 w-96 h-[400px] shadow-xl"
      >
        <figure className="px-10 pt-10">
          <img src={product.image} alt={product.name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.name}</h2>
          <p className="">{product.description}</p>
          <p className="text-lg font-bold text-red-600 mb-4">
            Price: {product.price}
          </p>
          <p className="font-semibold">
            Available quantity: {product.quantity}
          </p>
          <div className="card-actions">
            <div className="">
              <Link to={`/product/${product._id}`} className="btn btn-accent">
                View Details
              </Link>
            </div>
            <div className="px-5">
              <button
                onClick={(e) => handleAddToCart(e, product)}
                className={`w-full  py-2 rounded-lg ${
                  isOutOfStock
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "btn btn-primary"
                }`}
                disabled={isOutOfStock}
              >
                {isOutOfStock ? "Not enough  product" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
