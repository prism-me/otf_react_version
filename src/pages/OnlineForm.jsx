import React, { Component } from "react";
import ApplyOnlineForm from "../sections/Enroll/ApplyOnlineForm";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class OnlineForm extends Component {

    render() {
        
        const { global } = this.props;
        return (
            <div className="home-page">
                <Helmet>
                    <title>
                        {`AGS | ${constants?.site_content?.meta_form[global?.activeLanguage]}`}
                    </title>
                    <meta
                        name="description"
                        content={
                            constants?.site_content?.meta_form_description[global?.activeLanguage]
                        }
                    />
                </Helmet>
                <ApplyOnlineForm />
            </div>
        );
    }
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
)(OnlineForm);