import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { constants } from "../../../utils/constants"

export default function ApplyOnline(props) {
    function refreshPage() {
        window.location.reload(false);
    }
    const history = useHistory();
    return (
        <div className="ApplyOnline" id={"applyOnline"}>
            <Container>
                <div className={"applyBackground d-flex justify-content-between align-items-center"}>
                    <p className={"m-0"}>
                        {props.applyOnlineSec?.title}
                        {/* Apply Online by filling the form and submitting related documents  */}
                    </p>
                    <button className="btn btn-lg shadow btnstyleB"
                        onClick={() => {
                            history.push(
                                `/${props.language
                                }/OnlineForm`
                            );
                            refreshPage()
                        }}
                    >
                        {
                            constants?.site_content?.app_online[
                            props.language
                            ]
                        }
                        {/* Apply Online */}
                    </button>
                </div>
            </Container>
        </div>
    )
}