import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import BannerSection from "../sections/Home/banner";
import AboutSection from "../sections/Home/about";
import ScheduleSection from "../sections/Home/schedule";
import PricingSection from "../sections/Home/pricing";
import CounterSection from "../sections/Home/counter";
import TrainerSection from "../sections/Home/trainer";
import FormatSection from "../sections/Home/format";
import CalculateSection from "../sections/Home/calculate";

//images

import slider1 from "../assets/images/OTF/banner/homeBannerSlider.jpg";

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

  const sliderData = [
    {
      bannerImg: slider1,
      title: "The Smartest Workout for More Results",
      btn1: "BOOK A FREE CLASS NOW",
      btn2: "view membership details"
    },
    {
      bannerImg: slider1,
      title: "The Smartest Workout for More Results",
      btn1: "BOOK A FREE CLASS NOW",
      btn2: "view membership details"
    }
  ];

  const listImg = [
    heatl1,
    heatl2,
    heatl3
  ];

  const testimonial = [
    {
      img: testimonial1,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
    },
    {
      img: testimonial2,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
    },
    {
      img: testimonial3,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
    },
    {
      img: testimonial4,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
    },
    {
      img: testimonial5,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
    },
    {
      img: testimonial6,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
    },
    {
      img: testimonial7,
      title: "Client name example",
      subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit..",
      rating: "4.0"
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
          sliderData={sliderData}
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
          subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
          btntext="BOOK A FREE CLASS NOW"
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
