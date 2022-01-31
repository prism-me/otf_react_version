import React, { Component } from "react";
import AboutHeader from "../sections/About/AboutHeader/AboutHeader";
import AGSExperience from "../sections/About/AGSExperience/AGSExperience";
import PrincipleMessage from "../sections/About/PrincipleMessage/PrincipleMessage_2";
import AgsEthos from "../sections/About/AGSEthos/AGSEthos";
import AGSHealth from "../sections/About/AGSHealth/AGSHealth";
import PrincipalSlider from "../sections/About/PrincipalSlider";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class About extends Component {
    state = {
        mentorsData: [],
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
                    (x) => x.slug === "about-page"
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

        API.get('/mentors').then(response => {
            this.setState({ mentorsData: response.data.data });
        })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const {
            content
        } = this.state;
        const { global } = this.props;
        return (
            <div className="home-page about-section">
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
                <AboutHeader
                    banner={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.banner
                            : content?.banner
                    }
                    bannerImage={content?.banner.image}
                />
                <AGSExperience
                    aboutAgs={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.aboutSection
                            : content?.aboutSection
                    }
                    aboutImg={content?.aboutSection.image}
                    language={global?.activeLanguage}
                />
                <PrincipleMessage
                    PrincipleMsg={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.principalSection
                            : content?.principalSection
                    }
                    PriVideo={content?.principalSection}
                    language={global?.activeLanguage}
                />
                <AgsEthos
                    AGSEthos={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.ethosSection
                            : content?.ethosSection
                    }
                />
                <AGSHealth
                    AgsHealth={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.healthSection
                            : content?.healthSection
                    }
                    AgsImg={content?.healthSection.image}
                />
                <PrincipalSlider
                    mentors={this.state.mentorsData}
                    isArabic={global?.activeLanguage === "ar"}
                    language={global?.activeLanguage}
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
)(About);