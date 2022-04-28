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
                title="Terms Of Use"
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                // btntext="Lorem ipsum dolor"
                bannerImg={aboutBanner}
            >

                <PrivacySection
                    title={"Terms Of Use"}
                    detail="These terms of use (the “Terms”) are a legal contract between you and Ultimate Fitness Group, LLC d/b/a Orangetheory Fitness (“Company”, “we” or “us”) and are applicable to the services available on or through the Company’s websites located at the urls: www.orangetheory.com and www.orangetheory.com/en-us/athome/, as well as the Company’s mobile applications (collectively, the “Site”, where applicable).  By accessing any area of the Site, you agree to be legally bound to and to abide by the Terms.  If you do not agree with any of the Terms, do not access or otherwise use the Site. Note:  These terms contain a dispute resolution and arbitration provision, including class action waiver that affects your rights under the Terms and with respect to disputes you may have with the Company.  You may opt out of the binding individual arbitration and class action waiver as provided below."
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