import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import BannerSection from "../sections/Home/homebanner";
import AboutSection from "../sections/Home/about";
import ScheduleSection from "../sections/Home/schedule";
import PricingSection from "../sections/Home/pricing";
import CounterSection from "../sections/Home/counter";
import TrainerSection from "../sections/Home/trainer";
// import FormatSection from "../sections/Home/format";
import CalculateSection from "../sections/Home/calculate";
import TestimonialSection from "../sections/About/testimonial";

import { API } from "../http/API";


//images

import heatl1 from "../assets/images/OTF/icons/heatl1.png"
import heatl2 from "../assets/images/OTF/icons/heatl2.png"
import heatl3 from "../assets/images/OTF/icons/heatl3.png"

import schBg from "../assets/images/OTF/home/health-safetybg.jpg";
import offerbg from "../assets/images/OTF/home/get-off.jpg";
import scheduleImg from "../assets/images/OTF/home/health-safty.png";



const Home = (props) => {

  // memberships API 
  const [membershipsData, setMembershipsData] = useState([]);

  const getAllMemberships = () => {
    API.get('/memberships').then(response => {
      const allmemberships = response.data?.data;
      setMembershipsData(allmemberships);
    })
      .catch(err => {
        console.log(err)
      })
  }

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

  useEffect(() => {
    getAllTestimonial();
    getAllMemberships();
  }, []);

  const listImg = [
    heatl1,
    heatl2,
    heatl3
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

        <TestimonialSection />

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

        <section className="pt-0">
          <PricingSection
            membershipsData={membershipsData}
            language={global?.activeLanguage}
            isArabic={global?.activeLanguage === "ar"}
          />
        </section>

        <CounterSection
          title="Get 10% off during this festive season!"
          // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
          btntext="BECOME A MEMBER TODAY"
          bgImg={offerbg}

        />

        <TrainerSection
          testimonial={testimonialData}
          language={global?.activeLanguage}
          isArabic={global?.activeLanguage === "ar"}
          title="Testimonials"
        />

        {/* <FormatSection /> */}

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
