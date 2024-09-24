import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import logo from "../../../assets/logo/FitGear Hub.png";

const Navbar = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </li>
              <li>
                <Link to="/aboutus">AboutUs</Link>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="FitGear Hub Logo"
              className="w-24 h-auto lg:w-32 lg:h-auto object-contain"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>

            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="cart" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {products.length}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
