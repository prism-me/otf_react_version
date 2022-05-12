import React from 'react';
import { Container, Row, Col } from 'reactstrap'

//images

import visionIcon from "../../assets/images/OTF/icons/vision.png";
import missionIcon from "../../assets/images/OTF/icons/mission.png";
import valuesIcon from "../../assets/images/OTF/icons/values.png";

const About = ({ intoSec, valueSec, visionSec, language, missionSec, missionImg, visionImg, valueImg }) => (
    <section className="gym format about-detail pb-2" id="mission">

        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="center-text">
                        <div className="text-center">
                            <div className="format-head-text">
                                <h3 className="oftHeading text-center">
                                    {intoSec?.title}
                                </h3>
                            </div>

                            <div className="format-sub-text mb-5">
                                <p className="oftsubHeading text-center"
                                    dangerouslySetInnerHTML={{
                                        __html: intoSec?.content
                                    }}
                                >
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="contenedor justify-content-center">
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>
                            <img src={missionIcon} alt="mission Icon" style={{ width: "40px" }} className="mr-2" />
                            <span>
                                {missionSec?.title}
                            </span>
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: missionSec?.content
                            }}
                        >
                        </p>
                    </article>
                    <img src={missionImg} alt="" className='imgStyle' />
                </Col>
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>
                            <img src={visionIcon} alt="mission Icon" style={{ width: "40px" }} className="mr-2" />
                            <span>{visionSec?.title}</span>
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: visionSec?.content
                            }}
                        >
                        </p>
                    </article>
                    <img src={visionImg} alt="" className='imgStyle' />
                </Col>
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>
                            <img src={valuesIcon} alt="mission Icon" style={{ width: "40px" }} className="mr-2" />
                            <span>{valueSec?.title}</span>
                        </h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: valueSec?.content
                            }}
                        >
                        </p>
                    </article>
                    <img src={valueImg} alt="" className='imgStyle' />
                </Col>
            </Row>
        </Container >
    </section >
)

export default About;