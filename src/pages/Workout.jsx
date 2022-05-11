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

import testimonial1 from "../assets/images/OTF/testimonial/testimonial1.png";
import testimonial2 from "../assets/images/OTF/testimonial/testimonial2.png";
import testimonial3 from "../assets/images/OTF/testimonial/testimonial3.png";
import testimonial4 from "../assets/images/OTF/testimonial/testimonial4.png";
import testimonial5 from "../assets/images/OTF/testimonial/testimonial5.png";
import testimonial6 from "../assets/images/OTF/testimonial/testimonial6.png";
import testimonial7 from "../assets/images/OTF/testimonial/testimonial7.png";

import coachprofBg from "../assets/images/OTF/membership/corporateBg.jpg"
import coachImg from "../assets/images/OTF/workout/coachImg.png";
import getOff from "../assets/images/OTF/home/get-off.jpg";
import About from "../sections/Workout/about";


const Workout = (props) => {


    const testimonial = [
        {
            img: testimonial1,
            title: "Mac Pinto",
            date: "2 years ago",
            subtitle: "LOVE the concept and execution. Coaches are super nice, and the owner is always there to offer advice or help. I wasn't fit enough to keep up, but no judgement, they were very understanding about it, encouraging even. Burned a ton of calories and had fun doing it, isn't that what we're all looking for?",
            rating: "5.0"
        },
        {
            img: testimonial2,
            title: "Jet Li",
            date: "3 years ago",
            subtitle: "Great session especially if you like tracking stats and getting your body into the splat zone.Good support from Felipe frontdesk Great Energy from Pattie the instructor Facility has got a nice orange 🍊 lighting so feels like you are in a club and burn calories at a great pace.",
            rating: "5.0"
        },
        {
            img: testimonial3,
            title: "natasha mufleh",
            date: "3 years ago",
            subtitle: "Obsessed!!! All the coaches I have trained with at otf dubai are amazing!! The last class I attended was wit Samia, and it was by far the best OTF class I have ever done! I have never earned as many splat points. She is extremely encouraging, makes sure to correct form, radiates positive energy, and her music is the best playlist ever!! I can’t wait to be back.",
            rating: "5.0"
        },
        {
            img: testimonial4,
            title: "Adam D",
            date: "a years ago",
            rating: "5.0",
            subtitle: "A great gym in a great location. Located centrally at Times Square Mall there is plenty of parking (3hrs free). The studio offers only classes which consist of approximately 20mins rowing, 20min workout, 20mins cardio. Each class is unique and structured differently.The trainers there are handpicked, certified and will always motivate you to reach your full potential."
        }
    ];

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
                <About />

                <WorkGrid />

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

                <CounterSection />

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