import React, { useState } from 'react'
import {
    Container, Row, Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap'
import StartBurning from './startburning';

//images
import bannerImg from "../../assets/images/OTF/banner/offerbanner.jpg"

const location = [
    "Mercato Mall",
    "Times Square Center"
];

const offerlist = [
    "March 1 Offer",
    "March 2 Offer"
];

const Offerbanner = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <section className="agency offer breadcrumb-section "
            style={{ background: `url(${bannerImg})` }}
        >
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className='d-flex flex-column justify-content-center align-items-start offerMblDivsize'>
                        <h2 className="offer-text">
                            WORK 1 HOUR. BURN FOR 36
                        </h2>
                        <p className="offer-detail">
                            Orangetheory Fitness is a one-of-a-kind, group high-intensity interval training workout.
                            The result is more energy, visible toning, and extra calorie burn for up to 36 hours.
                        </p>
                        <h3 className="offer-subtext">
                            Buy 2 Months Membership and
                            get the 3rd Month for AED10 only.
                        </h3>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <button className='offerBtn px-5'
                                onClick={() => setShowModal(true)}
                            >
                                Book An Intro Class</button>
                            <StartBurning
                                show={showModal} onHide={() => setShowModal(false)}
                                title="Book An Intro Class"
                            />
                        </center>
                        <Form className='offer-form'>
                            <h3 className="offer-subtext">
                                Book An Intro Class</h3>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full name"
                                    className='inputStyle'
                                    required
                                />
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email address"
                                            className='inputStyle'
                                            required
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
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect"
                                    className='inputStyle'
                                    required
                                    style={{ color: "#495057", width: "100%" }}
                                >
                                    <option style={{ color: "#495057" }}>Select Location</option>
                                    {location &&
                                        location.length > 0 &&
                                        location.map((x) => (
                                            <option style={{ color: "#495057" }} key={x}>{x}</option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="offer_list" id="exampleSelect"
                                    className='inputStyle'
                                    required
                                    style={{ color: "#495057", width: "100%" }}

                                >
                                    <option style={{ color: "#495057" }}>Select Offer</option>
                                    {offerlist &&
                                        offerlist.length > 0 &&
                                        offerlist.map((x) => (
                                            <option style={{ color: "#495057" }} key={x}>{x}</option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>
                            <button className="breadcrumb-btn px-5 mt-3">Submit</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Offerbanner