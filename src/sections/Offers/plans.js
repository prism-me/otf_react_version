import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Container, Row, Col
} from 'reactstrap'


//images

import plan from "../../assets/images/OTF/offer/plan.png"
import BookOffer from '../Offers/startburning';

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

const Plans = ({ offersData, isArabic, language }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="plans">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="title title2 title-inner">
                            <div className="main-title">
                                <h2 className="borders text-center m-b-0 oftHeading">
                                    <span>Limited Offers</span>
                                </h2>
                            </div>
                        </div>
                        <p className="oftsubHeading">
                            Ready to change the way you look, the way you feel, and your life? From free trial workout to monthly packages, Orangetheory has a plan perfect for you. By investing in your health today, you’re also investing in a longer, stronger and more vibrant future.
                        </p>
                    </Col>
                </Row>
                <Slider className="owl-carousel owl-theme plans-slider"  {...settings}>
                    {offersData &&
                        offersData.length > 0 &&
                        offersData.map((item, i) => (
                            // <Col sm={4} key={i} className="mb-3">
                            <div className="item" key={i}>
                                <div className="plans-container hover-overlay text-center">
                                    <div className="plans-feature-container">
                                        <div className="plans-text">
                                            <center>
                                                <img src={item?.icon} className="feature-icon1 mb-4" alt={"icon"} />
                                            </center>
                                            <h4 className="plans-text-heading">
                                                {
                                                    isArabic ? item?.arabic?.name :
                                                        item?.name
                                                }
                                            </h4>
                                        </div>
                                        <div className="plans-features">
                                            <h5 className="plans-feature text-center"
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        isArabic ? item?.arabic?.description :
                                                            item?.description

                                                }}
                                            >
                                            </h5>
                                            <button className="otfBtn2"
                                                onClick={() => setShowModal(true)}
                                            >Book offer</button>
                                            <BookOffer
                                                show={showModal} onHide={() => setShowModal(false)}
                                                title={"Book Offer"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            // </Col>
                        ))
                    }
                </Slider>
                {/* <Col sm={4}
                    className={"imgOfferContainer mb-3"}
                    style={{ backgroundImage: `url(${plan})` }}
                > */}
                {/* <img src="/assets/images/OTF/offer/plan.png" className='img-fluid' alt={"img"} /> */}
                {/* </Col>
            </Row> */}
            </Container>
        </section >
    )
}
export default Plans