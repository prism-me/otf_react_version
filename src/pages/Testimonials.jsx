import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import TrainerSection from "../sections/Home/trainer";
import Testimonial from "../sections/Testimonial/trainer";
import Layout from '../components/common-layout';
// import CounterSection from "../sections/Home/counter";
import VideotesTimonial from "../sections/Testimonial/videotestimonial";
import { API } from "../http/API"

//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";
// import offerbg from "../assets/images/OTF/home/get-off.jpg";



const Testimonials = (props) => {

    // testimonial API 
    const [testimonialData, setTestimonialData] = useState([]);
    const [memberreviewData, setMemberReviewData] = useState([]);
    const [videotestimonialData, setVideotesTimonialData] = useState([]);

    const getAllTestimonial = () => {
        API.get('/testimonials').then(response => {
            const alltestimonial = response.data?.data?.filter(x => x.type === "testimonial");
            const allmemberreview = response.data?.data?.filter(x => x.type === "member_review");
            const videotestimonial = response.data?.data?.filter(x => x.type === "video_review");

            setTestimonialData(alltestimonial);
            setMemberReviewData(allmemberreview);
            setVideotesTimonialData(videotestimonial);

        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllTestimonial();
    }, []);

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Testimonials
                </title>
                <meta
                    name="description"
                    content="Testimonials"
                />
            </Helmet>
            <Layout
                title="What Our Members Are Saying About"
                subtitle="Let's work towards a better version of ourselves - together."
                // btntext="Book your Free class!"
                bannerImg={aboutBanner}
                freeform="freeclass"
            >

                <TrainerSection
                    title="Testimonials"
                    testimonial={testimonialData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                />

                <Testimonial
                    memberreviewData={memberreviewData}
                    title="What Our Members Are Saying About:"
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                />
                <VideotesTimonial
                    videotestimonialData={videotestimonialData}
                    title="Videos"
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
                />
                {/* <CounterSection
                    title="Get 10% off during this festive season!"
                    subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="BOOK A FREE CLASS NOW"
                    bgImg={offerbg}

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
)(Testimonials);