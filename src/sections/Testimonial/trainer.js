import React from 'react'
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
        }
    ]
};



const Trainer = ({ testimonial, title }) => (
    <section className="app2 gym membersaysabout "
        style={{
            background: "#f2f2f2"
        }}
    >
        <Container>
            <h3 className="oftHeading"
                style={{
                    color: "#2E2E2E"
                }}
            >
                {title}
            </h3>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme membersaysabout-slider"  {...settings}>
                        {testimonial &&
                            testimonial.length > 0 &&
                            testimonial.map((x, i) => (
                                <div className="item" key={i}>
                                    <div className="membersaysabout-container">
                                        <h5 className="name text-center pt-3">
                                            {x.cat}
                                        </h5>
                                        <p className="d-flex justify-content-center align-items-center my-4 ">
                                            <i class="fa fa-quote-left"></i>
                                        </p>
                                        <div className="text-center">
                                            <p className="membersaysabout-para">
                                                {x.subtitle}
                                            </p>

                                            <center>
                                                <img alt="" className="img-fluid members mt-5 mb-2" src={x.img} />
                                            </center>
                                            <h5 className="name"
                                                style={{
                                                    color: "#2E2E2E"
                                                }}
                                            >
                                                {x.title}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section >
)


export default Trainer;