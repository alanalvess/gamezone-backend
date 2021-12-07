import React, { createContext, useContext } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  function logout() {
    console.log("funcao do cart context");
  }

  return (
    <CartContext.Provider value={{ logout, cart: "Carrinho" }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;
