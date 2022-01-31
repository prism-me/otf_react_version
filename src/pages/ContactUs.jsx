import React from "react";
import Contact from "../sections/ContactUs/index.js";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

const ContactUs = (props) => {
    const { global } = props;
    return (
        <div className="home-page">
            <Helmet>
                <title>
                    {
                        
                        constants?.site_content?.meta_cnt[global?.activeLanguage]



                        } 
                </title>
                <meta
                    name="description"
                    content={
                        constants?.site_content?.meta_cnt_description[global?.activeLanguage]
                    }
                />
            </Helmet>
            <Contact
                language={global?.activeLanguage}
            />
        </div>
    )
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
)(ContactUs);