import React, { Component } from "react";
import { Suspense, lazy } from "react"; //added
import HomeHeader from "../sections/Home/HomeHeader";
import Curriculum from "../sections/Home/Curriculum";
// import Mentors from "../sections/Home/Mentors";
import CovidSafety from "../sections/Home/CovidSafety";
// import AgsSlider from "../sections/Home/AgsSlider";
import { API } from "../http/API";
import { connect } from "react-redux";
// import InfoTabs from "../sections/Home/InfoTabs";
import OurPrograms from "../sections/Home/OurPrograms";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants";
const InfoTabs = lazy(() => import("../sections/Home/InfoTabs"));
const Mentors = lazy(() => import("../sections/Home/Mentors"));
const AgsSlider = lazy(() => import("../sections/Home/AgsSlider"));

class Home extends Component {
  state = {
    mentorsData: [],
    expData: [],
    lifeagsData: [],
    currentPage: null,
    content: null,
  };

  componentDidMount() {
    let currentPage = null;
    API.get(`/pages`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          currentPage = response.data.data.find((x) => x.slug === "home-page");
          this.setState({ currentPage });
          API.get(`/all_sections/${currentPage._id}`)
            .then((response) => {
              if (response.data.data) {
                // debugger;
                this.setState({
                  content:
                    response.data.data[response.data.data?.length - 1]?.content,
                });
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));

    API.get("/mentors")
      .then((response) => {
        this.setState({ mentorsData: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });

    API.get("/exp_and_life")
      .then((response) => {
        this.setState({
          lifeagsData: response.data.data.filter(
            (x) => x.type === "life-at-ags"
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    API.get("/exp_and_life")
      .then((response) => {
        this.setState({
          expData: response.data.data.filter(
            (x) => x.type === "experience-with-ags"
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { content } = this.state;
    const { global } = this.props;
    return (
      <div className='home-page'>
        <Helmet>
          <title>
            {`AGS | ${
              global?.activeLanguage === "ar"
                ? content?.arabic?.meta_details?.title ||
                  constants?.site_content?.site_name
                : content?.meta_details?.title ||
                  constants?.site_content?.site_name
            }`}
          </title>
          {/* <title>
            {`{ this.state.currentPage?.meta_details?.title ||
              constants?.site_content?.site_name }`}
          </title> */}
          <meta
            name='description'
            content={
              global?.activeLanguage === "ar"
                ? content?.arabic?.meta_details?.description ||
                  constants?.site_content?.seo_description
                : content?.meta_details?.description ||
                  constants?.site_content?.seo_description
            }
          />
        </Helmet>
        <HomeHeader
          banner={
            global?.activeLanguage === "ar"
              ? content?.arabic?.banner
              : content?.banner
          }
          bannerImg={content?.banner?.image}
        />
        <Suspense fallback={<h2 className='text-center'>Loading...</h2>}>
          <InfoTabs
            expData={this.state.expData}
            isArabic={global?.activeLanguage === "ar"}
            language={global?.activeLanguage}
          />
        </Suspense>
        <Curriculum
          Curriculum={
            global?.activeLanguage === "ar"
              ? content?.arabic?.curriculmSection
              : content?.curriculmSection
          }
          language={global?.activeLanguage}
        />
        <Suspense fallback={<h2 className='text-center'>Loading...</h2>}>
          <Mentors
            mentors={this.state.mentorsData}
            isArabic={global?.activeLanguage === "ar"}
            language={global?.activeLanguage}
          />
        </Suspense>
        <OurPrograms language={global?.activeLanguage} />

        <Suspense fallback={<h2 className='text-center'>Loading...</h2>}>
          <AgsSlider
            lifeagsData={this.state.lifeagsData}
            isArabic={global?.activeLanguage === "ar"}
            language={global?.activeLanguage}
          />
        </Suspense>
        <CovidSafety
          Covid={
            global?.activeLanguage === "ar"
              ? content?.arabic?.covidSection
              : content?.covidSection
          }
        />
      </div>
    );
  }
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
