import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'reactstrap'
import Documents from '../../components/Modals/Documents/Documents';

import Premier from "../../assets/images/OTF/icons/Premier.png";
import PremierW from "../../assets/images/OTF/icons/PremierW.png"

import OrangeElite from "../../assets/images/OTF/icons/Orange-elite.png";
import eliteW from "../../assets/images/OTF/icons/eliteW.png"

import Basic from "../../assets/images/OTF/icons/Basic.png";
import BasicW from "../../assets/images/OTF/icons/BasicW.png"
import membership from "../../assets/images/OTF/icons/membership.png"



var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: { slidesToShow: 1 }
        }
    ]
};


const PricingResume2 = [
    {
        icon: Premier,
        iconW: PremierW,
        title: "Orange Premier",
        feature1: "Unlimited classes",
        feature2: 'Reduced rate for families',
        feature3: ''
    },
    {
        icon: OrangeElite,
        iconW: eliteW,
        title: "Orange Elite",
        feature1: "8 classes/month",
        feature2: 'Extra classes at reduced rate',
        feature3: ''
    },
    {
        icon: Basic,
        iconW: BasicW,
        title: "Orange Basic",
        feature1: "4 classes/month",
        feature2: 'Extra classes at reduced rate',
        feature3: ''
    },
    {
        icon: membership,
        iconW: membership,
        title: "Class Packages",
        feature1: "10 Classes",
        feature2: '20 Classes',
        feature3: '30 Classes'
    },
    {
        icon: Basic,
        iconW: BasicW,
        title: "Corporate Memberships",
        feature1: "Orangetheory Fitness is more than just a workout. It's an employee-engaging, productivity-elevating experience designed to give your company More Bottom Line and give your employees More Life, one class at a time.",
        feature2: '',
        feature3: ''
    },
];

const Pricing = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="gym pricing set-relative pb-0"
            id="membership_packages">
            <Container>
                <Row>
                    <Col md="10" className="offset-md-1">
                        <h2 className="oftHeading"
                            style={{
                                color: "#2E2E2E"
                            }}
                        >Become a Member</h2>
                        <p className="oftsubHeading text-center mb-5">
                            It only takes a minute in our studio to understand it’s not a competition – it’s a
                            community. Check out our membership options and contact your local studio
                            to find the right fit for you.
                        </p>
                    </Col>
                    <Col lg="12" md="8" className="offset-md-2 offset-lg-0">
                        <Row className="justify-content-center">
                            {/* <Slider className="pricing-slider price-margin" {...settings}> */}
                            {PricingResume2 &&
                                PricingResume2.length > 0
                                && PricingResume2.map((item, i) => {
                                    return (
                                        <Col sm={12} lg="4" md="6" key={i} className="pb-3">
                                            <div className="price-container hover-overlay shadows bg-white text-center">
                                                <div className="price-feature-container set-relative">
                                                    <div className="feature-text">
                                                        <center>
                                                            <img src={item.icon} className="feature-icon1 mb-4" alt={"icon"} />
                                                            <img src={item.iconW} className="feature-icon2 d-none mb-4" alt={"icon"} />
                                                        </center>
                                                        <h4 className="feature-text-heading text-center bold text-uppercase font-primary">{item.title}</h4>
                                                        <hr className="set-border" />
                                                    </div>
                                                    <div className="price-features font-primary px-4">
                                                        <h5 className="price-feature text-center mb-1">{item.feature1}</h5>
                                                        <h5 className={`price-feature text-center ${item.feature3 && "mb-1"} `}>{item.feature2}</h5>
                                                        {
                                                            item.feature3 &&
                                                            <h5 className="price-feature text-center">{item.feature3}</h5>
                                                        }
                                                    </div>
                                                    <button className="otfBtn2"
                                                        onClick={() => setShowModal(true)}
                                                    >
                                                        <span
                                                            style={{ borderBottom: "1px solid #F58220" }}
                                                        >
                                                            join now
                                                        </span></button>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })}
                        </Row>
                        {/* </Slider> */}
                        <Documents
                            show={showModal} onHide={() => setShowModal(false)}
                            title="Become a Member Today"
                        />
                    </Col>
                </Row>
                <center>
                    {/* <p className='oftsubHeading mt-2 text-center'>
                    Contact front desk for more details.
                </p> */}
                    <button className='otfBtn1 mt-4'
                        style={{ border: "1px solid #F58220" }}
                    >
                        Contact front desk for more details.
                    </button>
                </center>
            </Container>
        </section>
    )
}

export default Pricing;