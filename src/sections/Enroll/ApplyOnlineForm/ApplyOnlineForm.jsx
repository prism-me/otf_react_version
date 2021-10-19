import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { constants } from "../../../utils/constants"
import "../../../utils/isamform"

function ApplyOnlineForm(props) {
    const { global } = props;
    return (
        <div className={"home-page"}>
            <Container>
                <p className="SubTitleOfForm">
                    {
                        constants?.site_content?.online_form_des[
                        global?.activeLanguage
                        ]
                    }
                    {/* Thank you for your interest in American Gulf School, we look forward to receiving your application. Please use this form to submit an application for your son/daughter. Once your application has been received, a member of the admissions team will contact you to request the essential supporting documents required to process your son/daughter’s application. Please note, your application will become ‘active’ once all of the essential supporting documents are received. */}
                </p>
                <div iw-id="admissions-enquiry">
                </div>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        showSpinner: state?.globalReducer?.showSpinner,
        global: state.globalReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyOnlineForm);