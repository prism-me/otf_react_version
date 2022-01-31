import React, { Component } from "react";
import Jointeam from "../sections/Careers/Jointeam/Jointeam";
import Positions from "../sections/Careers/Positions/Positions";
import Ourteam from "../sections/Careers/Ourteam";
import ContentSection from "../sections/Careers/ContentSection/ContentSection";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { constants } from "../utils/constants"
import { API } from "../http/API";

class Careers extends Component {
  state = {
    mentorsData: [],
    careerData:[],
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
          (x) => x.slug === "career-page"
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

    API.get('/mentors').then(response => {
      this.setState({ mentorsData: response.data.data });
    })
      .catch(err => { console.log(err) })

    API.get('/career').then(response => {
      console.log("career :: ", response.data.data);
      this.setState({ careerData: response.data.data });
    })
      .catch(err => { console.log(err) })
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
          { 
            global?.activeLanguage === "ar"
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
        <Jointeam
          joinTeam={
            global?.activeLanguage === "ar"
              ? content?.arabic?.joinTeam
              : content?.joinTeam
          }
        />
        <Positions
          openPosition={
            global?.activeLanguage === "ar"
              ? content?.arabic?.openPosition
              : content?.openPosition
          }
          reading={
            global?.activeLanguage === "ar"
              ? content?.arabic?.position1
              : content?.position1
          }
          academic={
            global?.activeLanguage === "ar"
              ? content?.arabic?.position2
              : content?.position2
          }
          social={
            global?.activeLanguage === "ar"
              ? content?.arabic?.position3
              : content?.position3
          }
          language={global?.activeLanguage}
          careerData={this.state.careerData}
        />
        <ContentSection
          content={
            global?.activeLanguage === "ar"
              ? content?.arabic?.bottomSec
              : content?.bottomSec
          }
        />
        <Ourteam
          mentors={this.state.mentorsData}
          isArabic={global?.activeLanguage === "ar"}
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
)(Careers);