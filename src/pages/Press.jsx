import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import AboutPress from "../sections/Press/aboutpress";
import PressGrid from "../sections/Press/pressgrid";
import CounterSection from "../sections/Home/counter";
import Layout from '../components/common-layout';

//images
import pressBanner from "../assets/images/OTF/banner/pressbanner.jpg";
import pressBg from "../assets/images/OTF/press/pressbg.jpg";


const Press = (props) => {

    const { global } = props;
    return (
        <div className="home-page">
            <Helmet>
                <title>
                    Press
                </title>
                <meta
                    name="description"
                    content="Press"
                />
            </Helmet>
            <Layout
                title="Press"
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                bannerImg={pressBanner}
                btntext="Book your Free class!"
                freeform="freeclass"
            >
                <AboutPress />

                <PressGrid />

                <CounterSection
                    title="Follow us on Social Media"
                    subtitle="Like and Follow Us to Stay up to Date with the Latest Events from our OTF Community."
                    btntext="BECOME A MEMBER TODAY"
                    bgImg={pressBg}
                    classname="press"
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
)(Press);