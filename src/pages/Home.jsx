import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import BannerSection from "../sections/Home/homebanner";
import AboutSection from "../sections/Home/about";
import ScheduleSection from "../sections/Home/schedule";
import PricingSection from "../sections/Home/pricing";
import CounterSection from "../sections/Home/counter";
import TrainerSection from "../sections/Home/trainer";
import FormatSection from "../sections/Home/format";
import CalculateSection from "../sections/Home/calculate";

//images

import heatl1 from "../assets/images/OTF/icons/heatl1.png"
import heatl2 from "../assets/images/OTF/icons/heatl2.png"
import heatl3 from "../assets/images/OTF/icons/heatl3.png"

import testimonial1 from "../assets/images/OTF/testimonial/testimonial1.png";
import testimonial2 from "../assets/images/OTF/testimonial/testimonial2.png";
import testimonial3 from "../assets/images/OTF/testimonial/testimonial3.png";
import testimonial4 from "../assets/images/OTF/testimonial/testimonial4.png";
import testimonial5 from "../assets/images/OTF/testimonial/testimonial5.png";
import testimonial6 from "../assets/images/OTF/testimonial/testimonial6.png";
import testimonial7 from "../assets/images/OTF/testimonial/testimonial7.png";

import schBg from "../assets/images/OTF/home/health-safetybg.jpg";
import offerbg from "../assets/images/OTF/home/get-off.jpg";
import scheduleImg from "../assets/images/OTF/home/health-safty.png";



const Home = (props) => {

  const listImg = [
    heatl1,
    heatl2,
    heatl3
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
    <>
      <div>
        <Helmet>
          <title>Orange Theory</title>
          <meta
            name='description'
            content="Orange Theory"
          />
        </Helmet>

        <BannerSection
          language={global?.activeLanguage}
        />

        <AboutSection
          language={global?.activeLanguage}
        />

        <ScheduleSection
          title={"Health and Safety (It's not either/or)"}
          detail={"As the pandemic continues, it’s incredibly important Orangetheory studios operate with an abundance of caution. We continually review and evaluate our safety and disinfection protocols to align with the latest recommendations and local government mandates."}
          detail2="The Orangetheory studio design, structured class schedule, block interval training and tight-knit community of franchisees enables us to have a more controlled environment in comparison to other fitness gyms."
          listImg={listImg}
          bgImg={schBg}
          coachImg={scheduleImg}

        />

        <PricingSection />

        <CounterSection
          title="Get 10% off during this festive season!"
          // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
          btntext="BECOME A MEMBER TODAY"
          bgImg={offerbg}

        />

        <TrainerSection
          testimonial={testimonial}
          title="Testimonials"
        />

        <FormatSection />

        <CalculateSection />

      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    showSpinner: state?.globalReducer?.showSpinner,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
