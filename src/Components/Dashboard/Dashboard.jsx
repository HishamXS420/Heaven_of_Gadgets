import { useContext, useState, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext";

import { MdCancel } from "react-icons/md";
import GadgetDetails from "../GadgetDetails/GadgetDetails";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Gadget from "../Gadget/Gadget";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { NavLink } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const { cart, wishlist, addToCart, gadgetPrice ,removeFromCart,removeFromWishList,clearCart} = useContext(CartContext);
  const [purchase,setPurchase] = useState(false);

  // const [selectedDash, setSelectedDash] = useState("Cart");
  const [cartStyle, setCartStyle] = useState("bg-purple-700 text-white");
  const [wishlistStyle, setWishlistStyle] = useState(
    "bg-white text-purple-700"
  );
  // const [sort,setSort] = useState("");
  const [cartList, setCartList] = useState([...cart]);
  const [wishesList, setWishesList] = useState([...wishlist]);

  useEffect(() => {
    setCartList([...cart]);
  }, [cart]);

  useEffect(() => {
    setWishesList([...wishesList]);
  }, [wishlist]);


  // Because of this useeffect , rendering problem solved mostly
  useEffect(() => {
    if (cartStyle === "bg-purple-700 text-white") {
      setDashCategory(generateShowCart(cartList));
    }
  }, [cartList, cartStyle]);

  useEffect(() => {
    if (wishlistStyle === "bg-purple-700 text-white") {
      setDashCategory(generateShowWishlist(wishesList));
    }
  }, [wishesList, wishlistStyle]);




  const notifySuccessful = () => {
    toast.success("Payment Successful", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };

  const notifyError = () => {
    toast.error("Please add an item first! ", {
      autoClose: 1200,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
  const notifyRemovedCart = () => {
    toast.info("Item removed from the Cart! ", {
      autoClose: 1200,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
  const notifyRemovedWishlist = () => {
    toast.info("Item removed from the Wishlist! ", {
      autoClose: 1200,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };



  const handleAddToCart = (gadget) => {
    addToCart(gadget);
    console.log(gadget);
  };

  const handleRemoveProduct = (gadgetIDD) => {
    console.log("Removing product with ID:", gadgetIDD);
    removeFromCart(gadgetIDD);
    notifyRemovedCart();
  
  };
  const handleRemoveWishes = (wishID) => {
    console.log("Removing product with ID:", wishID);
    removeFromWishList(wishID);
    notifyRemovedWishlist();
  
  };

  const handleSortByPrice = () => {
    const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedCartList);
    setDashCategory(generateShowCart(sortedCartList)); // Force re-render by updating state
    console.log(sortedCartList);
  };


  const handleClearCart = () => {
    //     if(cartList.length > 0){
    //   setPurchase(true);
    // }else{
    //   setPurchase(false);
    // }
    if(cartList.length > 0)
    {
      notifySuccessful();
      clearCart();
    }
  
   
  }
  
  const handlePurchase = () => {
    if(gadgetPrice>0){
      document.getElementById('my_modal_1').showModal();
    }
    else{
      notifyError();
    }
  }



  const generateShowCart = (list) => (
    <div className={`mt-10 ml-4 max-w-6xl lg:mx-80`}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl text-black font-bold">Cart Items</h2>
        </div>
        <div className="flex gap-4">
          <h1 className="text-3xl font-semibold">Total cost: ${gadgetPrice}</h1>
          <button
            onClick={handleSortByPrice}
            className="btn text-lg w-45 font-semibold rounded-3xl btn-outline text-purple-700 bg-white"
          >
            Sort by Price <FaSortAmountDown />
          </button>
          <button onClick={handlePurchase} className="btn text-lg w-30 font-semibold rounded-3xl btn-outline bg-purple-700 text-white">
            Purchase
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_1" className="modal">
  <div className="modal-box flex flex-col justify-center items-center mx-auto">
    <div className="text-center">
    <IoCheckmarkCircleSharp className=" text-green-600 text-center item-center text-7xl"/>
    </div>
    <div>
    <p className="py-4 font-bold text-3xl">Payment Successful</p>
    <p>Total Amount: <span className="text-xl font-semibold text-purple-900">${gadgetPrice}</span></p>
    <div className="modal-action item-center">
      <form className="w-full" method="dialog ">
        {/* if there is a button in form, it will close the modal */}
        <NavLink to='/home'><button onClick={handleClearCart} className="btn text-center w-full">Close</button></NavLink>
       
      </form>
    </div>
    </div>
 
 
  </div>
</dialog>
        </div>
      </div>

      <ul className="ml-10 mt-10 flex flex-col">
        {list.map((gadget, index) => (
          <div className="flex justify-between items-center" key={index}>
            <li className="pt-4 mb-2 text-black flex gap-4 justify-start items-start border-1 border-gray-100 rounded-2xl">
              <img className="w-30 h-30 mb-6" src={gadget.image} alt="" />
              <div className="flex flex-col items-start">
                <h3 className="text-2xl">{gadget.title}</h3>
                <h3 className="text-xl">{gadget.description}</h3>
                <h3 className="text-2xl font-bold">Price : ${gadget.price}</h3>
              </div>
            </li>
            <div>
              <MdCancel
                onClick={() => handleRemoveProduct(gadget.id)}
                className="w-8 h-8 text-red-900"
              />
            </div>
          </div>
        ))}
      </ul>
    
    </div>
  );

  const generateShowWishlist = () => (
    <div className={`mt-8 ml-4 max-w-6xl lg:mx-80`}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl text-black font-bold">WishList</h2>
        </div>
        <div className="flex gap-4"></div>
      </div>
      <ul className="ml-10 mt-10 flex flex-col">
        {wishlist.map((wishes, index) => (
          <div className="flex justify-between items-center" key={index}>
            <li className="pt-4 mb-2 text-black flex gap-4 justify-start items-start border-1 border-gray-100 rounded-2xl">
              <img className="w-30 h-30 mb-6" src={wishes.image} alt="" />
              <div className="flex flex-col items-start">
                <h3 className="text-2xl">{wishes.title}</h3>
                <h3 className="text-xl">{wishes.description}</h3>
                <h3 className="text-2xl font-bold mb-4">
                  Price : ${wishes.price}
                </h3>
                <button
                  onClick={() => handleAddToCart(wishes)}
                  className="btn rounded-3xl text-lg bg-purple-700 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </li>
            <div>
              <MdCancel
                onClick={() => handleRemoveWishes(wishes.id)}
                className="w-8 h-8 text-red-900"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );

  const [dashCategory, setDashCategory] = useState(generateShowCart(cartList));

  const selectedCategory = (category) => {
    if (category === "Cart") {
      setCartStyle("bg-purple-700 text-white");
      setWishlistStyle("bg-white text-purple-700");
      setDashCategory(generateShowCart(cartList));
    } else {
      setCartStyle("bg-white text-purple-700");
      setWishlistStyle("bg-purple-700 text-white");
      setDashCategory(generateShowWishlist(wishesList));
    }
  };

  return (
    
    <div className={`flex flex-col justify-center mx-auto text-center`}>
      
      <div>
        <div className="gap-10">
          <h1 className=" my-6 text-3xl text-white font-bold">Dashboard</h1>
          <h2 className="text-white mx-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </h2>
        </div>
        <div className="flex my-6 gap-4 text-center justify-center">
          <button
            onClick={() => selectedCategory("Cart")}
            className={`btn text-lg w-30 font-semibold rounded-3xl  btn-outline ${cartStyle} `}
          >
            Cart
          </button>
          {/* ${selectedDash === 'Cart' ? "bg-purple-700 text-white": " bg-white text-purple-700"} */}
          <button
            onClick={() => selectedCategory("Wishlist")}
            className={`btn text-lg w-30 font-semibold  rounded-3xl ${wishlistStyle} `}
          >
            Wishlist
          </button>
          {/* ${selectedDash === 'Wishlist' ? "bg-white text-purple-700": " bg-purple-700 text-white"} */}
        </div>  
      </div>
      
      <div className="lg:mt-4">{dashCategory}
        
      </div>
    
    </div>
    
  );
};

export default Dashboard;
