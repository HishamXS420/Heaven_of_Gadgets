import { Link, useLoaderData, useParams } from "react-router";
import { TiShoppingCart } from "react-icons/ti";
import {CartContext} from "../CartContext/CartContext";
import { useContext, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";



const GadgetDetails = () => {

const {addToCart,addToWishList, cart, wishlist} = useContext(CartContext);

const [cartNumber, setCartNumber] = useState(0);
const [wishListNumber, setWishListNumber] = useState(0);


 const notifyCart = () => {
    toast.success("Item added to the cart!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };
 const notifyWishlist = () => {
    toast.success("Item added to the wishlist!", {
      autoClose: 2000,
      pauseOnHover: false,
      closeOnClick: true,
      // draggable: false,
    });
  };

  const { id } = useParams();
  const gadgetId = parseInt(id);

  console.log(gadgetId);

  const data = useLoaderData();

  const item = data.find((item) => item.id === id);
  console.log(item);


  const {
    ID,
    image,
    title,
    price,
    description,
    specification,
 
    rating,
  } = item;

const [isAddedToCart, setIsAddedToCart] = useState(false);
const [isAddedToWishList, setIsAddedToWishList] = useState(false);



  const handleAddToCart = (prices) => {

    addToCart(item, prices);
    setIsAddedToCart(true);
    notifyCart();
};

const handleAddToWishList = () => {
    addToWishList(item);
    setIsAddedToWishList(true);
    notifyWishlist();
}


  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto">
      <div className="flex flex-col justify-center text-center mx-4 gap-3">
        <h1 className="text-3xl text-white font-bold">Product Details</h1>
        <h2 className="text-white">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </h2>
      </div>
      <div className="card card-side bg-base-100 shadow-sm py-6 rounded-2xl mt-10 sm:gap-8 pr-5">
  <figure>
    <img className="lg:w-150 lg:h-150 sm:w-100 sm:h-100"
      src={image}
      alt="Movie" />
  </figure>
  <div className="flex flex-col gap-4">
    <h2 className="text-4xl font-bold">{title}</h2>
    <p>Price:  <span className="text-indigo-900 font-semibold text-xl"> ${price}</span> </p>
    <button className="text-green-700 border-2 w-20 bg-green-100 rounded-2xl">In Stock</button>
    <p className="text-lg">{description}</p>
    {/* <ul className=" text-gray-700">
  {specification.map((spec, index) => (
    <li key={index} className="text-lg">{spec}
         </li>
  ))}
</ul> */}

<ul className="text-gray-700 flex-grow">
    {specification.map((spec,index) => <li key={index}>{spec}</li>)}
</ul>
<p className="text-xl font-semibold">Rating</p>
    <div className="flex gap-4 ">
       
    <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="2 star"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="3 star"   />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
        <div>
            <span className="text-indigo-600"><p className="text-xl font-semibold">{rating}</p></span>
        </div>
    </div>
  
    <div className="card-actions justify-start gap-6 mb-10">
      <button  disabled={isAddedToCart} onClick={() => handleAddToCart(price)} className="btn rounded-3xl text-lg bg-purple-700 text-white ">Add to Cart <TiShoppingCart /></button>
      <button  className={isAddedToWishList ? "bg-gray-300 btn btn-circle text-gray-700" :  "btn btn-circle bg-white"  } >
        <button  onClick={handleAddToWishList}  disabled={isAddedToWishList}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={isAddedToWishList ? " text-gray-500 size-[1.2em]" : "text-pink-600 size-[1.2em]"  }><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>

</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default GadgetDetails;
