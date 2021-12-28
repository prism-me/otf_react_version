import React, { useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import header_bg from "./../../../assets/images/agsbackgrounds/FeesPhoto.jpg";
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants"

function FeesPayments(props) {
    return (
        <div className="FeesPayments-page" id={"Payments"}>
            <h3 className={"Title"} id={"Tuition_Fees"}>
                {
                    constants?.site_content?.enrollTabs?.tab3[
                    props.language
                    ]
                }
                {/* FEES AND PAYMENTS */}
            </h3>
            <Hidden smDown>
                <div
                    className="FeesPayments"
                    style={{ backgroundImage: `url(${header_bg})` }}
                >
                    <div className="description-column">
                        <Container>
                            <Card className={"cardStyle"} dir="ltr">
                                <Card.Body>
                                    <Table responsive className={"text-center"}>
                                        <p className={"subtitle"}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    props.feesSec?.description
                                            }}
                                        >
                                        </p>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Container>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <Container>
                    <Card className={"cardStyleMBL"} dir="ltr">
                        <Card.Body>
                            <Table responsive className={"text-center TableMB"}>
                                <p className={"subtitle"}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            props.feesSec?.description
                                    }}
                                >
                                </p>
                            </Table>
                        </Card.Body>
                    </Card>
                </Container>
            </Hidden>
        </div>

    );
}

export default FeesPayments;
