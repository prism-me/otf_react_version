import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { Card, Col, Container, Row } from "react-bootstrap";
import bg_img_e from "../../../assets/images/agsbackgrounds/AccreditationPhoto.jpg";
import CalendarView from "../CalendarView/CalenderView";
import { Hidden } from "@material-ui/core";
import { constants } from "../../../utils/constants"

const defaultState = {
    modalShow: false
}

const AgsEthos = (props) => {

    const [init, setInit] = useState(defaultState);
    let { modalShow } = init;

    return (
        <>
            <Grid container className="info-tabs justify-content-center accreditation-paths">
                <Grid className="v-calendar-sec" id={"Academic_Calendar"}>
                    <Grid className="txt-w">
                        <h2 className={"CalenderTitle"}>
                            {props.calendSection?.title}
                            {/* View our Academic Calendar to learn about the schedule in advance */}
                        </h2>
                    </Grid>
                    <Grid className="btn-w">
                        <div className="d-flex w-100">
                            <button className="view-c-btn" onClick={() => setInit({
                                ...init,
                                modalShow: true
                            })}>
                                {
                                    constants?.site_content?.view_calender[
                                    props.language
                                    ]
                                }
                                {/* View Calender */}
                            </button>
                        </div>
                        <CalendarView show={modalShow} onHide={() => setInit({
                            ...init,
                            modalShow: false
                        })}
                            calData={props.eventData}
                            language={props.isArabic}
                            lang={props.language}
                        />
                    </Grid>
                </Grid>
                <div className="d-flex w-100 justify-content-center small-calendar-view">
                    <button className="view-c-btn" onClick={() => setInit({
                        ...init,
                        modalShow: true
                    })}>
                        {
                            constants?.site_content?.view_calender[
                            props.language
                            ]
                        }
                        {/* View Calender */}
                    </button>
                </div>
            </Grid>
            <div className="Accreditation">
                <h3 className={"Title"}>
                    {props.accrSection?.title}
                    {/* ACCREDITATIONS */}
                </h3>
                <Hidden smDown>
                    <div
                        className="Ethos"
                        style={{ backgroundImage: `url(${bg_img_e})` }}
                    >
                        <div className="description-column">
                            <Container>
                                <Card className={"cardStyle"}>
                                    <Card.Body >
                                        <p className={"subtitle"}
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    props.accrSection?.description
                                            }}
                                        >
                                            {/* <strong>American Gulf School</strong> is a candidate school for
                                            the <strong>International
                                                Baccalaureate (IB) Primary Years Programme </strong> and <strong> Middle
                                                    Years Programme </strong>and pursuing authorization as
                                            an <strong>IB World School.</strong> */}
                                        </p>
                                        {/* <p className={"subtitle"}>
                                            IB World Schools share a common philosophy—a commitment to improving the teaching and learning of a diverse and inclusive community of learners by delivering challenging, high quality programmes of International education within the UAE that share a powerful vision.
                                        </p>
                                        <p className={"subtitle"}>
                                            American Gulf School has also applied for Cognia accreditation for American Curriculum Schools.
                                        </p> */}
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <Container>
                        <Card className={"cardStyleMBL"}>
                            <Card.Body >
                                <p className={"subtitle"}
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            props.accrSection?.description
                                    }}
                                >
                                    {/* <strong>American Gulf School</strong> is a candidate school for
                                    the <strong>International
                                        Baccalaureate (IB) Primary Years Programme </strong> and <strong> Middle
                                            Years Programme </strong>and pursuing authorization as
                                    an <strong>IB World School.</strong> */}
                                </p>
                                {/* <p className={"subtitle"}>
                                    IB World Schools share a common philosophy—a commitment to improving the teaching and learning of a diverse and inclusive community of learners by delivering challenging, high quality programmes of International education within the UAE that share a powerful vision.
                                </p>
                                <p className={"subtitle"}>
                                    American Gulf School has also applied for Cognia accreditation for American Curriculum Schools.
                                </p> */}
                            </Card.Body>
                        </Card>
                    </Container>
                </Hidden>
            </div>
        </>
    );
};

export default AgsEthos;