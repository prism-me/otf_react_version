import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import header_bg from "../../../assets/images/agsbackgrounds/waitlistbackground.jpg";
import Hidden from "@material-ui/core/Hidden";
import Spinner from "../../../components/Spinner/Spinner";
import { API } from "../../../http/API";
import { STRINGS } from "../../../utils/base";
import SnackBar from "../../../components/SnackBar/SnackBar";
import { constants } from "../../../utils/constants"

const defaultState = {
    isRequestPending: false,
    isOpen: false,
    message: "",
    variant: "",
    name: '',
    email: '',
    number: '',
}

function OurPrograms(props) {
    const [init, setInit] = useState(defaultState);

    let { name, email, number, isRequestPending, isOpen, message, variant } = init;

    const validation = (obj) => {
        let valid = { error: true, message: "" }
        let emailRegex = STRINGS.REGEX.EMAIL;

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

        return valid;
    }

    const handleChange = (e) => {
        setInit({
            ...init,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let validate = validation(init)
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
    const cancelSnackBar = () => {
        setInit({
            ...init,
            isOpen: false
        })
    }

    return (
        <div className="our-programs">
            <SnackBar
                isOpen={isOpen}
                message={message}
                variant={variant}
                onClose={cancelSnackBar}
            />
            <Hidden smDown>
                <div
                    className="programs"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    <div className="description-column">
                        <Container>
                            <Card shadow style={{ borderRadius: "20px" }} className={"cardStyle"}>
                                <Card.Body>
                                    <h4 className={" intro-title"}>
                                        {
                                            constants?.site_content?.waitlist?.title[
                                            props.language
                                            ]
                                        }
                                        {/* Join the waitlist for our 2022 programs. */}
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
                        </Container>
                    </div>
                </div>
            </Hidden>
            <Hidden smUp>
                <Container>
                    <Card shadow style={{ borderRadius: "20px" }} className={"cardStyleMBL"}>
                        <Card.Body>
                            <h4 className={" intro-title"}>
                                {
                                    constants?.site_content?.waitlist?.title[
                                    props.language
                                    ]
                                }
                                {/* Join the waitlist for our 2022 programs. */}
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
                                <center>
                                    {
                                        !isRequestPending ?
                                            <button className={"enroll"}>
                                                {
                                                    constants?.site_content?.waitlist?.enroll[
                                                    props.language
                                                    ]
                                                }
                                                {/* Enroll */}
                                            </button> :
                                            <Spinner color1={"#1a2c52"} size={"sm"} />
                                    }

                                </center>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>
        </div>
    );
}

export default OurPrograms;
