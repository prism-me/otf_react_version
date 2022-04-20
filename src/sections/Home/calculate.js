import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import locationbg from "../../assets/images/OTF/home/locationbg.jpg";

import PhoneIcon from '@material-ui/icons/Phone';


const Calculate = () => (
    <section className="gym format bg-location p-0" id="bmi">
        <Container fluid>
            <Row>
                <Col sm={12} md={6} lg={6} className={"BGImgLocation p-0"}
                    style={{ backgroundImage: `url(${locationbg})` }}
                >
                    <div className={"p-5 mx-5 mb-4 calLocationspacing"}>
                        <h3 className="text-left oftHeading">Our Locations</h3>
                        <Container>
                            <Row className={"locationDiv mb-3"}>
                                <Col sm={8}>
                                    <h4 className='locationHeading'>
                                        Orangetheory Fitness
                                        mercato mall - Level 1
                                    </h4>
                                    <p className='locationsubHeading'>
                                        Jumeirah Beach Road, Dubai
                                        United Arab Emirates <br />
                                        Contact No: <a href="tel:9714 340 1040">+9714 340 1040</a>
                                    </p>
                                </Col>
                                <Col sm={4} className={"d-flex justify-content-center align-items-center"}>
                                    <a href="tel:9714 340 1040" className="iconstyelLocation">
                                        <PhoneIcon />
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"locationDiv"}>
                                <Col sm={8} >
                                    <h4 className='locationHeading'>
                                        times square center - Ground Floor
                                    </h4>
                                    <p className='locationsubHeading'>
                                        Sheikh Zayed Road, Dubai
                                        United Arab Emirates <br />
                                        Contact No: <a href="tel:+9714 324 4424">+9714 324 4424</a>
                                    </p>
                                </Col>
                                <Col sm={4} className={"d-flex justify-content-center align-items-center"}>
                                    <a href="tel:+9714 324 4424" className="iconstyelLocation">
                                        <PhoneIcon />
                                    </a>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Col>
                <Col sm={12} md={6} lg={6} className={"p-0"}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6032486928893!2d55.25071151432762!3d25.216599037102654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4362916220b1%3A0x175f64a16111cae7!2sOrangetheory%20Fitness%20at%20Mercato%20Mall!5e0!3m2!1sen!2s!4v1649050081764!5m2!1sen!2s"
                        width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Calculate;