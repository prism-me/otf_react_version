import React from "react";
// import ScheduleSection from "../sections/Home/schedule";
import PricingSection from "../sections/Home/pricing";
// import CounterSection from "../sections/Home/counter";
import Benefits from "../sections/Membership/benefits";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from '../components/common-layout';


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
    const list = [
        "Free Lunch & Burn intro class",
        "Free Team-Building Workout",
        "Preferred Membership Pricing for all employees"
    ];

    const benefitList = [
        {
            img: benefits1,
            title: "Easy online booking"
        },
        {
            img: benefits2,
            title: "Nationwide studio access"
        },
        {
            img: benefits3,
            title: "Month-to-month memberships"
        }
    ]

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Memberships
                </title>
                <meta
                    name="description"
                    content="Memberships"
                />
            </Helmet>
            <Layout
                title="Let’s Talk Fitness Memberships"
                subtitle="No matter what your fitness level is, 2 to 4 workout a week is all you need to maximize your results at Orangetheory. Let’s find the membership option that works best for you."
                // btntext="Become a Member Today"
                bannerImg={banerImg}
            >

                <PricingSection />

                {/* <ScheduleSection
                    titleM={"Corporate Memberships"}
                    detail={"Orangetheory Fitness is more than just a workout. It's an employee-engaging, productivity-elevating experience designed to give your company More Bottom Line and give your employees More Life, one class at a time."}
                    // list={list}
                    btnText="join now"
                    bgImg={corporateBg}
                    coachImg={scheduleImg}
                /> */}

                <Benefits
                    benefitList={benefitList}
                />

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
)(Memberships);