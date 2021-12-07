// import { useLocation } from "react-router-dom";

import "./style.scss";
import SpaidermanPs5 from "../../img/games/ps5-spider-man.png";
// import { useCart } from "../../contexts/CartContext";

const JogoDetalhe = () => {
  // const cartContext = useCart();
  // const params = useLocation();
  // console.log("PARAMS", params);

  return (
    <div className="jogo-detalhe-wrapper">
      <h1>Spiderman Miles Morales</h1>
      <h3>Jogos</h3>
      <h6>Avaliaçāo: 8</h6>
      <div className="card-wrapper">
        <div className="card">
          <img src={SpaidermanPs5} alt="" />
          <div className="box-info-product">
            <strong>Spiderman Miles Morales</strong>
            <span>R$ 120,00</span>
          </div>
          <button>Comprar</button>
        </div>
        <p>
          Este produto lhe dá o direito de baixar a versão digital de PS4™ e a
          versão digital de PS5™ deste jogo. Na aventura mais recente do
          universo de Marvel's Spider-Man, o adolescente Miles Morales está se
          adaptando à sua nova casa enquanto segue os passos de seu mentor,
          Peter Parker, para se tornar um novo Spider-Man. Mas uma violenta
          disputa de forças ameaça destruir seu novo lar e faz o aspirante a
          herói perceber que com grandes poderes também vêm grandes
          responsabilidades.
        </p>
      </div>
    </div>
  );
};
export default JogoDetalhe;
