import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ClassSchedule from "../sections/Home/classSchedule";
import Layout from "../components/common-layout";
import { API } from "../http/API";

const OurSchedule = (props) => {
  useEffect(() => {
    getPagesData();
  }, []);

  // class schedule page API
  const [content, setContent] = useState([]);
  const [scheduleMetaData, setScheduleMetaData] = useState([]);

  const getPagesData = () => {
    API.get(`/pages`)
      .then((response) => {
        // debugger;
        if (response.status === 200 || response.status === 201) {
          let currentPage = response.data.data.find(
            (x) => x.slug === "class-schedule"
          );
          setScheduleMetaData(currentPage);
          API.get(`/all-sections/${currentPage._id}`).then((response) => {
            setContent(
              response.data?.data[response.data.data?.length - 1]?.content
            );
          });
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
            ? scheduleMetaData?.arabic?.meta_details?.meta_title
            : scheduleMetaData?.meta_details?.meta_title}
        </title>
        <meta
          name="description"
          content={
            global?.activeLanguage === "ar"
              ? scheduleMetaData?.arabic?.meta_details?.meta_description
              : scheduleMetaData?.meta_details?.meta_description
          }
        />
      </Helmet>
      <Layout
        title={
          global?.activeLanguage === "ar"
            ? content?.arabic?.banner?.title
            : content?.banner?.title
        }
        subtitle={
          global?.activeLanguage === "ar"
            ? content?.arabic?.banner?.subtitle
            : content?.banner?.subtitle
        }
        btntext="Book your Free class!"
        freeform="freeclass"
        bannerImg={content?.banner?.banner_image}
        language={global?.activeLanguage}
      >
        <section className="pt-0">
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
        </section>
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
export default connect(mapStateToProps, mapDispatchToProps)(OurSchedule);
