import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col } from 'reactstrap'

//images
import otbImg from "../../assets/images/OTF/about/otbbg.jpg"
import heatl1 from "../../assets/images/OTF/icons/heatl1.png"
import heatl2 from "../../assets/images/OTF/icons/heatl2.png"
import heatl3 from "../../assets/images/OTF/icons/heatl3.png"

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const otfData = [
    {
        img: otbImg,
        title: "Get Results, Straight from Your Heart.",
        detail1: "We’ll prove you’re improving. Our OTbeat technology measures your heart rate and performance data in real time so you know your workout is working.",
    },
    {
        img: otbImg,
        title: "See Results in Real Time.",
        detail1: "In-studio monitors connect directly with your OTbeat wearable to show your progress and keep you accountable to your level of effort.",
    },
    {
        img: otbImg,
        title: "Track Performance in the App.",
        detail1: "You’ll have 24/7 access to your results and fitness data so you can track your performance and set new goals.",
    }
]
const Counter = () => (
    <section className="OTbeatStyle p-0">
        <Slider className="default-dots otbeat-slider" id="gym-slider" {...settings}>
            {otfData.length > 0 &&
                otfData.map((x, i) => (
                    <div className="item" key={i}>
                        <div className="otbBgImg"
                            style={{ backgroundImage: `url(${x.img})` }}
                        >
                            <Container>
                                <Row>
                                    <Col md="7">
                                        <h3 className="oftHeading">
                                            {x.title}
                                        </h3>

                                        <p className="oftsubHeading text-white">
                                            {x.detail1}
                                        </p>
                                        {/* <p className="oftsubHeading text-white">
                                            {x.detail2}
                                        </p> */}
                                        {/* <ul className="icon-collection">
                                            <li className="about-icongym">
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid icons" src={heatl1} />
                                                </a>
                                            </li>
                                            <li className="about-icongym">
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid icons" src={heatl2} />
                                                </a>
                                            </li>
                                            <li className="about-icongym">
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid icons" src={heatl3} />
                                                </a>
                                            </li>
                                        </ul> */}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                )
                )
            }
        </Slider>
    </section>
)

export default Counter;