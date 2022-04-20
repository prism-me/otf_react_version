import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import AbouSection from "../sections/About/about";
import SpeakerSection from "../sections/About/speaker";
import TestimonialSection from "../sections/About/testimonial";
import CounterSection from "../sections/About/counter";
import Faq from "../sections/About/faq";
import Layout from '../components/common-layout'
import CalculateSection from "../sections/Home/calculate";


const About = () => {

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    About Us
                </title>
                <meta
                    name="description"
                    content="About Us"
                />
            </Helmet>
            <Layout
                title="Backed by science"
                subtitle="You don’t need to be a scientist to understand how spending 12 minutes or more in the Orange Zone gives you more strength, more energy and more life. You just need to be a member."
                btntext="Book your Free class!"
                bannerImg="/assets/images/OTF/banner/aboutbanner.jpg"
            >

                <AbouSection
                    divId="mission"
                    title="a little about orange theory"
                    detail="Orangetheory is a 1 hour, full body workout, focused on training Endurance, Strength and/or Power. We use Heart Rate Based Interval Training, which burns more calories post workout than a traditional exercise. When wearing our Heart Rate monitors, your real time results are displayed on large screens throughout the studio. Intensity is based on your individual Heart Rate zones, making the workout effective for all fitness levels. To top it off, our fitness coaches to lead the workout to prevent you from over or under training."
                    info1title="Our Mission"
                    info1detail="Aliquam felis augue non nisl morbi elit. Eu pharetra, scelerisque varius amet vulputate porta vitae. Facilisi."
                    info2title="Our Vision"
                    info2detail="Vitae quisque facilisis vel aliquam dolor enim ut risus. Diam aliquam faucibus semper habitasse parturient."
                    info3title="Our Values"
                    info3detail="Molestie dui posuere amet, nunc, placerat. Ullamcorper at ultrices lorem malesuada arcu nisi."
                />

                <SpeakerSection />

                <TestimonialSection />

                <CounterSection />

                <Faq />

                <CalculateSection />
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
)(About);