import React, { Component } from "react";
import { API } from "../http/API";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import OurTeam from "../sections/OurTeam"
import { constants } from "../utils/constants"

class Academics extends Component {
    state = {
        mentorsData: [],
    }

    componentDidMount() {
        API.get('/mentors').then(response => {
            this.setState({ mentorsData: response.data.data });
        })
            .catch(err => {
                console.log(err)
            })

    }
    render() {
        const { global } = this.props;
        return (
            <div className="home-page">
                <Helmet>
                    <title>
                        {constants?.site_content?.meta_team[global?.activeLanguage]}
                    </title>
                    <meta
                        name="description"
                        content={
                            constants?.site_content?.meta_team_description[global?.activeLanguage]
                        }
                    />
                </Helmet>
                <OurTeam
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
)(Academics);