import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'

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
        img: "/assets/images/OTF/about/otbbg.jpg",
        title: "Orange Theory Beat - OTBEAT",
        detail1: "OTbeat is our exclusive heart rate monitoring technology. Members have the unique experience of seeing real time data during their workout, enabling them to push themselves to new limits. After class, they can then monitor their improvements through emailed results and by using the OTbeat APP.",
        detail2: "Risus in facilisi sem nulla vitae sagittis eget tellus.Adipiscing cursus duis accumsan, id tellus et blandit lectus.Nibh magna augue tellus, est!"
    },
    {
        img: "/assets/images/OTF/about/otbbg.jpg",
        title: "Orange Theory Beat - OTBEAT",
        detail1: "OTbeat is our exclusive heart rate monitoring technology. Members have the unique experience of seeing real time data during their workout, enabling them to push themselves to new limits. After class, they can then monitor their improvements through emailed results and by using the OTbeat APP.",
        detail2: "Risus in facilisi sem nulla vitae sagittis eget tellus.Adipiscing cursus duis accumsan, id tellus et blandit lectus.Nibh magna augue tellus, est!"
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
                                    <Col md="6">
                                        <h3 className="oftHeading">
                                            {x.title}
                                        </h3>

                                        <p className="p-light oftsubHeading text-white">
                                            {x.detail1}
                                        </p>
                                        <p className="p-light oftsubHeading text-white">
                                            {x.detail2}
                                        </p>
                                        <ul className="icon-collection">
                                            <li className="about-icongym">
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid icons" src="/assets/images/OTF/icons/heatl1.png" />
                                                </a>
                                            </li>
                                            <li className="about-icongym">
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid icons" src="/assets/images/OTF/icons/heatl2.png" />
                                                </a>
                                            </li>
                                            <li className="about-icongym">
                                                <a className="center-content" href="#">
                                                    <img alt="" className="img-fluid icons" src="/assets/images/OTF/icons/heatl3.png" />
                                                </a>
                                            </li>
                                        </ul>
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