import React, { useState } from 'react';
import {
    Modal, ModalBody, Form,
    FormGroup,
    Input,
    Row, Col, Container
} from 'reactstrap';
import ClearIcon from "@material-ui/icons/Clear";
import { API } from "../../http/API"
import { Alert } from "react-bootstrap"
import { constants } from '../../utils/constants';


const StartBurning = (props) => {

    const defaultState = {
        name: "",
        email: "",
        phone: "",
        location: "",
        offer_list: "",
        type: "book_offer_form"
    };


    const [formValues, setFormValues] = useState(defaultState);
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let updatedData = { ...formValues };
        setLoading(true);
        API.post("/enquiries", updatedData)
            .then((response) => {
                if (response.status === 200 || response.status === 201) {
                    setLoading(false);
                    setIsValid(true)
                    setFormValues({ ...defaultState });
                }
            })
            .catch((err) => {
                alert("Something went wrong.");
                console.log(err);
            });
    }
    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

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
                        {isValid &&
                            <Alert variant="success"
                                onClose={() => {
                                    setIsValid(false);
                                }}
                                dismissible
                                className='mt-5'
                            >
                                {
                                    constants?.site_content?.offerform_sec?.submit_text[props?.language]
                                }
                            </Alert>
                        }
                        <Form className='offer-form' onSubmit={handleSubmit} dir={`${props?.language === "ar" && 'rtl'}`}>
                            <h3 className="offer-subtext">
                                {props.title}
                            </h3>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder={
                                        constants?.site_content?.offerform_sec?.full_name[props?.language]
                                    }
                                    value={formValues.name}
                                    onChange={handleChange}
                                    className='inputStyle'
                                    required
                                />
                            </FormGroup>
                            <Row form >
                                <Col sm={6}>
                                    <FormGroup>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            placeholder={
                                                constants?.site_content?.offerform_sec?.email[props?.language]
                                            }
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
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            placeholder={
                                                constants?.site_content?.offerform_sec?.phone_number[props?.language]
                                            }
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
                                    value={formValues.location}
                                    onChange={handleChange}
                                    style={{ color: "#495057", width: "100%" }}

                                >
                                    <option style={{ color: "#495057" }} value="">
                                        {
                                            constants?.site_content?.offerform_sec?.location[props?.language]
                                        }
                                    </option>
                                    {props?.locationsData &&
                                        props?.locationsData.length > 0 &&
                                        props?.locationsData.map((x) => (
                                            <option style={{ color: "#495057" }} key={x} value={x?.name}>
                                                {
                                                    props?.language === "ar"
                                                        ? x?.arabic?.name
                                                        :
                                                        x?.name
                                                }
                                            </option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="offer_list" id="exampleSelect"
                                    className='inputStyle'
                                    required
                                    value={formValues.offer_list}
                                    onChange={handleChange}
                                    style={{ color: "#495057", width: "100%" }}

                                >
                                    <option style={{ color: "#495057" }} value="">
                                        {
                                            constants?.site_content?.offerform_sec?.offer[props?.language]
                                        }
                                    </option>
                                    {props?.offersData &&
                                        props?.offersData.length > 0 &&
                                        props?.offersData.map((x) => (
                                            <option style={{ color: "#495057" }} key={x} value={x?.name}>
                                                {
                                                    props?.language === "ar"
                                                        ? x?.arabic?.name
                                                        :
                                                        x?.name
                                                }
                                            </option>
                                        ))
                                    }

                                </Input>
                            </FormGroup>
                            {
                                loading ?
                                    <div className="loader"
                                        style={{
                                            borderTopColor: "#2E2E2E",
                                            borderRightColor: "#2E2E2E",
                                            borderBottomColor: "#2E2E2E",
                                            borderLeftColor: "#F58220",
                                            width: "sm" ? "6em" : "md" ? "10em" : "10em",
                                            height: "sm" ? "6em" : "md" ? "10em" : "10em",
                                        }}
                                    />
                                    :
                                    <button className="offerBtn px-5 mt-3"
                                        style={{ border: "1px solid #F58220" }}
                                    >
                                        {
                                            constants?.site_content?.offerform_sec?.submit_btn[props?.language]
                                        }
                                    </button>
                            }
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        </>
    );
}

export default StartBurning;