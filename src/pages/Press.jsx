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
                title="Lorem ipsum"
                subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                btntext="Lorem ipsum dolor"
                bannerImg={pressBanner}
            >
                <AboutPress />

                <PressGrid />

                <CounterSection
                    title="Follow us on Social Media"
                    subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="Lorem Ipsum"
                    bgImg={pressBg}
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