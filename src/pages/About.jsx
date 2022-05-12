import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import AbouSection from "../sections/About/about";
import SpeakerSection from "../sections/About/speaker";
import FitnessCoach from "../sections/About/fitnesscoach";
// import TestimonialSection from "../sections/About/testimonial";
// import CounterSection from "../sections/About/counter";
// import Faq from "../sections/About/faq";
import Layout from '../components/common-layout';
// import CalculateSection from "../sections/Home/calculate";
import { API } from "../http/API"


//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

const About = (props) => {

    // teams API 
    const [teamsData, setTeamsData] = useState([]);
    const [coachData, setCoachData] = useState([]);

    const getAllTeams = () => {
        API.get('/teams').then(response => {
            const allteams = response.data?.data?.filter(x => x.type === "our_team");
            const allcoaches = response.data?.data?.filter(x => x.type === "our_coaches");

            setTeamsData(allteams);
            setCoachData(allcoaches);

        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllTeams();
        getPagesData();
    }, []);


    // contact page API
    const [content, setContent] = useState([]);

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "about-us"
                    );
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
                    About Us
                </title>
                <meta
                    name="description"
                    content="About Us"
                />
            </Helmet>
            <Layout
                title={
                    global?.activeLanguage === "ar"
                        ? content?.arabic?.banner?.title
                        : content?.banner?.title
                }
                subtitle={
                    global?.activeLanguage === "ar"
                        ? content?.arabic?.banner?.subtitle
                        : content?.banner?.subtitle
                }
                // btntext="Book your Free class!"
                bannerImg={content?.banner?.banner_image}
                freeform="freeclass"
            >

                <AbouSection
                    language={global?.activeLanguage}
                    intoSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.intro
                            : content?.intro
                    }
                    missionSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section1
                            : content?.section1
                    }
                    missionImg={content?.section1?.featured_image}
                    visionSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section2
                            : content?.section2
                    }
                    visionImg={content?.section2?.featured_image}
                    valueSec={
                        global?.activeLanguage === "ar"
                            ? content?.arabic?.section3
                            : content?.section3
                    }
                    valueImg={content?.section3?.featured_image}

                />
                <FitnessCoach
                    coachData={coachData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                />

                <SpeakerSection
                    teamsData={teamsData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                />

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