import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

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
        getPagesData();
    }, []);

    // press API 
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

    // press page API
    const [pressMetaData, setPressMetaData] = useState([]);

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "press"
                    );
                    setPressMetaData(currentPage);
                }
            })
            .catch((err) => console.log(err));
    }

    const { global } = props;
    return (
        <div className="home-page">
            <Helmet>
                <title>
                    {
                        global?.activeLanguage === "ar"
                            ? pressMetaData?.arabic?.meta_details?.meta_title
                            : pressMetaData?.meta_details?.meta_title
                    }
                </title>
                <meta
                    name="description"
                    content={global?.activeLanguage === "ar" ?
                        pressMetaData?.arabic?.meta_details
                            ?.meta_description
                        : pressMetaData?.meta_details
                            ?.meta_description
                    }
                />
            </Helmet>
            <Layout
                title="Orangetheory in the Press"
                // subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                bannerImg={pressBanner}
                btntext="Book your Free class!"
                freeform="freeclass"
            >
                {/* <AboutPress /> */}

                <PressGrid
                    language={global?.activeLanguage}
                    pressData={pressData}
                    isArabic={global?.activeLanguage === "ar"}
                />

                <CounterSection
                    title="Follow us on Social Media"
                    subtitle="Like and Follow Us to Stay up to Date with the Latest Events from our OTF Community."
                    btntext="BECOME A MEMBER TODAY"
                    bgImg={pressBg}
                    classname="press"
                    language={global?.activeLanguage}
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