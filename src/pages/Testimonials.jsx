import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import TrainerSection from "../sections/Home/trainer";
import Testimonial from "../sections/Testimonial/trainer";

import Layout from '../components/common-layout';
// import CounterSection from "../sections/Home/counter";

import { API } from "../http/API"


//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

import vt1 from "../assets/images/OTF/testimonial/vt1.jpg";
import vt2 from "../assets/images/OTF/testimonial/vt2.jpg";
import vt3 from "../assets/images/OTF/testimonial/vt3.jpg";
import vt4 from "../assets/images/OTF/testimonial/vt4.jpg";
import vt5 from "../assets/images/OTF/testimonial/vt5.jpg";



// import offerbg from "../assets/images/OTF/home/get-off.jpg";
import VideotesTimonial from "../sections/Testimonial/videotestimonial";


const Testimonials = (props) => {

    // testimonial API 
    const [testimonialData, setTestimonialData] = useState([]);
    const [memberreviewData, setMemberReviewData] = useState([]);


    const getAllTestimonial = () => {
        API.get('/testimonials').then(response => {
            const alltestimonial = response.data?.data?.filter(x => x.type === "testimonial");
            const allmemberreview = response.data?.data?.filter(x => x.type === "member_review");

            setTestimonialData(alltestimonial);
            setMemberReviewData(allmemberreview);
        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllTestimonial();
    }, []);

    const videotestimonial = [
        {
            img: vt5,
            video_link: "https://youtu.be/p2Qt1ZPqAks",
        },
        {
            img: vt4,
            video_link: "https://youtu.be/50BqPjjYmNY",
        },
        {
            img: vt3,
            video_link: "https://youtu.be/7hMweKkfH00",
        },
        {
            img: vt2,
            video_link: "https://youtu.be/U2FSsk-BSbc",
        },
        {
            img: vt1,
            video_link: "https://youtu.be/V116D_ABgts",
        }
    ];

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
                    testimonial={videotestimonial}
                    title="Videos"
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