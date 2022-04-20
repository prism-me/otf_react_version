import React from 'react'
import {
    Container, Row, Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap'

import faqformBg from "../../assets/images/OTF/faq/faqformBg.jpg"
const Faqform = () => (
    <section className="gym format bg-location p-0" id="bmi">
        <Container fluid>
            <Row>
                <Col sm={6} className={"p-0"}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6032486928893!2d55.25071151432762!3d25.216599037102654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4362916220b1%3A0x175f64a16111cae7!2sOrangetheory%20Fitness%20at%20Mercato%20Mall!5e0!3m2!1sen!2s!4v1649050081764!5m2!1sen!2s"
                        width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col sm={6} className={"BGImgLocation p-0"}
                    style={{ backgroundImage: `url(${faqformBg})` }}
                >
                    <Form className='formStyle'>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email address"
                                        className='inputStyle'
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone number"
                                        className='inputStyle'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="Message"
                                id="Message"
                                placeholder="Message"
                                className='inputStyle'
                                style={{ resize: "none" }}
                                rows="4" cols="50"
                            />
                        </FormGroup>
                        <button className='otfBtn1 px-5 mt-3'>Submit</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Faqform;