import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';
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

const Banner = ({ sliderData }) => {
    const [showModal, setShowModal] = useState(false);

    return (
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
                                    <video autoplay nocontrols loop>
                                        <source src="https://pixabay.com/en/videos/download/video-6782_source.mp4" type="video/mp4" />
                                    </video>
                                    <Container>
                                        <Row>
                                            <Col md="10" className="offset-md-1">
                                                <div className="center-text">
                                                    <div className="text-center">
                                                        <div className="header-text bold-text">
                                                            <h1>{x.title}</h1>
                                                        </div>
                                                        {
                                                            x.detail &&
                                                            <div className="header-sub-text">
                                                                <p className="text-white">
                                                                    {x.detail}
                                                                </p>
                                                            </div>
                                                        }

                                                        {
                                                            x.btnm &&
                                                            <>
                                                                <button className='otfBtn1'
                                                                    onClick={() => setShowModal(true)}
                                                                >
                                                                    {x.btnm}
                                                                </button>
                                                                <Documents
                                                                    show={showModal} onHide={() => setShowModal(false)}
                                                                />
                                                            </>

                                                        }
                                                        <div className="link-horizontal">
                                                            <ul className="justify-content-center">
                                                                {
                                                                    x.btn1 &&
                                                                    <li>
                                                                        <a className=" btn btn-default"
                                                                            onClick={() => setShowModal(true)}
                                                                        >
                                                                            {x.btn1}
                                                                        </a>
                                                                        <Documents
                                                                            show={showModal} onHide={() => setShowModal(false)}
                                                                        />
                                                                    </li>
                                                                }
                                                                {x.btn2 &&
                                                                    <li>
                                                                        <a className=" btn btn-default"
                                                                            onClick={() => setShowModal(true)}
                                                                        >
                                                                            {x.btn2}
                                                                        </a>
                                                                        <Documents
                                                                            show={showModal} onHide={() => setShowModal(false)}
                                                                        />
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
}

export default Banner;