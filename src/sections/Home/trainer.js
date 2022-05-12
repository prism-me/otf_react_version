import React from 'react'
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'
import { Avatar } from "@agney/react-avatar";


import googleIcon from "../../assets/images/OTF/icons/googleIcon.png"

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 3,
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

const Trainer = ({ testimonial, title, isArabic }) => (
    <section className="app2 gym team">
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
                    <Slider className="owl-carousel owl-theme team-slider"  {...settings}>
                        {testimonial &&
                            testimonial.length > 0 &&
                            testimonial.map((x, i) => (
                                <div className="item" key={i}>
                                    <div className="team-container">
                                        <div
                                            style={{
                                                background: "#6F767B",
                                                borderTopLeftRadius: "5px",
                                                borderTopRightRadius: "5px",
                                                padding: " 25px 30px"
                                            }}
                                        >
                                            {
                                                x.img === null ?
                                                    <Avatar
                                                        src="https://gravatar.com/avatar/7c4ff521986b4ff8d29440beec01972d?s=400&d=robohash&r=x"
                                                        text="CM"
                                                    />
                                                    : <img alt="" className="img-fluid members" src={x.img} />
                                            }

                                            <p className="d-flex justify-content-center align-items-center mb-2">
                                                <ReactStars
                                                    count={5}
                                                    // onChange={() => { }}
                                                    edit={false}
                                                    size={24}
                                                    isHalf={true}
                                                    value={x.rating}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#F58220"
                                                    classNames="rating_bar text-center"
                                                />
                                            </p>
                                        </div>

                                        <div className="text-center"
                                            style={{
                                                padding: " 25px 30px"
                                            }}
                                        >
                                            <h5 className="name">
                                                {
                                                    isArabic
                                                        ? x?.arabic?.name
                                                        : x?.name
                                                }
                                            </h5>
                                            <h6 className="post">
                                                {
                                                    isArabic
                                                        ? x?.arabic?.date
                                                        : x?.date
                                                }
                                            </h6>
                                            <p className="team-para"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        isArabic
                                                            ? x?.arabic?.description
                                                            : x?.description
                                                }}
                                            >
                                            </p>
                                            <center>
                                                <img src={googleIcon}
                                                    className="mt-5 mb-2"
                                                    style={{
                                                        width: "60px"
                                                    }} alt="googleIcon" />
                                            </center>
                                            <p className="team-para">
                                                Verified Reviews
                                            </p>
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