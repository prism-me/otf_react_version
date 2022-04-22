import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import Jointeam from "../sections/Careers/Jointeam/Jointeam";
import CareersGrid from "../sections/Careers/careerGrid/careergrid";
import Layout from '../components/common-layout';

//images
import aboutBanner from "../assets/images/OTF/banner/aboutbanner.jpg";

const Careers = (props) => {

  const { global } = props;
  return (
    <div>
      <Helmet>
        <title>
          Careers
        </title>
        <meta
          name="description"
          content="Careers"
        />
      </Helmet>
      <Layout
        title="Lorem ipsum"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        btntext="Lorem ipsum dolor"
        bannerImg={aboutBanner}
      >

        <Jointeam />

        <CareersGrid />

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
)(Careers);