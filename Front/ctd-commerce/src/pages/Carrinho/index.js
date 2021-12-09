import "./style.scss";
import { useCart } from "../../contexts/CartContext";

const Carrinho = () => {
  // const cartContext = useCart();
  let cartContext = [];

  const dataLocalStorage = localStorage.getItem("@CART");
  if(dataLocalStorage){
    const data = JSON.parse(dataLocalStorage);
    cartContext = [...data]
  }
  console.log(cartContext);
  console.log("gashasj", dataLocalStorage)

  return (
    <div>
      {cartContext[0].length > 0 ? (
        cartContext[0].map((item) => (
          <div key={item.id} className="game-card">
            {item.title}
            {item.description}
          </div>
        ))
      ) : (
        <div
          style={{
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Nada no carrinho</h1>
        </div>
      )}
    </div>
  );
};
export default Carrinho;
