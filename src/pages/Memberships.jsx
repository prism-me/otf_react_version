import React, { useState, useEffect } from "react";
// import ScheduleSection from "../sections/Home/schedule";
import PricingSection from "../sections/Home/pricing";
// import CounterSection from "../sections/Home/counter";
import Benefits from "../sections/Membership/benefits";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from "../components/common-layout";
import { API } from "../http/API";

//images
import banerImg from "../assets/images/OTF/banner/membershipbanner.jpg";

import benefits1 from "../assets/images/OTF/membership/Dumbells.png";
import benefits2 from "../assets/images/OTF/membership/LAT.png";
import benefits3 from "../assets/images/OTF/membership/Threadmill.png";

// import corporateBg from "../assets/images/OTF/membership/corporateBg.jpg";
// import scheduleImg from "../assets/images/OTF/home/health-safty.png";
// import getOff from "../assets/images/OTF/home/get-off.jpg";
import GetApp from "../sections/Membership/getapp";

const Memberships = (props) => {
  useEffect(() => {
    getAllMemberships();
    getPagesData();
  }, []);

  const list = [
    "Free Lunch & Burn intro class",
    "Free Team-Building Workout",
    "Preferred Membership Pricing for all employees",
  ];

  const benefitList = [
    {
      img: benefits1,
      title: "Easy online booking",
    },
    {
      img: benefits2,
      title: "Cross Region Studio Access",
    },
    {
      img: benefits3,
      title: "Month-to-month memberships",
    },
  ];

  // memberships API
  const [membershipsData, setMembershipsData] = useState([]);

  const getAllMemberships = () => {
    API.get("/memberships")
      .then((response) => {
        const allmemberships = response.data?.data;
        setMembershipsData(allmemberships);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // memberships page API
  const [membershipsMetaData, setMembershipsMetaData] = useState([]);

  const getPagesData = () => {
    API.get(`/pages`)
      .then((response) => {
        // debugger;
        if (response.status === 200 || response.status === 201) {
          let currentPage = response.data.data.find(
            (x) => x.slug === "memberships"
          );
          setMembershipsMetaData(currentPage);
        }
      })
      .catch((err) => console.log(err));
  };

  const { global } = props;
  return (
    <div>
      <Helmet>
        <title>
          {global?.activeLanguage === "ar"
            ? membershipsMetaData?.arabic?.meta_details?.meta_title
            : membershipsMetaData?.meta_details?.meta_title}
        </title>
        <meta
          name="description"
          content={
            global?.activeLanguage === "ar"
              ? membershipsMetaData?.arabic?.meta_details?.meta_description
              : membershipsMetaData?.meta_details?.meta_description
          }
        />
      </Helmet>
      <Layout
        title="Let’s Talk Fitness Memberships"
        subtitle="No matter what your fitness level is, 2 to 4 workout a week is all you need to maximize your results at Orangetheory. Let’s find the membership option that works best for you."
        bannerImg={banerImg}
        btntext="Book your Free class!"
        freeform="freeclass"
      >
        <PricingSection
          membershipsData={membershipsData}
          language={global?.activeLanguage}
          isArabic={global?.activeLanguage === "ar"}
        />

        {/* <ScheduleSection
                    titleM={"Corporate Memberships"}
                    detail={"Orangetheory Fitness is more than just a workout. It's an employee-engaging, productivity-elevating experience designed to give your company More Bottom Line and give your employees More Life, one class at a time."}
                    // list={list}
                    btnText="join now"
                    bgImg={corporateBg}
                    coachImg={scheduleImg}
                /> */}

        <Benefits benefitList={benefitList} language={global?.activeLanguage} />

        <GetApp />

        {/* <CounterSection
                    title="Get 10% off during this festive season!"
                    // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
                    btntext="BECOME A MEMBER TODAY"
                    bgImg={getOff}
                /> */}
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showSpinner: state?.globalReducer?.showSpinner,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Memberships);
