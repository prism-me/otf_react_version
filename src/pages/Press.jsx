import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants";

// import AboutPress from "../sections/Press/aboutpress";
import PressGrid from "../sections/Press/pressgrid";
import CounterSection from "../sections/Home/counter";
import Layout from '../components/common-layout';
import { API } from "../http/API"

//images
import pressBanner from "../assets/images/OTF/banner/pressbanner.jpg";
import pressBg from "../assets/images/OTF/press/pressbg.jpg";


const Press = (props) => {

    useEffect(() => {
        getAllPress();
    }, []);

    // articles API 
    const [pressData, setPressData] = useState([]);

    const getAllPress = () => {
        API.get('/blogs').then(response => {
            const allpress = response.data?.data;
            setPressData(allpress);
        })
            .catch(err => {
                console.log(err)
            })
    }

    const { global } = props;
    return (
        <div className="home-page">
            <Helmet>
                <title>
                    Press
                </title>
                <meta
                    name="description"
                    content="Press"
                />
            </Helmet>
            <Layout
                title={
                    constants?.site_content?.press_sec?.title[global?.activeLanguage]
                }
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                bannerImg={pressBanner}
                btntext={
                    constants?.site_content?.press_sec?.btn_text[global?.activeLanguage]
                }
                freeform="freeclass"
            >
                {/* <AboutPress /> */}

                <PressGrid
                    language={global?.activeLanguage}
                    pressData={pressData}
                    isArabic={global?.activeLanguage === "ar"}
                />

                <CounterSection
                    title={
                        constants?.site_content?.press_sec?.social_sec?.title[global?.activeLanguage]
                    }
                    subtitle={
                        constants?.site_content?.press_sec?.social_sec?.subtitle[global?.activeLanguage]
                    }
                    btntext={
                        constants?.site_content?.press_sec?.social_sec?.btn_text[global?.activeLanguage]
                    }
                    bgImg={pressBg}
                    classname="press"
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
)(Press);