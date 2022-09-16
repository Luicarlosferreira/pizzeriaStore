import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  //{id: 1, qtd: 1}

  const addProductsToCart = (product) => {
    setProducts((oldProduct) => {
      let quantity = 0;
      if (oldProduct[product.id]) {
        quantity = oldProduct[product.id].quantity;
      }

      const newCart = {
        ...oldProduct,
        [product.id]: {
          quantity: quantity + 1,
          product,
        },
      };
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const clearCart = () => {
    setProducts([]);
    window.localStorage.removeItem("cart");
  };

  useEffect(() => {
    const cartLocal = window.localStorage.getItem("cart");
    if (cartLocal) {
      setProducts(JSON.parse(cartLocal));
    }
  }, []);
  return (
    <CartContext.Provider value={{ products, addProductsToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
