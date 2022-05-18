import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { constants } from '../../utils/constants';

import aboutImg from "../../assets/images/OTF/home/warrior-2-pose.png";

const About = ({ language }) => (
    <section className="gym format" id="about"
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <h3 className="oftHeading">
                {
                    constants?.site_content?.about_sec?.title[language]
                }
            </h3>
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
                                // style={{ fontSize: "14px" }}
                                >
                                    {
                                        constants?.site_content?.about_sec?.description[language]
                                    }
                                </p>
                            </div>
                            <Link className="otfBtn" to={`/${language}/workout`}>
                                {
                                    constants?.site_content?.about_sec?.btn_text[language]
                                }
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default About;