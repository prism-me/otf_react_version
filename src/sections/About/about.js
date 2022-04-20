import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const About = ({ divId, title, detail, info1title, info1detail, info2title, info2detail, info3title, info3detail }) => (
    <section className="gym format about-detail pb-2" id={divId && divId}>
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="center-text">
                        <div className="text-center">
                            <div className="format-head-text">
                                <h3 className="oftHeading">
                                    {title}
                                </h3>
                            </div>
                            <div className="format-sub-text mb-5">
                                <p className="p-light oftsubHeading text-center">
                                    {detail}
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="contenedor justify-content-center">
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>{info1title}</h2>
                        <p>
                            {info1detail}
                        </p>
                    </article>
                    <img src="/assets/images/OTF/about/mission.png" alt="" />
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
                    <img src="/assets/images/OTF/about/vision.png" alt="" />
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
                    <img src="/assets/images/OTF/about/values.png" alt="" />
                </Col>
            </Row>
        </Container >
    </section >
)

export default About;