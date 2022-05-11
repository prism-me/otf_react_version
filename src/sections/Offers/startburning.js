import React from 'react';
import {
    Modal, ModalBody, Form,
    FormGroup,
    Input,
    Row, Col, Container
} from 'reactstrap';
import ClearIcon from "@material-ui/icons/Clear";


const StartBurning = (props) => {

    const location = [
        "Mercato Mall",
        "Times Square Center"
    ];
    const offerlist = [
        "March 1 Offer",
        "March 2 Offer"
    ];

    return (
        <>
            <Modal isOpen={props.show} className="sburning">
                <ModalBody>
                    <Container>
                        <p className='modalIconWrape mt-3'>
                            <span className='modalIconStyle'>
                                <ClearIcon
                                    onClick={props.onHide}
                                />
                            </span>
                        </p>
                        <Form className='offer-form'>
                            <h3 className="offer-subtext">
                                {props.title}
                            </h3>
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
                                <Input type="select" name="location" id="exampleSelect"
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
                            <button className="offerBtn px-5 mt-3">Submit</button>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        </>
    );
}

export default StartBurning;