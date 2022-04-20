import React from 'react'
import {
    Container, Row, Col
} from 'reactstrap'

//images

import Premier from "../../assets/images/OTF/icons/Premier.png";
import PremierW from "../../assets/images/OTF/icons/PremierW.png";

import plan from "../../assets/images/OTF/offer/plan.png"



const plansData = [
    {
        icon: Premier,
        iconW: PremierW,
        title: "March 1 Offer",
        feature1: "Buy 2 Months Membership and get the 3rd Month for 10dhs only."
    },
    {
        icon: Premier,
        iconW: PremierW,
        title: "March 2 Offer",
        feature1: "Refer FRIENDS and get a month membership free."
    }
];
const Plans = () => {
    return (
        <section className="plans">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="title title2 title-inner">
                            <div className="main-title">
                                <h2 className="borders text-center m-b-0 oftHeading">
                                    <span>plans to meet any need</span>
                                </h2>
                            </div>
                        </div>
                        <p className="p-light oftsubHeading">
                            Ready to change the way you look, the way you feel, and your life? From free trial workout to monthly packages, Orangetheory has a plan perfect for you. By investing in your health today, you’re also investing in a longer, stronger and more vibrant future.
                        </p>
                    </Col>
                    {plansData &&
                        plansData.length > 0 &&
                        plansData.map((item, i) => (
                            <Col sm={4} key={i} className="mb-3">
                                <div className="plans-container hover-overlay text-center">
                                    <div className="plans-feature-container">
                                        <div className="plans-text">
                                            <center>
                                                <img src={item.icon} className="feature-icon1 mb-4" alt={"icon"} />
                                            </center>
                                            <h4 className="plans-text-heading">{item.title}</h4>
                                        </div>
                                        <div className="plans-features">
                                            <h5 className="plans-feature p-light text-center">{item.feature1}</h5>
                                            <a className="otfBtn2" href="#">Book offer</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                    <Col sm={4}
                        className={"imgOfferContainer mb-3"}
                        style={{ backgroundImage: `url(${plan})` }}
                    >
                        {/* <img src="/assets/images/OTF/offer/plan.png" className='img-fluid' alt={"img"} /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Plans