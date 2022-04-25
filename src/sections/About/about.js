import React from 'react';
import { Container, Row, Col } from 'reactstrap'

//images
import vision from "../../assets/images/OTF/about/vision.png";
import mission from "../../assets/images/OTF/about/mission.png";
import values from "../../assets/images/OTF/about/values.png";



const About = ({ className, divId, title, detail, info1title, info1detail, info2title, info2detail, info3title, info3detail }) => (
    <section className="gym format about-detail pb-2" id={divId && divId}>
        {
            className &&
            <h3 className="oftHeading text-center">
                {title}
            </h3>
        }
        <Container>

            {
                !className &&
                <Row>
                    <Col md="8" className="offset-md-2">
                        <div className="center-text">
                            <div className="text-center">
                                <div className="format-head-text">
                                    <h3 className="oftHeading text-center">
                                        {title}
                                    </h3>
                                </div>
                                {
                                    detail &&
                                    <div className="format-sub-text mb-5">
                                        <p className="oftsubHeading text-center">
                                            {detail}
                                        </p>
                                    </div>
                                }

                            </div>
                        </div>
                    </Col>
                </Row>
            }

            <Row className="contenedor justify-content-center">
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>{info1title}</h2>
                        <p>
                            {info1detail}
                        </p>
                    </article>
                    <img src={mission} alt="" />
                </Col>
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>
                            {info2title}
                        </h2>
                        <p>
                            {info2detail}
                        </p>
                    </article>
                    <img src={vision} alt="" />
                </Col>
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>
                            {info3title}
                        </h2>
                        <p>
                            {info3detail}
                        </p>
                    </article>
                    <img src={values} alt="" />
                </Col>
            </Row>
        </Container >
    </section >
)

export default About;