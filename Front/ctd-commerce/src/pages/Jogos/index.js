import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";

const Jogos = () => {
  function handleNavigateToGameDetail(e, jogo) {
    e.preventDefault();
    localStorage.setItem("jogo", JSON.stringify(jogo));
    window.location.href = "/jogo-detalhe";
  }
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
      <section className="container section-product">
        <article className="container-product">
          {jogos.map((jogo) => (
            <div key={jogo.id} className="card">
              <img src={jogo.image} alt="" />
              <div className="box-info-product">
                <strong>{jogo.title}</strong>
                <span>R$ {jogo.price}</span>
                <div className="button-buy-product">
                  <Link
                    to="/jogo-detalhe"
                    onClick={(e) => handleNavigateToGameDetail(e, jogo)}
                  >
                    <Button>
                      Ver produto
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
};
export default Jogos;
