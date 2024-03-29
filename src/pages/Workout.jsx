import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

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
                title="Backed by science"
                subtitle="OTF Workout is backed by science, 
                spending 12 minutes in Orange Zone 
                gives you more strength, energy and 
                more life. Join us now!"
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
                    titleM={"Coach Professionalism"}
                    subtitle={"Our Coaches Are More than Just Coaches."}
                    detail={"As you take in the energy of our group workout, you’ll also get the attention and inspiration that comes from our experienced personal training coaches. They’re full of the life they promise and always pushing you forward with tough love."}
                    // detail2={"Fermentum in commodo, massa faucibus velit ut natoque. Ultrices sit varius ut justo nisl, interdum. Tortor, odio egestas erat volutpat. Urna volutpat aliquam leo mauris magna at feugiat accumsan."}
                    btnfitnessText="Know Our Fitness Experts"
                    bgImg={coachprofBg}
                    coachImg={coachImg}
                    freeform="freeclass"
                    language={global.activeLanguage}
                />

                <CounterSection
                    language={global?.activeLanguage}
                />

                <section className="pb-0">
                    <Coaching />
                </section>

                <TrainerSection
                    testimonial={testimonialData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                    title="What Our Members Are Saying About"
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