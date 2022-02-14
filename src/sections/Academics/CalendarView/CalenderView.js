import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container, Table, Card } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid } from "@material-ui/core";
import { constants } from "../../../utils/constants"
// import dateFormat from 'dateformat';

const CalendarView = (props) => {
    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // className="Ages Academic"
            className={
                props.language
                    ? " Ages Academic agsModalDirArabic"
                    : "Ages Academic  agsModalDir"
            }
            style={{ paddingLeft: "0px" }}
        >

            <div className="header">
                <span className={
                    props.language
                        ? "modalIcon modalIconArabic"
                        : "modalIcon"}
                    onClick={props.onHide}>
                    <ArrowBackIcon />
                </span>
                <div className="heading">
                    <p>
                        {
                            constants?.site_content?.calender?.title[
                            props.lang
                            ]
                        }
                        {/* Academic Calendar 2021 - 2022 */}
                    </p>
                </div>
            </div>
            <Modal.Body>
                <Grid container className="modal-sec">
                    <Grid item className="card-holder">
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term1[
                                        props.lang
                                        ]
                                    }
                                    {/* TERM 1 : WINTER 2021 */}
                                </p>
                            </div>
                            <div className="card-sec">
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "29" : "29"
                                            }
                                            {/* 29 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* th */}
                                            </span></div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "AUG" : "أغسطس"
                                            }
                                            {/* AUG */}
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term1heading1[
                                                props.lang
                                                ]
                                            }
                                            {/* First day of term */}
                                        </p>
                                    </div>
                                </div>
                                <div className="circle-holder lg">
                                    <div className="_circle lg">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "18" : "18"
                                            }
                                            {/* 01 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* st */}
                                            </span>
                                            -
                                            {
                                                props.lang === "en" ? "20" : "20"
                                            }<span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* th */}
                                            </span>
                                        </div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "OCT" : "أكتوبر"
                                            }
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term1heading2[
                                                props.lang
                                                ]
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="circle-holder lg">
                                    <div className="_circle lg">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "12" : "12"
                                            }
                                            {/* 01 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* st */}
                                            </span>
                                            -
                                            {
                                                props.lang === "en" ? "30" : "30"
                                            }<span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* th */}
                                            </span>
                                        </div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "Dec" : "ديسمبر "
                                            }
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term1heading3[
                                                props.lang
                                                ]
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term2[
                                        props.lang
                                        ]
                                    }
                                    {/* TERM 2 : SPRING 2022 */}
                                </p>
                            </div>
                            <div className="card-sec">
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "02" : "02"
                                            }
                                            {/* 02 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "nd" : ""
                                                }
                                                {/* nd */}
                                            </span></div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "JAN" : "يناير"
                                            }
                                            {/* JAN */}
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term2heading1[
                                                props.lang
                                                ]
                                            }
                                            {/* First day of term */}
                                        </p>
                                    </div>
                                </div>
                                <div className="circle-holder lg">
                                    <div className="_circle lg">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "13" : "13"
                                            }
                                            {/* 01 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* st */}
                                            </span>
                                            -
                                            {
                                                props.lang === "en" ? "14" : "14"
                                            }<span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* th */}
                                            </span>
                                        </div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "JAN" : "يناير"
                                            }
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term2heading2[
                                                props.lang
                                                ]
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="circle-holder lg">
                                    <div className="_circle lg">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "27" : "27"
                                            }
                                            {/* 01 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* st */}
                                            </span>
                                            -
                                            {
                                                props.lang === "en" ? "07" : "07"
                                            }<span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* th */}
                                            </span>
                                        </div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "APRIL" : "أبريل"
                                            }
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term2heading3[
                                                props.lang
                                                ]
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term3[
                                        props.lang
                                        ]
                                    }
                                    {/* TERM 3 : SUMMER 2022 */}
                                </p>
                            </div>
                            <div className="card-sec">
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "10" : "10"
                                            }
                                            {/* 10 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* th */}
                                            </span></div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "APRIL" : "أبريل"
                                            }
                                            {/* APRIL */}
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term3heading1[
                                                props.lang
                                                ]
                                            }
                                            {/* First day of term */}
                                        </p>
                                    </div>
                                </div>
                                <div className="circle-holder">
                                    <div className="_circle">
                                        <div className="_circle-inner">
                                            {
                                                props.lang === "en" ? "30" : "30"
                                            }
                                            {/* 01 */}
                                            <span className="_circle-em">
                                                {
                                                    props.lang === "en" ? "th" : ""
                                                }
                                                {/* st */}
                                            </span></div>
                                        <span className="_circle-month">
                                            {
                                                props.lang === "en" ? "JUNE" : "يونيو"
                                            }
                                            {/* MAY */}
                                        </span>
                                    </div>
                                    <div className="_circle-txt">
                                        <p>
                                            {
                                                constants?.site_content?.calender?.term3heading2[
                                                props.lang
                                                ]
                                            }
                                            {/* Start of Eid al-Fiter */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Modal.Body>

            {/* <Modal.Body>
                <Grid container className="modal-sec">
                    <Grid item className="card-holder">
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term1[
                                        props.lang
                                        ]
                                    }
                                </p>
                            </div>
                            <div className="card-sec">
                                {props?.term1Sec?.map((slides, index) => (
                                    <div className="circle-holder">
                                        <div className="_circle">
                                            <div className="_circle-inner">
                                                <span>
                                                    {

                                                        slides.date.split("-")[2] + "th"
                                                    }
                                                    <br />

                                                    {dateFormat(`${slides.date}`, "dS mmmm").split(" ")[1]

                                                    }
                                                </span>
                                                {slides.enddate === null ?
                                                    "" :
                                                    <>
                                                        <span> &mdash;</span>
                                                        <span>
                                                            {

                                                                slides.enddate.split("-")[2] + "th"
                                                            }
                                                            <br />

                                                            {dateFormat(`${slides.enddate}`, "dS mmmm").split(" ")[1]
                                                            }
                                                        </span>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                        <div className="_circle-txt">
                                            <p>
                                                {
                                                    props.language
                                                        ? slides?.arabic?.name
                                                        : slides.name
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term2[
                                        props.lang
                                        ]
                                    }
                                </p>
                            </div>
                            <div className="card-sec">
                                {props?.term2Sec?.map((slides, index) => (
                                    <div className="circle-holder">
                                        <div className="_circle">
                                            <div className="_circle-inner">
                                                <span>
                                                    {

                                                        slides.date.split("-")[2] + "th"
                                                    }
                                                    <br />

                                                    {dateFormat(`${slides.date}`, "dS mmmm").split(" ")[1]

                                                    }
                                                </span>
                                                {slides.enddate === null ?
                                                    "" :
                                                    <>
                                                        <span> &mdash;</span>
                                                        <span>
                                                            {

                                                                slides.enddate.split("-")[2] + "th"
                                                            }
                                                            <br />

                                                            {dateFormat(`${slides.enddate}`, "dS mmmm").split(" ")[1]
                                                            }
                                                        </span>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                        <div className="_circle-txt">
                                            {
                                                props.language
                                                    ? slides?.arabic?.name
                                                    : slides.name
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-row">
                            <div className="card-head">
                                <p>
                                    {
                                        constants?.site_content?.calender?.term3[
                                        props.lang
                                        ]
                                    }
                                </p>
                            </div>
                            <div className="card-sec">
                                {props?.term3Sec?.map((slides, index) => (
                                    <div className="circle-holder">
                                        <div className="_circle">
                                            <div className="_circle-inner">
                                                <span>
                                                    {

                                                        slides.date.split("-")[2] + "th"
                                                    }
                                                    <br />

                                                    {dateFormat(`${slides.date}`, "dS mmmm").split(" ")[1]

                                                    }
                                                </span>
                                                {slides.enddate === null ?
                                                    "" :
                                                    <>
                                                        <span> &mdash;</span>
                                                        <span>
                                                            {

                                                                slides.enddate.split("-")[2] + "th"
                                                            }
                                                            <br />

                                                            {dateFormat(`${slides.enddate}`, "dS mmmm").split(" ")[1]
                                                            }
                                                        </span>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                        <div className="_circle-txt">
                                            {
                                                props.language
                                                    ? slides?.arabic?.name
                                                    : slides.name
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Modal.Body> */}
        </Modal>
    );
};

export default CalendarView;