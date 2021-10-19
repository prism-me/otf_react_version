import React, { Component } from "react";
import ApplyOnlineForm from "../sections/Enroll/ApplyOnlineForm";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class OnlineForm extends Component {
    render() {
        document.write(`
            <script type="text/javascript">
            var fwq = {
                apiRootUrl: 'https://agsae.isams.cloud/api/Rest/1.0/',
                apiKey: 'BD5BD032\x2DAA7D\x2D4F5C\x2DAAA4\x2DC7BABAA6A48B',
                formInstance: '735bfa3a\x2D79a6\x2D4cfc\x2Db953\x2D8464cb26e249',
                loadCustomJavascript: false,
                loadCustomCss: false
            };
            </script >
            <script iw-id="isams-widgets" src="https://agsae.isams.cloud/api/widgets/isams-widgets.min.js">
            </script>`);
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
                <ApplyOnlineForm
                // scriptCode={scriptCode}
                />
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