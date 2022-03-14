import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import OpenHouseEN from "../../../assets/images/popupimg/OpenHouseEN.jpg";
import OpenHouseAR from "../../../assets/images/popupimg/OpenHouseAR.jpg";


const PopUp = (props) => {


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={props.language === "en" ? "popupdoc" : "popupdocArabic"}
            style={{ paddingLeft: "0px" }}
        >

            <Container>
                <Row>
                    <Col sm={1}>
                        <span className={props.language === "en" ? "modalIcon" : "modalIconArabic"} onClick={props.onHide}>
                            <ArrowBackIcon />
                        </span>
                    </Col>
                    <Col sm>
                        <Modal.Body>
                            <a href={`/${props.language}/Enroll`}>
                                <img
                                    src={props.language === "en" ? OpenHouseEN : OpenHouseAR}
                                    alt="popup AGS"
                                    className="img-fluid"
                                    style={{
                                        width: "100%",
                                        maxWidth: "600px",
                                        height: "auto"
                                    }}
                                />
                            </a>
                        </Modal.Body>
                    </Col>
                </Row>

            </Container>
        </Modal>
    );
};



export default PopUp;