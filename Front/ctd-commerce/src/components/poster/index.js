import React from 'react'
import './style.scss'
import {Carousel} from 'react-bootstrap'
import img1 from '../../img/posters/poster-1.jpg'
import img2 from '../../img/posters/poster-2.jpg'
import img3 from '../../img/posters/poster-3.jpg'
import img4 from '../../img/posters/poster-4.jpg'
const Poster = () => {
    return (
        <Carousel fade controls={false} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
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
                    src={img2}
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
                    src={img3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}



export default Poster



// let number = 0;

// setInterval(() => {
//   number ++;
//   if(number === 6) {
//     number = 1;
//   }

//   const poster = document.getElementById("poster");
//   poster.style.backgroundImage = url("./img/posters/poster-${number}.jpg");

// }, 5000);


//   document.getElementById("menu-toggle").addEventListener("click", () => {
//   document.querySelector("nav").classList.toggle("active");
// });