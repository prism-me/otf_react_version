import React from 'react';
import bg_img from "../../assets/images/agsbackgrounds/AgsPortal.jpg";
import { Col, Row, Container } from "react-bootstrap";
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";

const AgsPortalComponent = (props) => {
    const history = useHistory();
    function parentClick() {
        window.open(`${props?.pSecLink}`);
    }
    function staffClick() {
        window.open(`${props?.sSecLink}`);
    }
    function stdClick() {
        window.open(`${props?.stdSecLink}`);
    }
    return (
        <div className="ags-portal-page">
            <p className="subtitle"
                dangerouslySetInnerHTML={{
                    __html:
                        props.portalCont?.description
                }}
            >
                {/* AGS ensures that all stakeholders have access to the portal to stay informed of recent announcements, news, events, and updates. */}
            </p>
            <Hidden smDown>
                <div
                    className="agsPortal"
                    style={{ backgroundImage: `url(${bg_img})` }}
                >
                    <div className="row description-column">
                        <div className="btn-holder">
                            <div className="btn">
                                <button
                                    onClick={parentClick}
                                >
                                    {props.parentSec?.title}
                                    {/* Parent Access */}
                                </button>
                            </div>
                            <div className="btn"
                                onClick={staffClick}
                            >
                                <button>
                                    {props.staffSec?.title}
                                    {/* Staff Access */}
                                </button>
                            </div>
                            <div className="btn"
                                onClick={stdClick}
                            >
                                <button>
                                    {props.studentSec?.title}
                                    {/* Student Access */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className="row">
                    <div className="btn-holder">
                        <div className="btn">
                            <button
                                onClick={parentClick}
                            >
                                {props.parentSec?.title}
                                {/* Parent Access */}
                            </button>
                        </div>
                        <div className="btn"
                            onClick={staffClick}
                        >
                            <button>
                                {props.staffSec?.title}
                                {/* Staff Access */}
                            </button>
                        </div>
                        <div className="btn"
                            onClick={stdClick}
                        >
                            <button>
                                {props.studentSec?.title}
                                {/* Student Access */}
                            </button>
                        </div>
                    </div>
                </div>
            </Hidden>
            <div className="footer-info">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col sm={12} lg="auto" md="auto">
                            <div className="txt mblScreenInfo">
                                <p>
                                    {props.contactSec?.title}
                                    {/* For IT support, please contact us at: */}
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} lg="auto" md="auto">
                            <div className="email mblScreenInfo mblEmailSpace">
                                <a href="mailto:helpdesk@ags.ae">
                                    <MailOutlineIcon style={{ marginRight: "0.5rem" }} />
                                    {props.contactSec?.email}
                                    {/* helpdesk@ags.ae */}
                                </a>
                            </div>
                        </Col>
                        <Col sm={6} lg="auto" md="auto">
                            <div className="phone mblScreenInfo">
                                <a href="tel:06-5061111">
                                    <PhoneOutlinedIcon style={{ marginRight: "0.5rem" }} />
                                    {props.contactSec?.phone}
                                    {/* 06-5061111 */}
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AgsPortalComponent;