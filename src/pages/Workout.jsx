import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import WorkGrid from "../sections/Workout/workgrid";
// import BannerSection from "../sections/Home/banner";
import ScheduleSection from "../sections/Home/schedule";
import CounterSection from "../sections/Home/counter";
import TrainerSection from "../sections/Home/trainer";
import Layout from '../components/common-layout';

//images

import banerImg from "../assets/images/OTF/banner/workoutbanner.jpg"

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


const Workout = (props) => {
    // const sliderData = [
    //     {
    //         bannerImg: slider1,
    //         title: "Get Results You Can Change and Feel!",
    //         // detail: "Commodo eu nunc ullamcorper felis. Praesent quisque morbi egestas adipiscing malesuada faucibus purus. Ut neque tortor eu imperdiet arcu, pretium diam sem sed. Imperdiet.",
    //         btnm: "Book your free class with us!"
    //     },
    //     {
    //         bannerImg: slider1,
    //         title: "Get Results You Can Change and Feel!",
    //         // detail: "Commodo eu nunc ullamcorper felis. Praesent quisque morbi egestas adipiscing malesuada faucibus purus. Ut neque tortor eu imperdiet arcu, pretium diam sem sed. Imperdiet.",
    //         btnm: "Book your free class with us!"
    //     }
    // ];

    const testimonial = [
        {
            img: testimonial1,
            video_link: "https://youtu.be/p2Qt1ZPqAks",
            title: "Mac Pinto",
            date: "2 years ago",
            subtitle: "LOVE the concept and execution. Coaches are super nice, and the owner is always there to offer advice or help. I wasn't fit enough to keep up, but no judgement, they were very understanding about it, encouraging even. Burned a ton of calories and had fun doing it, isn't that what we're all looking for?",
            rating: "4.5"
        },
        {
            img: testimonial2,
            video_link: "https://youtu.be/p2Qt1ZPqAks",
            title: "Jet Li",
            date: "3 years ago",
            subtitle: "Great session especially if you like tracking stats and getting your body into the splat zone.Good support from Felipe frontdesk Great Energy from Pattie the instructor Facility has got a nice orange 🍊 lighting so feels like you are in a club and burn calories at a great pace.",
            rating: "5.0"
        },
        {
            img: testimonial3,
            title: "natasha mufleh",
            video_link: "https://youtu.be/7hMweKkfH00",
            subtitle: "Obsessed!!! All the coaches I have trained with at otf dubai are amazing!! The last class I attended was wit Samia, and it was by far the best OTF class I have ever done! I have never earned as many splat points. She is extremely encouraging, makes sure to correct form, radiates positive energy, and her music is the best playlist ever!! I can’t wait to be back.",
            rating: "4.5"
        },
        // {
        //     img: testimonial4,
        //     video_link: "https://youtu.be/7hMweKkfH00",
        //     title: "Client name example",
        //     subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
        //     rating: "4.0"
        // },
        // {
        //     img: testimonial5,
        //     video_link: "https://youtu.be/V116D_ABgts",
        //     title: "Client name example",
        //     subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
        //     rating: "4.0"
        // },
        // {
        //     img: testimonial6,
        //     title: "Client name example",
        //     subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
        //     rating: "4.0"
        // },
        // {
        //     img: testimonial7,
        //     title: "Client name example",
        //     subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
        //     rating: "4.0"
        // }
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

            {/* <BannerSection
                sliderData={sliderData}
            /> */}

            <Layout
                title="Get Results You Can See and Feel"
                // subtitle="No matter what your fitness level is, 2 to 4 workout a week is all you need to maximize your results at Orangetheory. Let’s find the membership option that works best for you."
                btntext="Book your free class with us!"
                bannerImg={banerImg}
                freeform="freeclass"
            >

                <WorkGrid />

                <ScheduleSection
                    titleM={"Coach Professionalism"}
                    subtitle={"Our Coaches Are More than Just Coaches."}
                    detail={"As you take in the energy of our group workout, you’ll also get the attention and inspiration that comes from our experienced personal training coaches. They’re full of the life they promise and always pushing you forward with tough love."}
                    // detail2={"Fermentum in commodo, massa faucibus velit ut natoque. Ultrices sit varius ut justo nisl, interdum. Tortor, odio egestas erat volutpat. Urna volutpat aliquam leo mauris magna at feugiat accumsan."}
                    btnText="book a class now"
                    bgImg={coachprofBg}
                    coachImg={coachImg}
                    freeform="freeclass"
                />

                <TrainerSection
                    testimonial={testimonial}
                    title="What Our Members Are Saying About"
                />

                <CounterSection
                    title="Get 10% off during this festive season!"
                    // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="BECOME A MEMBER TODAY"
                    bgImg={getOff}
                />

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