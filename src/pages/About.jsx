import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import AbouSection from "../sections/About/about";
import SpeakerSection from "../sections/About/speaker";
import FitnessCoach from "../sections/About/fitnesscoach";
// import TestimonialSection from "../sections/About/testimonial";
import CounterSection from "../sections/About/counter";
// import Faq from "../sections/About/faq";
import Layout from '../components/common-layout';
// import CalculateSection from "../sections/Home/calculate";

//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

const About = (props) => {

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
                subtitle="OTF Workout is backed by science, 
                spending 12 minutes in Orange Zone 
                gives you more strength, energy and 
                more life. Join us now!"
                // btntext="Book your Free class!"
                bannerImg={aboutBanner}
                freeform="freeclass"
            >

                <AbouSection
                    divId="mission"
                    title="About Orangetheory"
                    detail="Orangetheory is a 1-hour full body 
                    workout, focused on training 
                    Endurance, Strength and Power. Our 
                    class is based on Heart Rate Based 
                    Interval Training that burns more 
                    calories post workout than a 
                    traditional exercise. Our Heart Rate 
                    monitors provides you real time 
                    results. Intensity is based on your 
                    individual Heart Rate making the 
                    workout effective for all fitness 
                    levels. Our certified fitness coaches 
                    will guide you to make sure you are 
                    not over or under training"
                    info1title="Our Mission"
                    info1detail="To lead, support & inspire the Orange 
                    Passion to achieve superior results 
                    while always ensuring that we 
                    exemplify a diversified, equitable & 
                    inclusive culture."
                    info2title="Our Vision"
                    info2detail="To be the trusted global leader of 
                    innovative Heart Rate-Based interval 
                    training."
                    info3title="Our Values"
                    info3detail="Passion, Integrity, Accountability, 
                    Innovation, Community and 
                    Opportunity for all."
                />
                <FitnessCoach />

                <SpeakerSection />

                {/* <TestimonialSection /> */}

                {/* <Faq
                    language={global?.activeLanguage}
                /> */}

                {/* <CalculateSection /> */}
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