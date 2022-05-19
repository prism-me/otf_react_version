import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants";

import WorkGrid from "../sections/Workout/workgrid";
import ScheduleSection from "../sections/Home/schedule";
// import CounterSection from "../sections/Home/counter";
import CounterSection from "../sections/About/counter";
import TrainerSection from "../sections/Home/trainer";
import Coaching from "../sections/Offers/coaching"
import Layout from '../components/common-layout';
import { API } from "../http/API"

//images

import banerImg from "../assets/images/OTF/banner/aboutbanner.jpg"

import coachprofBg from "../assets/images/OTF/membership/corporateBg.jpg"
import coachImg from "../assets/images/OTF/workout/coachImg.png";
// import getOff from "../assets/images/OTF/home/get-off.jpg";
import About from "../sections/Workout/about";


const Workout = (props) => {

    useEffect(() => {
        getAllTestimonial();
    }, []);

    // testimonial API 
    const [testimonialData, setTestimonialData] = useState([]);

    const getAllTestimonial = () => {
        API.get('/testimonials').then(response => {
            const alltestimonial = response.data?.data?.filter(x => x.type === "testimonial");
            setTestimonialData(alltestimonial);
        })
            .catch(err => {
                console.log(err)
            })
    }

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    The Workout
                </title>
                <meta
                    name="description"
                    content="The Workout"
                />
            </Helmet>

            <Layout
                title={
                    constants?.site_content?.workoutbanner_sec?.title[global?.activeLanguage]
                }
                subtitle={
                    constants?.site_content?.workoutbanner_sec?.subtitle[global?.activeLanguage]
                }
                // btntext="Book your free class with us!"
                bannerImg={banerImg}
                freeform="freeclass"
            >
                <About
                    language={global?.activeLanguage}
                />

                <WorkGrid
                    language={global?.activeLanguage}
                />

                <ScheduleSection
                    titleM={
                        constants?.site_content?.workoutcoachprof_sec?.title[global?.activeLanguage]
                    }
                    subtitle={
                        constants?.site_content?.workoutcoachprof_sec?.subtitle[global?.activeLanguage]
                    }
                    detail={
                        constants?.site_content?.workoutcoachprof_sec?.description[global?.activeLanguage]
                    }
                    // detail2={"Fermentum in commodo, massa faucibus velit ut natoque. Ultrices sit varius ut justo nisl, interdum. Tortor, odio egestas erat volutpat. Urna volutpat aliquam leo mauris magna at feugiat accumsan."}
                    btnfitnessText={
                        constants?.site_content?.workoutcoachprof_sec?.btn_text[global?.activeLanguage]
                    }
                    bgImg={coachprofBg}
                    coachImg={coachImg}
                    freeform="freeclass"
                    language={global.activeLanguage}
                />

                <CounterSection
                    language={global?.activeLanguage}
                />

                <section className="pb-0">
                    <Coaching
                        language={global?.activeLanguage}
                    />
                </section>

                <TrainerSection
                    testimonial={testimonialData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                    title={
                        constants?.site_content?.membersay_sec?.title[global?.activeLanguage]
                    }
                />


                {/* <CounterSection
                    title="Get 10% off during this festive season!"
                    // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="BECOME A MEMBER TODAY"
                    bgImg={getOff}
                /> */}

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
)(Workout);