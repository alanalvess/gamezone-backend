/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.scss';
import { Carousel } from 'react-bootstrap';
import GodOfWar from '../../../../img/games/god-of-war.png'
import CallOfDuty from '../../../../img/games/call-of-duty.png'
import Gta from '../../../../img/games/gta-5.png'
import Injustice from "../../../../img/games/injustice.png"

const Produtos = () => {
    return (
        <>
            <h2>Jogos</h2>
            <Carousel fade variant="dark">

                <Carousel.Item>
                    <section class="container section-product">
                        <article class="container-product">
                            <div class="card">
                                <img src={CallOfDuty} alt="" />
                                <div class="box-info-product">
                                    <strong>Call of duty</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 5</strong>
                                    <span>R$ 180,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Injustice} alt="" />
                                <div class="box-info-product">
                                    <strong>Injustice</strong>
                                    <span>R$ 100,00</span>
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

                                <img src={GodOfWar} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War2</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Injustice} alt="" />
                                <div class="box-info-product">
                                    <strong>Injustice2</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 2</strong>
                                    <span>R$ 180,00</span>
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

                                <img src={GodOfWar} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War3</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={CallOfDuty} alt="" />
                                <div class="box-info-product">
                                    <strong>Call of duty3</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 3</strong>
                                    <span>R$ 180,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>


                </Carousel.Item>

            </Carousel>


            <h2>Consoles</h2>

            <Carousel fade variant="dark">

                <Carousel.Item>
                    <section class="container section-product">

                        <article class="container-product">
                            <div class="card">

                                <img src={GodOfWar} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War4</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={CallOfDuty} alt="" />
                                <div class="box-info-product">
                                    <strong>Call of duty4</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 4</strong>
                                    <span>R$ 180,00</span>
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

                                <img src={GodOfWar} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War5</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Injustice} alt="" />
                                <div class="box-info-product">
                                    <strong>Injustice5</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 5</strong>
                                    <span>R$ 180,00</span>
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

                                <img src={GodOfWar} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War6</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={CallOfDuty} alt="" />
                                <div class="box-info-product">
                                    <strong>Call of duty6</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 6</strong>
                                    <span>R$ 180,00</span>
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

export default Produtos