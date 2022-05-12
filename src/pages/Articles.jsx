import React from "react";
import AboutArticles from "../sections/Articles/aboutarticles";
import ArticlesGrid from "../sections/Articles/articlesgrid";
import CounterSection from "../sections/Home/counter";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from '../components/common-layout';

//images
// import articalBanner from "../assets/images/OTF/banner/articlesbanner.jpg";
import articalBg from "../assets/images/OTF/articles/articalbg.jpg";


const Articles = (props) => {

  const { global } = props;
  return (
    <div>
      <Helmet>
        <title>
          Articles
        </title>
        <meta
          name="description"
          content="Articles"
        />
      </Helmet>
      {/* <Layout
        title="Lorem ipsum"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        btntext="Lorem ipsum dolor"
        bannerImg={articalBanner}
      > */}
      <section className="pb-0 pt-5">
        <AboutArticles />
      </section>

      <ArticlesGrid
        language={global?.activeLanguage}
      />

      <CounterSection
        title="Get 10% off during this festive season!"
        // subtitle="Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa."
        btntext="BECOME A MEMBER TODAY"
        bgImg={articalBg}
      />

      {/* </Layout> */}
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
)(Articles);