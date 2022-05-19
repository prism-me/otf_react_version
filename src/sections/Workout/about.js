import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { constants } from '../../utils/constants';

import heartrate from "../../assets/images/OTF/workout/heartrate.PNG";

const About = ({ language }) => (
    <section className="gym format" id="about"
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <Row>
                <Col md="6">
                    <div className="text-center center-content">
                        <img alt="" className="img-fluid format-img mb-3" src={heartrate} />
                    </div>
                </Col>
                <Col md="6">
                    <div className="center-text">
                        <div>
                            <h3 className={`${language === "ar" ? "text-right" : 'text-left'} oftHeading `}
                                style={{
                                    color: "#2E2E2E"
                                }}
                            >
                                {
                                    constants?.site_content?.workoutheartrate_sec?.title[language]
                                }
                            </h3>
                            <div className="format-sub-text">
                                <p className="oftsubHeading"
                                // style={{ fontSize: "14px" }}
                                >
                                    {
                                        constants?.site_content?.workoutheartrate_sec?.subtitle[language]
                                    }
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