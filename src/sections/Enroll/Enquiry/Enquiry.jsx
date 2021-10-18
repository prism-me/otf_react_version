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
    isSubmitResponse: true,
    isSubmitResponseCB: true,
    cb_parent_name: "",
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    cb_phone: "",
    child_dob: '',
}

function Enquiry(props) {
    const [init, setInit] = useState(defaultState);
    let { isSubmitResponse, parent_name, parent_email, parent_phone, child_dob, isOpen, message, variant, cb_phone, cb_parent_name, isSubmitResponseCB } = init;
    const validation = (obj, type) => {
        let valid = { error: true, message: "" }
        let emailRegex = STRINGS.REGEX.EMAIL;
        if (type === "bst") {
            if (obj.parent_email === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.school_tour?.email_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.school_tour?.email_req[
                    props.language
                    ]
                    }`
            } else if (!emailRegex.test(obj.parent_email)) {
                valid.error = false;
                valid.message += valid.message ? `\n${obj.parent_email} is not a valid email` : `${obj.parent_email} is not a valid email`
            }
            if (obj.parent_name === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.req_call?.name_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.req_call?.name_req[
                    props.language
                    ]
                    }`
            }

            if (obj.parent_phone === "") {
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

    const handleSubmitBookTour = (e) => {
        e.preventDefault();

        let validate = validation(init, "bst")
        if (validate.error) {
            let inputData = {
                parent_name: init.parent_name,
                parent_email: init.parent_email,
                parent_phone: init.parent_phone,
                child_dob: convertedDate(init.child_dob),
                flag: "book_school_tour"
            }
            setInit({
                ...init,
                isSubmitResponse: false
            })

            API.post("book_tour", inputData).then((res) => {
                if (res.status === STRINGS.REQUEST_STATUS) {
                    setInit({
                        ...init,
                        isSubmitResponse: true,
                        parent_name: "",
                        parent_email: "",
                        parent_phone: "",
                        child_dob: "",
                        isOpen: true,
                        message: res.data.message,
                        variant: "success"
                    })
                } else {
                    setInit({
                        ...init,
                        isSubmitResponse: true,
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
                                                    constants?.site_content?.school_tour?.title[
                                                    props.language
                                                    ]
                                                }
                                                {/* Book a School Tour */}
                                            </h4>
                                            <p className={"subTitle"}>
                                                {
                                                    constants?.site_content?.school_tour?.subtitle[
                                                    props.language
                                                    ]
                                                }
                                                {/* Book a tour with our Admissions team to visit American Gulf School
                                                Sharjah,
                                                located in Al Rahmaniya 4, Sharjah.
                                                To book a tour of American Gulf School, please fill out the form below
                                                and a
                                                member of our Admissions team will contact you to arrange a suitable
                                                time */}
                                            </p>
                                            <Form onSubmit={handleSubmitBookTour}>
                                                <Form.Group className="mb-3" controlId="formGroupName"
                                                >
                                                    <Form.Control name={"parent_name"} onChange={handleChange}
                                                        type="text"
                                                        value={parent_name}
                                                        placeholder={
                                                            constants?.site_content?.school_tour?.enter_pname[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Control name={"parent_email"} onChange={handleChange}
                                                        type="text"
                                                        value={parent_email}
                                                        placeholder={
                                                            constants?.site_content?.school_tour?.enter_pemail[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <Form.Control name={"parent_phone"} onChange={handleChange}
                                                        type="number"
                                                        value={parent_phone}
                                                        placeholder={
                                                            constants?.site_content?.req_call?.enter_pnumb[
                                                            props.language
                                                            ]
                                                        }
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <Form.Control name={"child_dob"} onChange={handleChange}
                                                        type="date"
                                                        value={child_dob}
                                                        placeholder="Child’s Date Of Birth"
                                                        className={"formFields"} />
                                                </Form.Group>
                                                <center>
                                                    {
                                                        isSubmitResponse ?
                                                            <button type={"submit"}
                                                                className={"enroll"}>
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
                                            constants?.site_content?.school_tour?.title[
                                            props.language
                                            ]
                                        }
                                        {/* Book a School Tour */}
                                    </h4>
                                    <p className={"subTitle"}>
                                        {
                                            constants?.site_content?.school_tour?.subtitle[
                                            props.language
                                            ]
                                        }
                                        {/* Book a tour with our Admissions team to visit American Gulf School Sharjah,
                                        located in Al Rahmaniya 4, Sharjah.
                                        To book a tour of American Gulf School, please fill out the form below and a
                                        member of our Admissions team will contact you to arrange a suitable time */}
                                    </p>
                                    <Form onSubmit={handleSubmitBookTour}>
                                        <Form.Group className="mb-3" controlId="formGroupName"
                                        >
                                            <Form.Control name={"parent_name"} onChange={handleChange}
                                                type="text"
                                                value={parent_name}
                                                placeholder={
                                                    constants?.site_content?.school_tour?.enter_pname[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control name={"parent_email"} onChange={handleChange}
                                                type="text"
                                                value={parent_email}
                                                placeholder={
                                                    constants?.site_content?.school_tour?.enter_pemail[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupNumber">
                                            <Form.Control name={"parent_phone"} onChange={handleChange}
                                                type="number"
                                                value={parent_phone}
                                                placeholder={
                                                    constants?.site_content?.req_call?.enter_pnumb[
                                                    props.language
                                                    ]
                                                }
                                                className={"formFields"} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupNumber">
                                            <Form.Control name={"child_dob"} onChange={handleChange}
                                                type="date"
                                                value={child_dob}
                                                placeholder="Child’s Date Of Birth"
                                                className={"formFields"} />
                                        </Form.Group>
                                        <center>
                                            {
                                                isSubmitResponse ?
                                                    <button type={"submit"}
                                                        className={"enroll"}>
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
                    </Row>
                </Container>
            </Hidden>
        </div>
    );
}

export default Enquiry;
