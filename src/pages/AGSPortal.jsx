import React, { Component } from "react";
import AgsPortalComponent from "../sections/AGSPortal/index";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class AgsPortal extends Component {
    state = {
        currentPage: null,
        content: null,
    }

    componentDidMount() {
        let currentPage = null;
        API.get(`/pages`).then((response) => {
            if (
                response.status === 200 ||
                response.status === 201
            ) {
                currentPage = response.data.data.find(
                    (x) => x.slug === "ags-portal"
                );
                this.setState({ currentPage });
                API.get(`/all_sections/${currentPage._id}`)
                    .then(
                        (response) => {
                            if (response.data.data) {
                                // debugger;
                                this.setState({
                                    content:
                                        response.data.data[
                                            response.data.data?.length - 1
                                        ]?.content,
                                });
                            }
                        }
                    )
                    .catch((err) => console.log(err));
            }
        })
            .catch((err) => console.log(err));
    }
    render() {
        const {
            content
        } = this.state;
        const { global } = this.props;
        return (
            <div className="home-page">
                <Helmet>
                    <title>
                       { 
                        global?.activeLanguage === "ar"
                        ? content?.arabic?.meta_details?.title  
                        : content?.meta_details?.title    
                        }
                    </title>
                    <meta
                        name="description"
                        content={global?.activeLanguage === "ar" ?
                            content?.arabic?.meta_details
                                ?.description || constants?.site_content?.seo_description
                            : content?.meta_details
                                ?.description || constants?.site_content?.seo_description
                        }
                    />
                </Helmet>
                <AgsPortalComponent
                    portalCont={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.portalContent
                            : content?.portalContent
                    }
                    parentSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.parentSection
                            : content?.parentSection
                    }
                    pSecLink={content?.parentSection?.url}
                    staffSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.staffSection
                            : content?.staffSection
                    }
                    sSecLink={content?.staffSection?.url}
                    studentSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.studentSection
                            : content?.studentSection
                    }
                    stdSecLink={content?.studentSection?.url}
                    contactSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.contactSection
                            : content?.contactSection
                    }
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
)(AgsPortal);