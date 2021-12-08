/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import { Carousel } from "react-bootstrap";

const Consoles = ({ consoles }) => {
  return (
    <>
      <h2>Consoles</h2>
      <Carousel fade variant="dark">
        <Carousel.Item>
          <section class="container section-product">
            <article class="container-product">
              {consoles.slice(0, 2).map((console) => (
                <div class="card">
                  <img src={console.image} alt="" />
                  <div class="box-info-product">
                    <strong>{console.title}</strong>
                    <span>R$ {console.price}</span>
                    <a class="button-buy-product" href="">
                      <button>Comprar</button>
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
              {consoles.slice(2).map((console) => (
                <div class="card">
                  <img src={console.image} alt="" />
                  <div class="box-info-product">
                    <strong>{console.title}</strong>
                    <span>R$ {console.price}</span>
                    <a class="button-buy-product" href="">
                      <button>Comprar</button>
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

export default Consoles;
