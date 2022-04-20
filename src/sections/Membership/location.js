import React from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'

import locationImg from "../../assets/images/OTF/membership/locationImg.png";


const Location = () => (
    <section className="gym locations pb-0" id="plan">
        <Container>
            <Row>
                <Col lg="4" md="4" className="offset-lg-0">
                    <div class="locationImg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6032486928893!2d55.25071151432762!3d25.216599037102654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4362916220b1%3A0x175f64a16111cae7!2sOrangetheory%20Fitness%20at%20Mercato%20Mall!5e0!3m2!1sen!2s!4v1649050081764!5m2!1sen!2s"
                            width="100%" height="370px" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="overlaylocation">
                            <a href="https://www.google.com/maps/place/Orangetheory+Fitness+at+Mercato+Mall/@25.216599,55.2507115,17z/data=!3m2!4b1!5s0x3e5f4243cad8dd03:0xab8546f914b2942c!4m5!3m4!1s0x3e5f4362916220b1:0x175f64a16111cae7!8m2!3d25.2165942!4d55.2529002" target={"_blank"}>
                                <div className="locationtext">
                                    <h3 className='headingL mb-3'>mercato mall</h3>
                                    <p className='subheadingL1'>
                                        Jumeirah Beach Road
                                        Al Satwa, Dubai United Arab Emirates
                                        Dubai, Dubayy (Dubai) TBD
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </Col>
                <Col lg="4" md="4" className="offset-lg-0">
                    <div class="locationImg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8857122970785!2d55.21780921448317!3d25.13955444020715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bd35b12bb4b%3A0x625190607a7e36d8!2sTimes%20Square%20Center%20Dubai!5e0!3m2!1sen!2s!4v1649231938810!5m2!1sen!2s"
                            width="100%" height="370px" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="overlaylocation">
                            <a href="https://www.google.com/maps/place/Times+Square+Center+Dubai/@25.1395544,55.2178092,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f6bd35b12bb4b:0x625190607a7e36d8!8m2!3d25.1395496!4d55.2199979" target={"_blank"}>
                                <div className="locationtext">
                                    <h3 className='headingL mb-3'>Times Square Centre - Ground Floor</h3>
                                    <p className='subheadingL1'>
                                        Sheikh Zayed Road, Dubai United Arab Emirates
                                    </p>
                                </div>
                            </a>

                        </div>
                    </div>

                </Col>
                <Col lg="4" md="4" className="offset-lg-0"
                >
                    <div class="locationImg">
                        <img src={locationImg} alt="Avatar" className="image img-fluid" />
                        <div className="overlaylocation">
                            <div className="locationtext">
                                <h3 className='headingL mb-3'>Our locations</h3>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text
                                                    style={{
                                                        background: 'transparent', border: "0",
                                                        borderBottom: "1px solid white",
                                                        borderRadius: "0"
                                                    }}
                                                >
                                                    <i className="fa fa-search" aria-hidden="true"
                                                        style={{ color: 'white', fontSize: 18 }}>
                                                    </i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search for your nearest establishment"
                                                style={{
                                                    background: 'transparent', color: 'white', border: "0",
                                                    borderBottom: "1px solid white",
                                                    borderRadius: "0",
                                                    padding: "0"
                                                }}
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                <p className='subheadingL1 mt-3'>Book Class in Mercato Mall</p>
                                <p className='mb-3'>
                                    <a href="tel:+9714 340 1040" className='callL1'>
                                        <i className="fa fa-phone" aria-hidden="true">
                                        </i> Call Now
                                    </a>
                                </p>
                                <p className='subheadingL1'>Book Class in Times Square Center</p>
                                <p>
                                    <a href="tel:+9714 340 1040" className='callL1'>
                                        <i className="fa fa-phone" aria-hidden="true">
                                        </i> Call Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Location;