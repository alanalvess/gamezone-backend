/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Xbox = ({ jogos }) => {

  function handleNavigateToGameDetail(e, jogo) {
    e.preventDefault();
    localStorage.setItem("jogo", JSON.stringify(jogo));
    window.location.href = "/jogo-detalhe";
  }
  
  return (
    <>
      <h2>Jogos | Xbox</h2>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
            {jogos.slice(0, 3).map((jogo) => (
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
        </Carousel.Item>
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
            {jogos.slice(0, 3).map((jogo) => (
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
        </Carousel.Item>
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
            {jogos.slice(0, 3).map((jogo) => (
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
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Xbox;
