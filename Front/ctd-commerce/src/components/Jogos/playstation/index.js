/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Carousel } from 'react-bootstrap';
import CallOfDuty from '../../../img/games/ps4-call-of-duty.png'
import GodOfWar from '../../../img/games/ps4-god-of-war.png'
import Gta from '../../../img/games/ps4-gta5.png'
import Injustice from "../../../img/games/ps4-injustice.png"
import Sekiro from "../../../img/games/ps4-sekiro.jpg"
import SpidermanPs4 from "../../../img/games/ps4-spider-man.png"
import AssassinsCreed from "../../../img/games/ps5-assassins-creed.jpg"
import Fortinite from "../../../img/games/ps5-fortnite.jpg"
import SpaidermanPs5 from "../../../img/games/ps5-spider-man.png"

const Playstation = () => {
    return (
        <>
            <h2>Jogos | Playstation</h2>
            <Carousel fade variant="dark">

                <Carousel.Item>
                    <section class="container section-product">
                        <article class="container-product">
                            <div class="card">
                                <img src={SpaidermanPs5} alt="" />
                                <div class="box-info-product">
                                    <strong>Call of duty</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <img src={Fortinite} alt="" />
                                <div class="box-info-product">
                                    <strong>GTA 5</strong>
                                    <span>R$ 180,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">
                                <img src={AssassinsCreed} alt="" />
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

                                <img src={SpidermanPs4} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War2</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Sekiro} alt="" />
                                <div class="box-info-product">
                                    <strong>Injustice2</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={Injustice} alt="" />
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

                                <img src={Gta} alt="" />
                                <div class="box-info-product">
                                    <strong>God of War3</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={GodOfWar} alt="" />
                                <div class="box-info-product">
                                    <strong>Call of duty3</strong>
                                    <span>R$ 120,00</span>
                                    <a class="button-buy-product" href="">
                                        <button>Comprar</button>
                                    </a>
                                </div>
                            </div>
                            <div class="card">

                                <img src={CallOfDuty} alt="" />
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
        </>
    )
}

export default Playstation