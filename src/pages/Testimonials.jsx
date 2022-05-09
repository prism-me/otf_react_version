import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import TrainerSection from "../sections/Home/trainer";
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

import vt1 from "../assets/images/OTF/testimonial/vt1.jpg";
import vt2 from "../assets/images/OTF/testimonial/vt2.jpg";
import vt3 from "../assets/images/OTF/testimonial/vt3.jpg";
import vt4 from "../assets/images/OTF/testimonial/vt4.jpg";
import vt5 from "../assets/images/OTF/testimonial/vt5.jpg";



import offerbg from "../assets/images/OTF/home/get-off.jpg";
import VideotesTimonial from "../sections/Testimonial/videotestimonial";


const Testimonials = (props) => {

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
                    testimonial={testimonial}
                    title="Testimonials"
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