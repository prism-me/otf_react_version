import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import PrivacySection from "../sections/privacy-policy/privacy";
import Layout from '../components/common-layout';

//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

const PrivacyPolicy = (props) => {

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Privacy Policy
                </title>
                <meta
                    name="description"
                    content="Privacy Policy"
                />
            </Helmet>
            <Layout
                title="Privacy Policy"
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                // btntext="Lorem ipsum dolor"
                bannerImg={aboutBanner}
            >

                <PrivacySection
                    title={"ULTIMATE FITNESS GROUP Privacy Policy"}
                    detail="Ultimate Fitness Group, LLC d/b/a Orangetheory® Fitness (“Ultimate,” “we,” “us,” or “our”) values your privacy. In this Privacy Policy (“Policy”), we describe how we collect, use, and disclose information we obtain about visitors to our website, www.orangetheory.com  (the “Site”), users of our mobile applications (the “App” or “Apps”), visitors to Orangetheory® Fitness studios (whether owned by Ultimate or one of our franchisees), and the services available through our Site and App, and how we use and disclose that information. This Policy does not apply to a franchisee’s collection, use, and disclosure of your information, except as described in this policy with regard to data sharing and change of a franchisee. By visiting the Site, using or downloading the App, or using any of our services, you acknowledge that your personal information will be handled as described in this Policy. Your use of our Site, App, or services, and any dispute over privacy, is subject to this Policy and our Terms of Use, including its applicable limitations on damages and the resolution of disputes. The Terms of Use are incorporated by reference into this Policy."
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