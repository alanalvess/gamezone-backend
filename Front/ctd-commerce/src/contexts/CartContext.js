import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  function insertInToCart(product) {
    setProducts([...products, product[0]]);
    console.log('CONTEXT',product[0])
  }

  return (
    <CartContext.Provider value={{ insertInToCart, cart: "Carrinho", products }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;
