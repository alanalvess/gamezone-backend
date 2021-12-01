import React from 'react'
import './style.scss';
import { Carousel } from 'react-bootstrap';

const Produtos = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/123/2500/600"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/456/2500/600"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/id/678/2500/600"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Produtos


// import React from 'react'
// import './style.scss';
// import godOfWar from '../../img/games/god-of-war.png'
// import CallOfDuty from '../../img/games/call-of-duty.png'
// import Gta from '../../img/games/gta-5.png'
// import injustice from "../../img/games/injustice.png"
// import play4 from "../../img/consoles/ps4.png" 
// import play5 from "../../img/consoles/ps5.png"
// import xbox from "../../img/consoles/xbox-series-x.png"
// import xboxpro from "../../img/consoles/xbox-pro.png"

// const Produtos = () => {
//     return (


//         <div>
//             <main>

//                 <section class="container section-product">
//                     <h2>Jogos</h2>
//                     <article class="container-product">
//                         <div class="card">
//                         <img src={godOfWar} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>God of War</strong>
//                                 <span>R$ 120,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                         <div class="card">
//                         <img src={CallOfDuty} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>Call of duty</strong>
//                                 <span>R$ 120,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                         <div class="card">
//                         <img src= {Gta} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>GTA 5</strong>
//                                 <span>R$ 180,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                         <div class="card">
//                         <img src={injustice} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>Injustice</strong>
//                                 <span>R$ 100,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                     </article>
//                 </section>

//                 <section class="container section-product">
//                     <h2>Consoles</h2>
//                     <article class="container-product">
//                         <div class="card">
//                         <img src={play4} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>Playstation 4</strong>
//                                 <span>R$ 1.200,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                         <div class="card">
//                         <img src={play5} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>Playstation 5</strong>
//                                 <span>R$ 1.800,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                         <div class="card">
//                         <img src={xbox} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>Xbox series x</strong>
//                                 <span>R$ 1.500,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                         <div class="card">
//                         <img src={xboxpro} alt=""/>
//                             <div class="box-info-product">
//                                 <strong>xbox pro</strong>
//                                 <span>R$ 1.000,00</span>
//                             </div>
//                             <a class="button-buy-product" href="">
//                                 <button>Comprar</button>
//                             </a>
//                         </div>
//                     </article>
//                 </section>
//             </main>
//         </div>
//     )
// }

// export default Produtos


