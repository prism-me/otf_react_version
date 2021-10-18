import React, { Component } from "react"; import FAQ from "../sections/Enroll/FAQ";
import AdmissionProcedure from "../sections/Enroll/AdmissionProcedure";
import AgeRequirements from "../sections/Enroll/AgeRequirements";
import Enquiry from "../sections/Enroll/Enquiry";
import FeesPayments from "../sections/Enroll/FeesPayments";
import ApplyOnline from "../sections/Enroll/ApplyOnline";
import Covid from "../sections/Enroll/Covid";
import AdmissionContact from "../sections/Enroll/AdmissionContact";
import Payment from "../sections/Enroll/Payment";
import EnrollTabs from "../sections/Enroll/EnrollTabs";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class Enroll extends Component {
    state = {
        currentPage: null,
        faqPage: null,
        content: null,
        faqData: []
    }

    componentDidMount() {
        let currentPage = null;
        let faqPage = null;
        API.get(`/pages`).then((response) => {
            if (
                response.status === 200 ||
                response.status === 201
            ) {
                currentPage = response.data.data.find(
                    (x) => x.slug === "Enroll-page"
                );
                faqPage = response.data.data.find(
                    (x) => x.slug === "faq-page"
                );
                this.setState({ currentPage, faqPage });
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
                API.get(`/all_sections/${faqPage._id}`)
                    .then(
                        (response) => {
                            if (response.data.data) {
                                // debugger;
                                let content =
                                    response.data.data?.[response.data.data.length - 1]
                                        ?.content;
                                this.setState({ faqData: content });
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
                        {`AGS | ${global?.activeLanguage === "ar"
                            ? content?.arabic?.meta_details?.title ||
                            constants?.site_content?.site_name :
                            content?.meta_details?.title ||
                            constants?.site_content?.site_name
                            }`}
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
                <EnrollTabs
                    introSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.intro
                            : content?.intro
                    }
                    language={global?.activeLanguage}
                />
                <AdmissionProcedure
                    stepOne={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step1
                            : content?.step1
                    }
                    stepTwo={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step2
                            : content?.step2
                    }
                    stepThree={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step3
                            : content?.step3
                    }
                    stepFour={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step4
                            : content?.step4
                    }
                    stepFive={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.step5
                            : content?.step5
                    }
                    docData={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.documents
                            : content?.documents
                    }
                    language={global?.activeLanguage}
                />
                <AgeRequirements
                    ageRequirementSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.ageRequirement
                            : content?.ageRequirement
                    }
                    ReqSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.ageRequirementModal
                            : content?.ageRequirementModal
                    }
                    language={global?.activeLanguage}
                />
                <Enquiry
                    language={global?.activeLanguage}
                />
                <FeesPayments
                    feesSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.feesPayments
                            : content?.feesPayments
                    }
                    language={global?.activeLanguage}
                />
                <Payment
                    genrData={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.generalPolicies
                            : content?.generalPolicies
                    }
                    language={global?.activeLanguage}
                />
                <ApplyOnline
                    applyOnlineSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.applyOnline
                            : content?.applyOnline
                    }
                    language={global?.activeLanguage}
                />
                <FAQ
                    faqData={
                        this.props.global?.activeLanguage === "ar"
                            ? this.state.faqData?.arabic?.faq
                            : this.state.faqData?.faq
                    }
                    language={this.props.global?.activeLanguage}
                    isArabic={
                        this.props.global?.activeLanguage === "ar"
                    }
                    language={global?.activeLanguage}
                />
                <AdmissionContact
                    language={global?.activeLanguage}
                />
                <Covid
                    covidSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.covidSection
                            : content?.covidSection
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
)(Enroll);