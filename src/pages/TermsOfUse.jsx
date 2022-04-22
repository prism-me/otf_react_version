import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import PrivacySection from "../sections/privacy-policy/privacy";
import Layout from '../components/common-layout';

//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

const TermsOfUse = (props) => {

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Terms Of Use
                </title>
                <meta
                    name="description"
                    content="Terms Of Use"
                />
            </Helmet>
            <Layout
                title="Lorem ipsum"
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                btntext="Lorem ipsum dolor"
                bannerImg={aboutBanner}
            >

                <PrivacySection
                    title={"Terms Of Use"}
                    detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
)(TermsOfUse);