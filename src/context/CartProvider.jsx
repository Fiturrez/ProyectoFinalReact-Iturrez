import { useState } from "react";
import { cartContext } from "./cartContext";

export default function CartProvider ({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }
    
    const removeFromCart = (productId) => {
      setCart(prevCart => 
        prevCart.map(item => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }
          return item;
        }).filter(item => item !== null)
      );
    };

    const clearCart = () => {
      setCart([]);
    };

    const getQuantity = () => {
        const qtyOnly  = cart.map(prod => prod.quantity)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    const getTotal = () => {
      const pricesOnly  = cart.map(prod => prod.quantity * prod.price)
      const total = pricesOnly.reduce((acc, current) => acc + current, 0)
      return total
    }
   
    return(
        <cartContext.Provider value={{ cart, addToCart, getQuantity, removeFromCart, clearCart, getTotal}}>
          {children}
        </cartContext.Provider>
    )
}