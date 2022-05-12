import React from 'react'
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



const Trainer = ({ memberreviewData, title, language, isArabic }) => (
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
                        {memberreviewData?.map((x, i) => (
                            <div className="item" key={i}>
                                <div className="membersaysabout-container">
                                    <h5 className="name text-center pt-3">
                                        {
                                            isArabic
                                                ? x?.arabic?.title
                                                : x?.title
                                        }
                                    </h5>
                                    <p className="d-flex justify-content-center align-items-center my-4 ">
                                        <i class="fa fa-quote-left"></i>
                                    </p>
                                    <div className="text-center">
                                        <p className="membersaysabout-para"
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    isArabic
                                                        ? x?.arabic?.description
                                                        : x?.description
                                            }}
                                        >
                                        </p>
                                        {
                                            x.img === null ?
                                                <center>
                                                    <div className="avatarStyle">
                                                        <span>{
                                                            isArabic
                                                                ? x?.arabic?.name.charAt(0)
                                                                : x?.name.charAt(0)
                                                        }</span>
                                                    </div>
                                                </center>
                                                : <center>
                                                    <img alt="" className="img-fluid members mt-5 mb-2" src={x.img} />
                                                </center>
                                        }

                                        <h5 className="name"
                                            style={{
                                                color: "#2E2E2E"
                                            }}
                                        >
                                            {
                                                isArabic
                                                    ? x?.arabic?.name
                                                    : x?.name
                                            }
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