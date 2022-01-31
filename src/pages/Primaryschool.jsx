import React, { Component } from "react";
import Schoolinclusion from "../sections/Primaryschool/Inclusion/Schoolinclusion";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"

class Primaryschool extends Component {
  state = {
    currentPage: null,
    content: null,
  }

  componentDidMount() {
    let currentPage = null;
    API.get(`/pages`).then((response) => {
      if (
        response.status === 200 ||
        response.status === 201
      ) {
        currentPage = response.data.data.find(
          (x) => x.slug === "primary-page"
        );
        this.setState({ currentPage });
        API.get(`/all_sections/${currentPage._id}`)
          .then(
            (response) => {
              if (response.data.data) {
                // debugger;
                this.setState({
                  content:
                    response.data.data[
                      response.data.data?.length - 1
                    ]?.content,
                });
              }
            }
          )
          .catch((err) => console.log(err));
      }
    })
      .catch((err) => console.log(err));
  }
  render() {
    const {
      content
    } = this.state;
    const { global } = this.props;
    return (
      <div className="home-page">
        <Helmet>
          <title>
            {global?.activeLanguage === "ar"
              ? content?.arabic?.meta_details?.title 
              : content?.meta_details?.title 
              }
          </title>
          <meta
            name="description"
            content={global?.activeLanguage === "ar" ?
              content?.arabic?.meta_details
                ?.description || constants?.site_content?.seo_description
              : content?.meta_details
                ?.description || constants?.site_content?.seo_description
            }
          />
        </Helmet>
        <Schoolinclusion
          secOne={
            global?.activeLanguage === "ar"
              ? content?.arabic?.section1
              : content?.section1
          }
          secOneVideo={content?.section1}
          secTwo={
            global?.activeLanguage === "ar"
              ? content?.arabic?.section2
              : content?.section2
          }
          secThree={
            global?.activeLanguage === "ar"
              ? content?.arabic?.section3
              : content?.section3
          }
          secFour={
            global?.activeLanguage === "ar"
              ? content?.arabic?.section4
              : content?.section4
          }
          secFive={
            global?.activeLanguage === "ar"
              ? content?.arabic?.section5
              : content?.section5
          }
          language={global?.activeLanguage}
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
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Primaryschool);