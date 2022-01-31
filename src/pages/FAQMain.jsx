import React, { Component } from "react";
import FAQ from "../sections/FAQMain/FAQMain";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class FAQMain extends Component {
    state = {
        currentPage: null,
        faqData: [],
    }

    componentDidMount() {
        let currentPage = null;
        API.get(`/pages`).then((response) => {
            if (
                response.status === 200 ||
                response.status === 201
            ) {
                currentPage = response.data.data.find(
                    (x) => x.slug === "faq-page"
                );
                this.setState({ currentPage });
                API.get(`/all_sections/${currentPage._id}`)
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
            faqData
        } = this.state;
        const { global } = this.props;
        return (
            <div className="home-page">
                <Helmet>
                    <title>
                        {
                        global?.activeLanguage === "ar"
                            ? faqData?.arabic?.meta_details?.title
                            : faqData?.meta_details?.title 
                        }
                    </title>
                    <meta
                        name="description"
                        content={global?.activeLanguage === "ar" ?
                            faqData?.arabic?.meta_details
                                ?.description || constants?.site_content?.seo_description
                            : faqData?.meta_details
                                ?.description || constants?.site_content?.seo_description
                        }
                    />
                </Helmet>
                <FAQ
                    faqData={
                        this.props.global?.activeLanguage === "ar"
                            ? faqData?.arabic?.faq
                            : faqData?.faq
                    }
                    language={this.props.global?.activeLanguage}
                    isArabic={
                        this.props.global?.activeLanguage === "ar"
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
)(FAQMain);

