import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import TrainerSection from "../sections/Home/trainer";
import Testimonial from "../sections/Testimonial/trainer";

import Layout from '../components/common-layout';
// import CounterSection from "../sections/Home/counter";


//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

import testimonial1 from "../assets/images/OTF/testimonial/testimonial1.png";
import testimonial2 from "../assets/images/OTF/testimonial/testimonial2.png";
import testimonial3 from "../assets/images/OTF/testimonial/testimonial3.png";
import testimonial4 from "../assets/images/OTF/testimonial/testimonial4.png";
import testimonial5 from "../assets/images/OTF/testimonial/testimonial5.png";
import testimonial6 from "../assets/images/OTF/testimonial/testimonial6.png";
import testimonial7 from "../assets/images/OTF/testimonial/testimonial7.png";

import kathryn from "../assets/images/OTF/testimonial/kathryn.jpg";
import eugene from "../assets/images/OTF/testimonial/eugene.jpg";
import deb from "../assets/images/OTF/testimonial/deb.jpg";
import carissa from "../assets/images/OTF/testimonial/carissa.jpg";

import vt1 from "../assets/images/OTF/testimonial/vt1.jpg";
import vt2 from "../assets/images/OTF/testimonial/vt2.jpg";
import vt3 from "../assets/images/OTF/testimonial/vt3.jpg";
import vt4 from "../assets/images/OTF/testimonial/vt4.jpg";
import vt5 from "../assets/images/OTF/testimonial/vt5.jpg";



import offerbg from "../assets/images/OTF/home/get-off.jpg";
import VideotesTimonial from "../sections/Testimonial/videotestimonial";


const Testimonials = (props) => {

    // testimonial API 
    const [testimonialData, setTestimonialData] = useState([]);

    const getAllTestimonial = () => {
        API.get('/testimonials').then(response => {
            const alltestimonial = response.data?.data;
            setTestimonialData(alltestimonial);
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

    const membersay = [
        {
            img: kathryn,
            cat: "The Studio",
            title: "Kathryn W",
            subtitle: "I was afraid I was not going to be able to keep up. But I couldn’t have been more wrong. Everyone at the studio was encouraging. I loved the coaches, and the workout was so fun.",
        },
        {
            img: eugene,
            cat: "The First Class",
            title: "Eugene",
            subtitle: "I was super nervous and scared, but once I completed the class, I was hooked immediately!"
        },
        {
            img: deb,
            cat: "The Community",
            title: "Carissa C",
            subtitle: "I was never an athlete. OTF has given me the ability to push myself individually, yet still feel like I am part of a team."
        },
        {
            img: carissa,
            cat: "The Workout ",
            title: "Deb A",
            subtitle: "The workouts are so fast-paced that I don’t have time to think about the stress of my day, and for 60 minutes my mind is clear."
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
                    testimonial={membersay}
                    title="What Our Members Are Saying About:"
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