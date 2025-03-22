import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider =  ({children}) =>
    
{

    const [gadgetPrice,setGadgetPrice] = useState(0);
    const [cart,setCart] = useState([]);
   


    const addToCart = (gadget, newPrice) => {
        setCart((prevCart) => [...prevCart,gadget]);
        setGadgetPrice((prevPrice) => prevPrice+newPrice);
    }
    // prevCart = cart...here prevCart is used to avoid race conditions



    const removeFromCart = (gadgetId) => {
        console.log("Context: Removing product with ID:", gadgetId);
        const gadgetToRemove = cart.find(item => item.id === gadgetId);
    console.log("grm", gadgetToRemove)
       if(gadgetToRemove){
        setGadgetPrice((prevPrice) => prevPrice - gadgetToRemove.price);
        setCart((prevCart) => prevCart.filter(item => item.id !== gadgetId))
       } 
       else {
        console.log("Gadget not found in cart");
    }
    }

    const [wishlist,setWishlist] = useState([]); 

    const addToWishList = (wishes) => {
        setWishlist((prevWishlist) => [...prevWishlist,wishes]);
    }

    const removeFromWishList = (wishIDDD) => {
        console.log(wishIDDD)
        const wishToRemove = wishlist.find(product => product.id === wishIDDD);
    
        console.log(wishToRemove)
        console.log(wishlist)
      if(wishToRemove != -1){
        const updatedWishList = wishlist.filter(product => product.id !== wishIDDD);
        setWishlist(updatedWishList);
      }
      
    
    }

    const clearCart = () => {
        setCart([]);
        setGadgetPrice(0);
    }

    

    return(
        <CartContext.Provider value={{clearCart,cart, wishlist,addToCart,addToWishList,gadgetPrice,removeFromCart,removeFromWishList}}>
            {children}
            
        </CartContext.Provider>
        

    );

}

export { CartContext,CartProvider};