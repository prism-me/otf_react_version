import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import aboutImg from "../../assets/images/OTF/home/warrior-2-pose.png";

const About = ({ language }) => (
    <section className="gym format" id="about"
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <Row>
                <Col md="6">
                    <div className="text-center center-content">
                        <img alt="" className="img-fluid format-img mb-3" src={aboutImg} />
                    </div>
                </Col>
                <Col md="6">
                    <div className="center-text">
                        <div>
                            <h3 className="oftHeading text-left"
                                style={{
                                    color: "#2E2E2E"
                                }}
                            >The 5 Heart Rate Zones</h3>
                            <div className="format-sub-text">
                                <p className="oftsubHeading"
                                    style={{ fontSize: "14px" }}
                                >
                                    During our heart-rate based HIIT workout, your coach will guide you through our 5 different heart rate zones: resting, easy, challenging, uncomfortable and All Out, telling you when to push harder and when to pull back for recovery. The goal is to spend 12 minutes or more with your heart rate elevated in “The Orange Zone” to boost your metabolism, burn fat and burn more calories.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;