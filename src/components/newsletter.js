import React from 'react';
import { Link } from 'react-router-dom';

// import { Form, FormGroup, Input } from 'reactstrap'
import { Container, Row, Col, InputGroup, Form } from 'react-bootstrap'

const NewsLetter = ({ }) => {

    return (
        <div className="sidebar-container">
            <h5 className="blog-title">newsletter</h5>


            <Form >
                <Form.Group>
                    <InputGroup
                        style={{
                            boxShadow: "0px 4px 15px rgb(0 0 0 / 14%)"
                        }}
                    >
                        <Form.Control
                            type="text"
                            style={{
                                background: '#FFFFFF',
                                border: "1px solid grey",
                                borderRight: "0",
                                borderRadius: "0",
                                marginRight: "0",
                                boxShadow: "none"
                            }}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text
                                style={{
                                    background: '#FFFFFF', border: "1px solid grey",
                                    borderRadius: "0",
                                    borderLeft: "0"
                                }}
                            >
                                <i aria-hidden="true" className="fa fa-paper-plane"></i>
                                {/* <i className="fa fa-search" aria-hidden="true"
                                    style={{ color: 'white', fontSize: 18 }}>
                                </i> */}
                            </InputGroup.Text>
                        </InputGroup.Prepend>

                    </InputGroup>
                </Form.Group>
            </Form>
            {/* <Form className="newsletter text-center">
                <FormGroup className="mb-0">
                    <Input className="form-control" placeholder="enter email" type="text" />
                    <Link href="#"><a href="#javascript"><i aria-hidden="true" className="fa fa-paper-plane"></i></a></Link>
                </FormGroup>
            </Form> */}
        </div >
    );
};

export default NewsLetter;
