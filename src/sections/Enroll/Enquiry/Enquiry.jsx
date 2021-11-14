import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import header_bg from "../../../assets/images/agsbackgrounds/EnquiryPhoto.JPG";
import { Hidden } from "@material-ui/core";
import Spinner from "../../../components/Spinner/Spinner";
import SnackBar from "../../../components/SnackBar/SnackBar";
import { API } from "../../../http/API";
import { convertedDate, currentDate, STRINGS } from "../../../utils/base";
import { constants } from "../../../utils/constants"

const defaultState = {
    isOpen: false,
    message: "",
    variant: "",
    isRequestPending: false,
    name: '',
    email: '',
    number: '',
    isSubmitResponse: true,
    isSubmitResponseCB: true,
    cb_parent_name: "",
    cb_phone: "",
}

function Enquiry(props) {
    const [init, setInit] = useState(defaultState);
    let { name, email, number, isRequestPending, isOpen, message, variant, cb_phone, cb_parent_name, isSubmitResponseCB } = init;
    const validation = (obj, type) => {
        let valid = { error: true, message: "" }
        let emailRegex = STRINGS.REGEX.EMAIL;
        if (type === "bst") {
            if (obj.email === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.waitlist?.email_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.waitlist?.email_req[
                    props.language
                    ]
                    }`
            } else if (!emailRegex.test(obj.email)) {
                valid.error = false;
                valid.message += valid.message ? `\n${obj.email} is not a valid email` : `${obj.email} is not a valid email`
            }
            if (obj.name === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.waitlist?.name_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.waitlist?.name_req[
                    props.language
                    ]
                    }`
            }
            if (obj.number === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.contact_us?.numb_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.contact_us?.numb_req[
                    props.language
                    ]
                    }`
            }
        }
        if (type === "cb") {
            if (obj.cb_parent_name === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.req_call?.name_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.req_call?.name_req[
                    props.language
                    ]
                    }`
            }
            if (obj.cb_phone === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.req_call?.numb_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.req_call?.numb_req[
                    props.language
                    ]
                    }`
            }
        }
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validate = validation(init, "bst")
        if (validate.error) {
            let inputData = {
                name: init.name,
                email: init.email,
                number: init.number,
                flag: "waitlist"
            }
            setInit({
                ...init,
                isRequestPending: true
            })

            API.post("waitlist", inputData).then((res) => {
                if (res.status === STRINGS.REQUEST_STATUS) {
                    setInit({
                        ...init,
                        isRequestPending: false,
                        cb_parent_name: "",
                        cb_phone: "",
                        isOpen: true,
                        message: res.data.message,
                        variant: "success"
                    })
                } else {
                    setInit({
                        ...init,
                        isRequestPending: false,
                        isOpen: true,
                        message: res.data.message,
                        variant: "error"
                    })
                }
            })
        } else {
            setInit({
                ...init,
                isOpen: true,
                message: validate.message
            });
        }

    }
    const handleSubmitReqCall = (e) => {
        e.preventDefault();

        let validate = validation(init, "cb")
        if (validate.error) {
            let inputData = {
                parent_name: init.cb_parent_name,
                phone: init.cb_phone,
                flag: "request_for_call"
            }
            setInit({
                ...init,
                isSubmitResponseCB: false
            })

            API.post("request_for_call", inputData).then((res) => {
                if (res.status === STRINGS.REQUEST_STATUS) {
                    setInit({
                        ...init,
                        isSubmitResponseCB: true,
                        cb_parent_name: "",
                        cb_phone: "",
                        isOpen: true,
                        message: res.data.message,
                        variant: "success"
                    })
                } else {
                    setInit({
                        ...init,
                        isSubmitResponseCB: true,
                        isOpen: true,
                        message: res.data.message,
                        variant: "error"
                    })
                }
            })
        } else {
            setInit({
                ...init,
                isOpen: true,
                message: validate.message
            });
        }

    }

    const cancelSnackBar = () => {
        setInit({
            ...init,
            isOpen: false
        })
    }


    const handleChange = (e) => {
        setInit({
            ...init,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="Enquiry-page" id={"Enquiry"}>
            <SnackBar
                isOpen={isOpen}
                message={message}
                variant={variant}
                onClose={cancelSnackBar}
            />
            <h1 className="Title">
                {
                    constants?.site_content?.enrollTabs?.tab2[
                    props.language
                    ]
                }
                {/* ENQUIRY */}
            </h1>
            <Hidden smDown>
                <div
                    className="Enquiry"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    {/*<div className="op-div">*/}
                    {/*</div>*/}
                    {/*<div className="wavy-div">*/}
                    {/*</div>*/}
                    <div className="description-column">
                        <Container fluid>
                            <Row>
                                <Col sm id={"Request_for_a_callback"}>
                                    <Card shadow style={{ borderRadius: "20px" }} className={"cardStyle"}>
                                        <Card.Body>
                                            <h4 className={" intro-title"}>
                                                {
                                                    constants?.site_content?.req_call?.title[
                                                    props.language
                                                    ]
                                                }
                                                {/* Request A Call Back */}
                                            </h4>
                                            <p className={"subTitle"}>
                                                {
                                                    constants?.site_content?.req_call?.subtitle[
                                                    props.language
                                                    ]
                                                }
                                                {/* For more information about admissions and tours, request a call back
                                                from our
                                                team by filling in the form below. */}
                                            </p>
                                            <Form onSubmit={handleSubmitReqCall}>
                                                <Form.Group className="mb-3" controlId="formGroupName">
                                                    <Form.Control
                                                        name={"cb_parent_name"}
                                                        onChange={handleChange}
                                                        value={cb_parent_name}
                                                        type="text"
                                                        placeholder={
                                                            constants?.site_content?.req_call?.enter_pname[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <Form.Control
                                                        name={"cb_phone"}
                                                        value={cb_phone}
                                                        onChange={handleChange}
                                                        type="number"
                                                        placeholder={
                                                            constants?.site_content?.req_call?.enter_pnumb[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <center>
                                                    {
                                                        isSubmitResponseCB ?
                                                            <button type={"submit"} className={"enroll"}>
                                                                {
                                                                    constants?.site_content?.req_call?.submit[
                                                                    props.language
                                                                    ]
                                                                }
                                                                {/* SUBMIT */}
                                                            </button> :
                                                            <Spinner color1={"#1a2c52"} size={"sm"} />
                                                    }
                                                </center>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm id={"School_Tour"}>
                                    <Card shadow style={{ borderRadius: "20px" }} className={"cardStyle"}>
                                        <Card.Body>
                                            <h4 className={" intro-title"}>
                                                {
                                                    constants?.site_content?.waitlist?.title[
                                                    props.language
                                                    ]
                                                }
                                            </h4>
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="formGroupName">
                                                    <Form.Control name={"name"} value={name} onChange={handleChange} type="text"
                                                        placeholder={
                                                            constants?.site_content?.waitlist?.enter_name[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Control name={"email"} value={email} onChange={handleChange}
                                                        type="text" placeholder={
                                                            constants?.site_content?.waitlist?.enter_email[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Control name={"number"} value={number} onChange={handleChange}
                                                        type="text" placeholder={
                                                            constants?.site_content?.contact_us?.phone[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <center>
                                                    {
                                                        !isRequestPending ?
                                                            <button className={"enroll"}>
                                                                {
                                                                    constants?.site_content?.waitlist?.enroll[
                                                                    props.language
                                                                    ]
                                                                }
                                                            </button> :
                                                            <Spinner color1={"#1a2c52"} size={"sm"} />
                                                    }

                                                </center>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <Container fluid>
                    <Row>
                        <Col sm>
                            <Card shadow style={{ borderRadius: "20px" }} className={"cardStyleMBL"}>
                                <Card.Body>
                                    <h4 className={" intro-title"}>
                                        {
                                            constants?.site_content?.req_call?.title[
                                            props.language
                                            ]
                                        }
                                        {/* Request A Call Back */}
                                    </h4>
                                    <p className={"subTitle"}>
                                        {
                                            constants?.site_content?.req_call?.subtitle[
                                            props.language
                                            ]
                                        }
                                        {/* For more information about admissions and tours, request a call back from our
                                        team by filling in the form below. */}
                                    </p>
                                    <Form onSubmit={handleSubmitReqCall}>
                                        <Form.Group className="mb-3" controlId="formGroupName">
                                            <Form.Control
                                                name={"cb_parent_name"}
                                                onChange={handleChange}
                                                value={cb_parent_name}
                                                type="text"
                                                placeholder={
                                                    constants?.site_content?.req_call?.enter_pname[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupNumber">
                                            <Form.Control
                                                name={"cb_phone"}
                                                value={cb_phone}
                                                onChange={handleChange}
                                                type="number"
                                                placeholder={
                                                    constants?.site_content?.req_call?.enter_pnumb[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <center>
                                            {
                                                isSubmitResponseCB ?
                                                    <button type={"submit"} className={"enroll"}>
                                                        {
                                                            constants?.site_content?.req_call?.submit[
                                                            props.language
                                                            ]
                                                        }
                                                        {/* SUBMIT */}
                                                    </button> :
                                                    <Spinner color1={"#1a2c52"} size={"sm"} />
                                            }
                                        </center>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card shadow style={{ borderRadius: "20px" }} className={"cardStyleMBL"}>
                                <Card.Body>
                                    <h4 className={" intro-title"}>
                                        {
                                            constants?.site_content?.waitlist?.title[
                                            props.language
                                            ]
                                        }
                                    </h4>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formGroupName">
                                            <Form.Control name={"name"} value={name} onChange={handleChange} type="text"
                                                placeholder={
                                                    constants?.site_content?.waitlist?.enter_name[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control name={"email"} value={email} onChange={handleChange}
                                                type="text" placeholder={
                                                    constants?.site_content?.waitlist?.enter_email[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control name={"number"} value={number} onChange={handleChange}
                                                type="text" placeholder={
                                                    constants?.site_content?.contact_us?.phone[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <center>
                                            {
                                                !isRequestPending ?
                                                    <button className={"enroll"}>
                                                        {
                                                            constants?.site_content?.waitlist?.enroll[
                                                            props.language
                                                            ]
                                                        }
                                                    </button> :
                                                    <Spinner color1={"#1a2c52"} size={"sm"} />
                                            }

                                        </center>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Hidden>
        </div>
    );
}

export default Enquiry;
