import React from 'react';
import {
    Modal, ModalBody, Form,
    FormGroup,
    Input,
    Row, Col, Container
} from 'reactstrap';
import ClearIcon from "@material-ui/icons/Clear";


const Documents = (props) => {

    const location = [
        "Mercato Mall",
        "Times Square Center"
    ];

    const membershiplist = [
        "Orange Premier",
        "Orange Elite",
        "Orange Basic",
        "Class Packages",
        "Corporate Memberships"
    ];

    return (
        <>
            <Modal isOpen={props.show} className="sburning">
                <ModalBody>
                    <Container>
                        <p className='modalIconWrape mt-3'>
                            <span className='modalIconStyle'
                                style={{
                                    padding: "0.6rem 0.7rem 0.7rem 0.7rem"
                                }}
                            >
                                <ClearIcon
                                    onClick={props.onHide}
                                />
                            </span>
                        </p>
                        <Form className='offer-form'>
                            <h3 className="offer-subtext">
                                {props.title}
                                {/* Book A Trial Class */}
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
                                <Input type="select" name="select" id="exampleSelect"
                                    className='inputStyle'
                                    required
                                    style={{ color: "#495057", width: "100%" }}

                                >
                                    <option style={{ color: "#495057" }}>Select Membership Package</option>
                                    {membershiplist &&
                                        membershiplist.length > 0 &&
                                        membershiplist.map((x) => (
                                            <option style={{ color: "#495057" }} key={x}>{x}</option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>
                            {/* <FormGroup>
                                <Input type="textarea" name="msg" id="msg"
                                    placeholder="Message"
                                    className='inputStyle'
                                    required
                                    style={{ resize: "none" }}
                                    rows="4" cols="50"
                                />
                            </FormGroup> */}
                            <button className="offerBtn px-5 mt-3">Submit</button>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        </>
    );
}

export default Documents;