/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss';
import { Carousel } from 'react-bootstrap';
import PS5 from '../../img/consoles/ps5.png'
import PS4 from '../../img/consoles/ps4.png'
import XboxX from '../../img/consoles/xbox-series-x.png'
import XboxS from '../../img/consoles/xbox-series-s.png'

const Consoles = () => {
    return (
        <>
            <h2>Consoles</h2>
            <Carousel fade variant="dark">

                <Carousel.Item>
                    <section class="container section-product">
                        <article class="container-product">
                            <div class="card">
                                <img src={PS5} alt="" />
                                <div class="box-info-product">
                                    <strong>PS5</strong>
                                    <span>R$ 5000,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <img src={PS4} alt="" />
                                <div class="box-info-product">
                                    <strong>PS4</strong>
                                    <span>R$ 3000,00</span>
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
                                <img src={XboxX} alt="" />
                                <div class="box-info-product">
                                    <strong>Xbox Series X</strong>
                                    <span>R$ 5000,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <img src={XboxS} alt="" />
                                <div class="box-info-product">
                                    <strong>Xbox Series S</strong>
                                    <span>R$ 3000,00</span>
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



    )
}

export default Consoles