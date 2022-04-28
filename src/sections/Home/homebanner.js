import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';
import ApplyNow from '../../components/Modals/ApplyNow/ApplyNow';

import BackGroundVideo from "../../components/BackGroundVideo/BackGroundVideo";

import slider1 from "../../assets/images/OTF/banner/homeBannerSlider.jpg";

var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    // autoplay: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};


const sliderData = [
    {
        bannerImg: slider1,
        title: "Get Results You Can See and Feel",
        // btn2: "BOOK A FREE CLASS NOW",
        btn1: "VIEW MEMBERSHIP PACKAGES",
    },
    {
        bannerImg: slider1,
        title: "The Smartest Workout for More Results",
        btn1: "BOOK A FREE CLASS NOW",
        // btn2: "view membership details"
    }
];

const HomeBanner = ({ language }) => {
    const [showModal, setShowModal] = useState(false);
    const [showCModal, setCShowModal] = useState(false);

    const [autoplay, setAutoplay] = useState({ ...settings.autoplay });

    useEffect(() => {

        setTimeout(() => {
            setAutoplay(true);
        }, 2000);

    }, []);


    const videoSource = "https://dafoos.b-cdn.net/otfvideo/SNEAKPEEK_280422_12SECS_V2_1920x920_withoutlogomp4.mp4";

    return (
        <section className="gym header" id="home">
            <div className="header5-content">
                <Slider className="default-dots gym-slider" id="gym-slider" {...settings} autoplay={autoplay}>
                    <div className="item">
                        <BackGroundVideo
                            videoSource={videoSource}
                        >
                            <div className='content'>
                                <div className={"inner-header flex "}>
                                    <Container>
                                        <div className="center-text justify-content-center align-items-center">
                                            <div className="text-center">
                                                <div className="header-text bold-text">
                                                    <h1>
                                                        Get Results You Can See and Feel
                                                    </h1>
                                                </div>
                                                <div className="link-horizontal">
                                                    <ul className="justify-content-center">
                                                        {/* {
                                                            x.btn1 && */}
                                                        <li>
                                                            <a className=" btn btn-default" href={`/${language}/memberships`}
                                                            // onClick={() => setShowModal(true)}
                                                            >
                                                                VIEW MEMBERSHIP PACKAGES
                                                            </a>
                                                            {/* <Documents
                                                                show={showModal} onHide={() => setShowModal(false)}
                                                                title={"VIEW MEMBERSHIP PACKAGES"}
                                                            /> */}
                                                        </li>
                                                        {/* } */}

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


                                    </Container>
                                </div>
                            </div>
                        </BackGroundVideo>
                    </div>
                    <div className="item" >
                        <div className="gym-header bg gym-headerBg"
                            style={{ backgroundImage: `url(${slider1})` }}
                        >
                            <Container>
                                <Row>
                                    <Col md="10" className="offset-md-1">
                                        <div className="center-text">
                                            <div className="text-center">
                                                <div className="header-text bold-text">
                                                    <h1>
                                                        The Smartest Workout for More Results
                                                    </h1>
                                                </div>
                                                <div className="link-horizontal">
                                                    <ul className="justify-content-center">
                                                        <li>
                                                            <a className=" btn btn-default"
                                                                onClick={() => setCShowModal(true)}
                                                            >
                                                                BOOK A FREE CLASS NOW
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Slider>
                <ApplyNow
                    show={showCModal} onHide={() => setCShowModal(false)}
                />

                {/* <Slider className="default-dots gym-slider" id="gym-slider" {...settings}>
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
                                                        {
                                                            x.detail &&
                                                            <div className="header-sub-text">
                                                                <p className="text-white">
                                                                    {x.detail}
                                                                </p>
                                                            </div>
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
                </Slider> */}
            </div>
        </section>
    )
}

export default HomeBanner;