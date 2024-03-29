import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { API } from "../http/API";

import BannerSection from "../sections/Home/homebanner";
import AboutSection from "../sections/Home/about";
import ScheduleSection from "../sections/Home/schedule";
import PricingSection from "../sections/Home/pricing";
import TrainerSection from "../sections/Home/trainer";
import ClassSchedule from "../sections/Home/classSchedule";
import CalculateSection from "../sections/Home/calculate";
import TestimonialSection from "../sections/About/testimonial";

//images

import heatl1 from "../assets/images/OTF/icons/heatl1.png"
import heatl2 from "../assets/images/OTF/icons/heatl2.png"
import heatl3 from "../assets/images/OTF/icons/heatl3.png"

import schBg from "../assets/images/OTF/home/health-safetybg.jpg";
import scheduleImg from "../assets/images/OTF/home/health-safty.png";



const Home = (props) => {

  useEffect(() => {
    getAllTestimonial();
    getAllMemberships();
    getAllLocations();
    getPagesData();
  }, []);

  // home page API
  const [content, setContent] = useState([]);

  const getPagesData = () => {
    API.get(`/pages`)
      .then((response) => {
        // debugger;
        if (response.status === 200 || response.status === 201) {
          let currentPage = response.data.data.find(
            (x) => x.slug === "home"
          );
          API.get(`/all-sections/${currentPage._id}`)
            .then((response) => {
              setContent(response.data?.data[response.data.data?.length - 1]?.content);
            })
        }
      })
      .catch((err) => console.log(err));
  }


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

  // locations API 
  const [locationsData, setLocationsData] = useState([]);

  const getAllLocations = () => {
    API.get('/locations').then(response => {
      const alllocations = response.data?.data;
      console.log("locationsData", response.data?.data)
      setLocationsData(alllocations);
    })
      .catch(err => {
        console.log(err)
      })
  }

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

        <ClassSchedule
          language={global?.activeLanguage}
          mercatoSec={
            global?.activeLanguage === "ar"
              ? content?.arabic?.mercatoSection
              : content?.mercatoSection
          }
          timesSec={
            global?.activeLanguage === "ar"
              ? content?.arabic?.timesSection
              : content?.timesSection
          }
        />

        <TrainerSection
          testimonial={testimonialData}
          language={global?.activeLanguage}
          isArabic={global?.activeLanguage === "ar"}
          title="Testimonials"
        />

        <CalculateSection
          locationsData={locationsData}
          language={global?.activeLanguage}
          isArabic={global?.activeLanguage === "ar"}
        />

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
