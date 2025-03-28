
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router";
import { useState } from "react";


const NavBar = ({isHomePage}) => {
    const navbarClass = isHomePage
    ? "navbar bg-purple-500 text-white "
    : "navbar bg-base-100 shadow-sm ";
    const {addToCart,addToWishList, cart, wishlist,gadgetPrice} = useContext(CartContext);

    const [cartNumber, setCartNumber] = useState(0);
    const [wishListNumber, setWishListNumber] = useState(0);

  const navved = isHomePage ? " navbar" : " navbar lg:mx-66 ";

  //  JSX fragment 
  // The <> and </> tags are JSX fragments. They allow you to group multiple elements without adding extra nodes to the DOM.
  const links = (
    <>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
      <NavLink to='/stats'>Statistics</NavLink>
      </li>

      <li>
       <NavLink to='/dashboard'>Dashboard</NavLink>
      </li>
      <li>
       <NavLink to='/account'>Account</NavLink>
      </li>
    </>
  );

  return (
    <div className={navbarClass}>
      <div className={navved}>
        {/* removed bg-base-100 */}
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-medium bg-purple-100 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <div className="text-purple-900">
              {links}
              </div>
            
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge rounded-full badge-sm indicator-item text-purple-900">{cart.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold text-black">{cart.length} Items</span>
                <span className="text-info">Subtotal: ${gadgetPrice}</span>
                <div className="card-actions">
                  <NavLink to='/dashboard'> <button className="btn btn-primary btn-block">
                    View cart
                  </button></NavLink>
                 
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-[1.2em] relative"
            >
            
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <span className="absolute ml-7 mb-8 rounded-full badge badge-sm indicator-item text-purple-900">{wishlist.length}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
