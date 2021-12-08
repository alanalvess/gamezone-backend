import "./style.scss";
import { useCart } from "../../contexts/CartContext";

const Carrinho = () => {
  const cartContext = useCart();
  console.log(cartContext);

  return (
    <div>
      {cartContext.products.length > 0 ? (
        cartContext.products.map((item) => (
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
