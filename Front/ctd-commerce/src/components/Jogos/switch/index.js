/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Carousel } from "react-bootstrap";

const Switch = ({ jogos }) => {
  return (
    <>
      <h2>Jogos | Switch</h2>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              <div class="card">
                <img src={jogos[0]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[0]?.title}</strong>
                  <span>R$ {jogos[0]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={jogos[0]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[0]?.title}</strong>
                  <span>R$ {jogos[0]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={jogos[1]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[1]?.title}</strong>
                  <span>R$ {jogos[1]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </article>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              <div class="card">
                <img src={jogos[2]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[2]?.title}</strong>
                  <span>R$ {jogos[2]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={jogos[3]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[3]?.title}</strong>
                  <span>R$ {jogos[3]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={jogos[4]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[4]?.title}</strong>
                  <span>R$ {jogos[4]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </article>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              <div class="card">
                <img src={jogos[5]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[5]?.title}</strong>
                  <span>R$ {jogos[5]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={jogos[6]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[6]?.title}</strong>
                  <span>R$ {jogos[6]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
              <div class="card">
                <img src={jogos[7]?.image} alt="" />
                <div class="box-info-product">
                  <strong>{jogos[7]?.title}</strong>
                  <span>R$ {jogos[7]?.price}</span>
                  <a class="button-buy-product" href="">
                    <button>Comprar</button>
                  </a>
                </div>
              </div>
            </article>
          </section>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Switch;
