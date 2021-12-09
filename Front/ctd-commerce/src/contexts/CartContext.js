import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  function insertInToCart(product) {
    let arrayProducts = [];
    const dataLocalStorage = localStorage.getItem('@CART');
    console.log(dataLocalStorage)
    if(dataLocalStorage){
      const data = JSON.parse(dataLocalStorage);
      arrayProducts = [...data]
    }

    arrayProducts.push(product);
    localStorage.setItem('@CART', JSON.stringify(arrayProducts));
    // let arrayProducts = []
    // arrayProducts.push(product)
    // localStorage.setItem('@CART', JSON.stringify(arrayProducts));
    // let localData = localStorage.getItem('@CART');
    // localData = JSON.parse(localData)
    // if (localData.length > 0) {
    //   arrayProducts = []
    //   localData.forEach(product => {
    //     arrayProducts.push(product)
    //   });
    //   localStorage.setItem('@CART', JSON.stringify(arrayProducts));
    //   console.log(arrayProducts)
    // }
    // console.log(arrayProducts)
    

    setProducts([...products, product[0]]);
    console.log('CONTEXT', product[0])
  }

  return (
    <CartContext.Provider value={{ insertInToCart, cart: "Carrinho", products }}>
      {children}
    </CartContext.Provider>
  );
};

// const GithubContextProvider = ({ children }) => {
//   const [users, dispatch] = useReducer(gitReducer, [], () => {
//     const localData = localStorage.getItem('users');
//     return localData ? JSON.parse(localData) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   const addUser = (user) => dispatch({ type: 'ADD_USER', payload: user });

//   return (
//     <GithubContext.Provider value={{ users, addUser }}>
//       {children}
//     </GithubContext.Provider>
//   )
// }

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;
