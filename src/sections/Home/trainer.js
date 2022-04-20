import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1200,
            settings: { slidesToShow: 3 }
        }
    ]
};

const Trainer = ({ testimonial, title }) => (
    <section className="gym trainers">
        <Container className="overflow-hide">
            <h3 className="oftHeading text-dark mb-0">
                {title}
            </h3>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme trainers-slider" id="trainers-slider" {...settings}>
                        {testimonial &&
                            testimonial.length > 0 &&
                            testimonial.map((x, i) => (
                                <div className="item" key={i}>
                                    <img alt="" className="img-fluid" src={x.img} />
                                    <div className="text-center trainers-info">
                                        <h4 className=" mb-2">
                                            {
                                                x.title
                                            }
                                        </h4>
                                        <p className="p-light text-center">
                                            {
                                                x.subtitle
                                            }
                                        </p>
                                        {/* <div className="socials-lists">
                                        <ul className="socials-horizontal justify-content-center">
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-google center-content"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Trainer;