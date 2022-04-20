import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import AbouSection from "../sections/About/about";
import BannerSection from "../sections/Home/banner";
import ScheduleSection from "../sections/Home/schedule";
import CounterSection from "../sections/Home/counter";
import TrainerSection from "../sections/Home/trainer";

//images

import slider1 from "../assets/images/OTF/banner/workoutbanner.jpg"

import testimonial1 from "../assets/images/OTF/testimonial/testimonial1.png";
import testimonial2 from "../assets/images/OTF/testimonial/testimonial2.png";
import testimonial3 from "../assets/images/OTF/testimonial/testimonial3.png";
import testimonial4 from "../assets/images/OTF/testimonial/testimonial4.png";
import testimonial5 from "../assets/images/OTF/testimonial/testimonial5.png";
import testimonial6 from "../assets/images/OTF/testimonial/testimonial6.png";
import testimonial7 from "../assets/images/OTF/testimonial/testimonial7.png";

import coachprofBg from "../assets/images/OTF/workout/coachprofBg.jpg"
import getOff from "../assets/images/OTF/home/get-off.jpg";


const Workout = (props) => {
    const sliderData = [
        {
            bannerImg: slider1,
            title: "Est commodo enim.",
            detail: "Commodo eu nunc ullamcorper felis. Praesent quisque morbi egestas adipiscing malesuada faucibus purus. Ut neque tortor eu imperdiet arcu, pretium diam sem sed. Imperdiet.",
            btnm: "Book your free class with us!"
        },
        {
            bannerImg: slider1,
            title: "Est commodo enim.",
            detail: "Commodo eu nunc ullamcorper felis. Praesent quisque morbi egestas adipiscing malesuada faucibus purus. Ut neque tortor eu imperdiet arcu, pretium diam sem sed. Imperdiet.",
            btnm: "Book your free class with us!"
        }
    ];

    const testimonial = [
        {
            img: testimonial1,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial2,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial3,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial4,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial5,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial6,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
        },
        {
            img: testimonial7,
            title: "Member name example",
            subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
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

            <BannerSection
                sliderData={sliderData}
            />

            <AbouSection
                title="What Happens in class"
                detail="Magna eu pulvinar donec id. Vestibulum, egestas orci, volutpat vitae rhoncus facilisi. Id tristique consequat turpis lobortis elit nisl est sit et. Nisl, egestas condimentum sed id. Nulla dui cras enim massa, senectus etiam tortor massa quam. Fringilla vel, placerat eros eget tortor, aliquam orci. Ut condimentum est sed accumsan id. Eget enim interdum id interdum eu, dictum. Sollicitudin nisl tempus non fusce nisl euismod neque. Ut ultricies tincidunt massa rutrum nisi vestibulum, nisi eleifend. Integer egestas aliquam magna sollicitudin pulvinar sed."
                info1title="01. Rowing"
                info1detail="Every stroke on the rower activates 85% of your body’s muscles to help you improve endurance, strength and power."
                info2title="02. Cardio"
                info2detail="Whether you walk, jog or run, you’ll go at your own pace based on your fitness level. We also have bikes and striders available as alternates to the treadmill."
                info3title="03. Strength Training"
                info3detail="Our weight and floor exercises change daily so you can focus on different muscles. Your coach can provide options for any movement if you have..."
            />

            <ScheduleSection
                titleM={"Coach Professionalism"}
                subtitle={"Our Coaches Are More than Just Coaches."}
                detail={"As you take in the energy of our group workout, you’ll also get the attention and inspiration that comes from our experienced personal coaches. They’re full of the life they promise and always pushing you forward with tough love."}
                detail2={"Fermentum in commodo, massa faucibus velit ut natoque. Ultrices sit varius ut justo nisl, interdum. Tortor, odio egestas erat volutpat. Urna volutpat aliquam leo mauris magna at feugiat accumsan."}
                btnText="book a class now"
                bgImg={coachprofBg}
            />

            <TrainerSection
                testimonial={testimonial}
                title="What Our Members Are Saying About"
            />

            <CounterSection
                title="Get 10% off during this festive season!"
                subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                btntext="Book a class now"
                bgImg={getOff}
            />
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