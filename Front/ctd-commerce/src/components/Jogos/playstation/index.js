/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Playstation = ({ jogos }) => {
  function handleNavigateToGameDetail(e, jogo) {
    e.preventDefault();
    localStorage.setItem("jogo", JSON.stringify(jogo));
    window.location.href = "/jogo-detalhe";
  }
  return (
    <>
      <h2>Jogos | Playstation</h2>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              {jogos.slice(0, 3).map((jogo) => (
                <div key={jogo.id} class="card">
                  <img src={jogo.image} alt="" />
                  <div class="box-info-product">
                    <strong>{jogo.title}</strong>
                    <span>R$ {jogo.price}</span>
                    <a class="button-buy-product" href="">
                      <Link
                        to="/jogo-detalhe"
                        onClick={(e) => handleNavigateToGameDetail(e, jogo)}
                      >
                        Comprar
                      </Link>
                    </a>
                  </div>
                </div>
              ))}
            </article>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              {jogos.slice(3, 6).map((jogo) => (
                <div key={jogo.id} class="card">
                  <img src={jogo.image} alt="" />
                  <div class="box-info-product">
                    <strong>{jogo.title}</strong>
                    <span>R$ {jogo.price}</span>
                    <a class="button-buy-product" href="">
                      <button onClick={handleNavigateToGameDetail}>
                        Comprar
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </article>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              {jogos.slice(6, 9).map((jogo) => (
                <div key={jogo.id} class="card">
                  <img src={jogo.image} alt="" />
                  <div class="box-info-product">
                    <strong>{jogo.title}</strong>
                    <span>R$ {jogo.price}</span>
                    <a class="button-buy-product" href="">
                      <button onClick={handleNavigateToGameDetail}>
                        Comprar
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </article>
          </section>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Playstation;
