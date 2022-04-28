import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import aboutImg from "../../assets/images/OTF/home/warrior-2-pose.png";

const About = ({ language }) => (
    <section className="gym format" id="about"
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <h3 className="oftHeading">What happens in class doesn’t stay in class?</h3>
            <Row>
                <Col md="5">
                    <div className="text-center center-content">
                        <img alt="" className="img-fluid format-img mb-3" src={aboutImg} />
                    </div>
                </Col>
                <Col md="7">
                    <div className="center-text">
                        <div>
                            <div className="format-sub-text">
                                <p className="oftsubHeading"
                                    style={{ fontSize: "14px" }}
                                >
                                    Orangetheory is a heart-rate based HIIT total-body group workout that combines science, coaching and technology to guarantee maximum results from the inside out. It’s designed to charge your metabolism for MORE caloric afterburn, MORE results, and MORE confidence, all to deliver you MORE LIFE.  Orangetheory is more than a gym because the work you do here in our studio will make all the difference out there in your world.
                                </p>
                            </div>
                            <Link className="otfBtn" to={`/${language}/workout`}>Learn More About The Workout</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;