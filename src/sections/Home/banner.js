import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Banner = ({ sliderData }) => (
    <section className="gym header" id="home">
        <div className="header5-content">
            <Slider className="default-dots gym-slider" id="gym-slider" {...settings}>
                {sliderData &&
                    sliderData.length > 0 &&
                    sliderData.map((x, i) => (
                        <div className="item" key={i}>
                            <div className="gym-header bg"
                                style={{ backgroundImage: `url(${x.bannerImg})` }}
                            >
                                <Container>
                                    <Row>
                                        <Col md="10" className="offset-md-1">
                                            <div className="center-text">
                                                <div className="text-center">
                                                    <div className="header-text bold-text">
                                                        <h1>{x.title}</h1>
                                                    </div>
                                                    <div className="header-sub-text">
                                                        <p className="text-white p-light">
                                                            {x.detail}
                                                        </p>
                                                    </div>
                                                    {
                                                        x.btnm &&
                                                        <button className='otfBtn1'>
                                                            {x.btnm}
                                                        </button>
                                                    }
                                                    <div className="link-horizontal">
                                                        <ul className="justify-content-center">
                                                            {
                                                                x.btn1 &&
                                                                <li>
                                                                    <a className=" btn btn-default">
                                                                        {x.btn1}
                                                                    </a>
                                                                </li>
                                                            }
                                                            {x.btn2 &&
                                                                <li>
                                                                    <a className=" btn btn-default">
                                                                        {x.btn2}
                                                                    </a>
                                                                </li>
                                                            }
                                                        </ul>
                                                    </div>
                                                    {
                                                        x.viewbtn &&
                                                        <button className='viewbtn'>
                                                            {x.viewbtn}
                                                        </button>
                                                    }
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    )
                    )
                }
            </Slider>
        </div>
    </section>
)


export default Banner;