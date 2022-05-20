import React, { useState } from 'react'
import {
    Container, Row, Col,
    Form,
    FormGroup,
    Input,
} from 'reactstrap'
import StartBurning from './startburning';
import { API } from "../../http/API"
import { Alert } from "react-bootstrap"
import { constants } from '../../utils/constants';

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

const Offerbanner = ({ language }) => {

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

    const [showModal, setShowModal] = useState(false);

    return (
        <section className="agency offer breadcrumb-section "
            style={{ background: `url(${bannerImg})` }}
        >
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={6} className='d-flex flex-column justify-content-center align-items-start offerMblDivsize'>
                        <h2 className="offer-text">
                            {
                                constants?.site_content?.offerbanner_sec?.title[language]
                            }
                        </h2>
                        <p className="offer-detail">
                            {
                                constants?.site_content?.offerbanner_sec?.subtitle[language]
                            }
                        </p>
                        <h3 className="offer-subtext">
                            {
                                constants?.site_content?.offerbanner_sec?.detail[language]
                            }
                        </h3>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <center>
                            <button className='offerBtn px-5'
                                onClick={() => setShowModal(true)}
                            >
                                {
                                    constants?.site_content?.offerform_sec?.title[language]
                                }
                            </button>
                            <StartBurning
                                show={showModal} onHide={() => setShowModal(false)}
                                title={
                                    constants?.site_content?.offerform_sec?.title[language]
                                }
                                language={language}
                            />
                        </center>

                        {isValid &&
                            <Alert variant="success"
                                onClose={() => {
                                    setIsValid(false);
                                }}
                                dismissible
                            >
                                {
                                    constants?.site_content?.offerform_sec?.submit_text[language]
                                }
                            </Alert>
                        }

                        <Form className='offer-form' onSubmit={handleSubmit}>
                            <h3 className="offer-subtext">
                                {
                                    constants?.site_content?.offerform_sec?.title[language]
                                }
                            </h3>
                            <FormGroup>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                    placeholder={
                                        constants?.site_content?.offerform_sec?.full_name[language]
                                    }
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
                                            value={formValues.email}
                                            onChange={handleChange}
                                            placeholder={
                                                constants?.site_content?.offerform_sec?.email[language]
                                            }
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
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            placeholder={
                                                constants?.site_content?.offerform_sec?.phone_number[language]
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
                                            constants?.site_content?.offerform_sec?.location[language]
                                        }
                                    </option>
                                    {location &&
                                        location.length > 0 &&
                                        location.map((x) => (
                                            <option style={{ color: "#495057" }} key={x} value={x}>{x}</option>
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
                                            constants?.site_content?.offerform_sec?.offer[language]
                                        }
                                    </option>
                                    {offerlist &&
                                        offerlist.length > 0 &&
                                        offerlist.map((x) => (
                                            <option style={{ color: "#495057" }} key={x} value={x}>{x}</option>
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
                                    <button className="breadcrumb-btn px-5 mt-3">
                                        {
                                            constants?.site_content?.offerform_sec?.submit_btn[language]
                                        }
                                    </button>
                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Offerbanner