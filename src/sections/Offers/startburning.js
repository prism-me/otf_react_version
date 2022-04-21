import React from 'react';
import {
    Modal, ModalBody, Form,
    FormGroup,
    Input,
    Row, Col, Container
} from 'reactstrap';

const StartBurning = (props) => {

    const location = [
        "Mercato Mall",
        "Times Square Centre"
    ]

    return (
        <>
            <Modal isOpen={props.show} className="sburning">
                <ModalBody>
                    <Container>
                        <p className='modalIconWrape'>
                            <i aria-hidden="true" className="fa fa-close modalIconStyle"
                                onClick={props.onHide}
                            ></i>
                        </p>
                        <Form className='offer-form'>
                            <h3 className="offer-subtext">Book A Trail Class</h3>
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
                                <Col sm={6}>
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
                                <Col sm={6}>
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
                                    style={{ color: "#c6c6c9" }}
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
                            <button className="offerBtn px-5 mt-3">Submit</button>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        </>
    );
}

export default StartBurning;