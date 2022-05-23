import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import PrivacySection from "../sections/privacy-policy/privacy";
import Layout from '../components/common-layout';
import { API } from "../http/API"


//images
// import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

const PrivacyPolicy = (props) => {

    useEffect(() => {
        getPagesData();
    }, []);

    // terms of use page API
    const [content, setContent] = useState([]);
    const [termsMetaData, setTermsMetaData] = useState([]);

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "privacy-policy"
                    );
                    setTermsMetaData(currentPage);
                    API.get(`/all-sections/${currentPage._id}`)
                        .then((response) => {
                            setContent(response.data?.data[response.data.data?.length - 1]?.content);
                        })
                }
            })
            .catch((err) => console.log(err));
    }

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    {
                        global?.activeLanguage === "ar"
                            ? termsMetaData?.arabic?.meta_details?.meta_title
                            : termsMetaData?.meta_details?.meta_title
                    }
                </title>
                <meta
                    name="description"
                    content={global?.activeLanguage === "ar" ?
                        termsMetaData?.arabic?.meta_details
                            ?.meta_description
                        : termsMetaData?.meta_details
                            ?.meta_description
                    }
                />
            </Helmet>
            <Layout
                title={
                    global?.activeLanguage === "ar"
                        ? content?.arabic?.banner?.title
                        : content?.banner?.title
                }
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                // btntext="Lorem ipsum dolor"
                bannerImg={content?.banner?.banner_image}
            >

                <PrivacySection
                    title={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.intro?.title
                            : content?.intro?.title
                    }
                    detail={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.intro?.content
                            : content?.intro?.content
                    }
                />

            </Layout>
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
)(PrivacyPolicy);