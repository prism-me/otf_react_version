import React, { useState, useEffect } from "react";
import { Card, Container, Form } from "react-bootstrap";
import header_bg from "../../../assets/images/agsbackgrounds/waitlistbackground.jpg";
import Hidden from "@material-ui/core/Hidden";
import Spinner from "../../../components/Spinner/Spinner";
import { API } from "../../../http/API";
import { STRINGS } from "../../../utils/base";
import SnackBar from "../../../components/SnackBar/SnackBar";
import { constants } from "../../../utils/constants"
import { convertedDate, currentDate } from "../../../utils/base";
import DatePicker from "react-multi-date-picker";
import gregorian_ar from "react-date-object/locales/gregorian_ar";
import "react-multi-date-picker/styles/layouts/mobile.css"

const defaultState = {
    isOpen: false,
    message: "",
    variant: "",
    isSubmitResponse: true,
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    child_dob: '',
}

function OurPrograms(props) {

    const [init, setInit] = useState(defaultState);
    let { isSubmitResponse, parent_name, parent_email, parent_phone, child_dob, isOpen, message, variant } = init;
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
            if (obj.child_dob === "") {
                valid.error = false;
                valid.message += valid.message ? `\n${constants?.site_content?.req_call?.dob_req[
                    props.language
                ]
                    }` : `${constants?.site_content?.req_call?.dob_req[
                    props.language
                    ]
                    }`
            }
        }
        return valid;
    }

    const handleChange = (e) => {
        setInit({
            ...init,
            [e.target.name]: e.target.value
        });
    }

    const dateChange = (value) => {
        //your modification on passed value ....
        setInit({
            ...init,
            child_dob: value
        });
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
                                        {
                                            props.language === "en" ?
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <DatePicker className="rmdp-mobile" placeholder={
                                                        constants?.site_content?.req_call?.childDob[
                                                        props.language]} name={"child_dob"} onChange={dateChange} value={child_dob} />
                                                </Form.Group>
                                                :
                                                <Form.Group className="mb-3" controlId="formGroupNumber">
                                                    <DatePicker locale={gregorian_ar} className="rmdp-mobile"
                                                        placeholder={
                                                            constants?.site_content?.req_call?.childDob[
                                                            props.language]} />

                                                </Form.Group>
                                        }
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
                                {
                                    props.language === "en" ?
                                        <Form.Group className="mb-3" controlId="formGroupNumber">
                                            <DatePicker className="rmdp-mobile" placeholder={
                                                constants?.site_content?.req_call?.childDob[
                                                props.language]} name={"child_dob"} onChange={dateChange} value={child_dob} />
                                        </Form.Group> :
                                        <Form.Group className="mb-3" controlId="formGroupNumber">
                                            <DatePicker locale={gregorian_ar} className="rmdp-mobile"
                                                placeholder={
                                                    constants?.site_content?.req_call?.childDob[
                                                    props.language]} />

                                        </Form.Group>
                                }
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
                </Container>
            </Hidden>
        </div>
    );
}

export default OurPrograms;
