import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./style.scss";

const Jogos = () => {
  const [jogos, setJogos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    axios
      .get(
        "http://gamezone-env.eba-nm6433md.us-east-1.elasticbeanstalk.com/products"
      )
      .then((res) => {
        const jogos = res.data.filter(
          (jogo) => jogo.category.name !== "Consoles"
        );
        const jogosFiltrados = jogos.filter(
          (jogo) => jogo.category.name === selectedCategory
        );
        if (selectedCategory === "all") {
          setJogos(jogos);
        } else {
          setJogos(jogosFiltrados);
        }
      })
      .catch((err) => console.log(err));
  }, [selectedCategory]);
  return (
    <>
      <Helmet>
        <title>GameZone | Jogos</title>
      </Helmet>
      <div className="select-container">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option selected="selected" value="all">
            Todos os jogos
          </option>
          <option value="Jogos de PlayStation">Jogos de Playstation</option>
          <option value="Jogos de Xbox">Jogos de Xbox</option>
          <option value="Jogos de Switch">Jogos de Switch</option>
        </select>
      </div>
      <div className="jogos-grid">
        {jogos.map((jogo) => (
          <div key={jogo.id} class="card">
            <img src={jogo.image} alt="" />
            <div class="box-info-product">
              <strong>{jogo.title}</strong>
              <span>R$ {jogo.price}</span>
              <a class="button-buy-product" href="/">
                <button onClick={() => {}}>Comprar</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Jogos;
