import "./style.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../contexts/CartContext";

const JogoDetalhe = () => {
  const cartContext = useCart();
  const [jogo, setJogo] = useState({});

  useEffect(() => {
    const jogo = localStorage.getItem("jogo");
    axios
      .get(
        "http://gamezone-env.eba-nm6433md.us-east-1.elasticbeanstalk.com/products"
      )
      .then((res) => {
        const foundGame = res.data.filter(
          (item) => item.title === JSON.parse(jogo).title
        );
        setJogo(foundGame);
      })
      .catch((err) => console.log(err));
  }, []);

  function handlePutOnCart(e) {
    e.preventDefault()
    cartContext.insertInToCart(jogo);
    alert('Jogo adicionado ao carrinho!')
  }

  return (
    <div className="jogo-detalhe-wrapper">
      <h1>{jogo[0]?.title}</h1>
      <h3>Jogos</h3>
      <h6>Avaliaçāo: 8</h6>
      <div className="card-wrapper">
        <div className="card">
          <img src={jogo[0]?.image} alt="" />
          <div className="box-info-product">
            <strong>{jogo[0]?.title}</strong>
            <span>R$ {jogo[0]?.price}</span>
          </div>
          <button onClick={handlePutOnCart}>Comprar</button>
        </div>
        <p>{jogo[0]?.description}</p>
      </div>
    </div>
  );
};
export default JogoDetalhe;
