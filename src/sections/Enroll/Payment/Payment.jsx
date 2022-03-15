import React, { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
// import header_bg from "./../../../assets/images/agsbackgrounds/Mask.jpg";
import GeneralPolicies from "../../../components/Modals/GeneralPolicies/GeneralPolicies";
import { constants } from "../../../utils/constants"

function Payment(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className={props.language === "en" ? "Payment" : "PaymentArabic"}>
            <Container>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <button className={"FeesButton"}
                        onClick={() => setModalShow(true)}
                    >
                        {
                            constants?.site_content?.genr_policy[
                            props.language
                            ]
                        }
                        {/* Kindly read the General Policies, Fee Details and Payment Methods carefully. */}
                    </button>
                    <GeneralPolicies show={modalShow} onHide={() => setModalShow(false)}
                        genrPolicyData={props.genrData}
                        lang={props.language}
                    />
                </div>
            </Container>
        </div>

    );
}

export default Payment;
