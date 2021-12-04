import React from 'react'
import './style.scss'
import {Carousel} from 'react-bootstrap'
import img1 from '../../../../img/posters/poster-1.jpg'
import img2 from '../../../../img/posters/poster-2.jpg'
import img3 from '../../../../img/posters/poster-3.jpg'
import img4 from '../../../../img/posters/poster-4.jpg'
import img5 from '../../../../img/posters/poster-5.jpg'

const Poster = () => {
    return (
        <Carousel id="poster" fade controls={false} indicators={false}>
            <Carousel.Item>
                <img
                    className="poster-img d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>God of Wars</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="poster-img d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>GTA5</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="poster-img d-block w-100"
                    src={img3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Need For Speed 2021</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="poster-img d-block w-100"
                    src={img4}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Bully</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="poster-img d-block w-100"
                    src={img5}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2>Scorpion</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default Poster
