import React, { Component } from "react";
import Inclusion from "../sections/StudentCare/Inclusion";
import TabPanel from "../sections/StudentCare/Tabs/TabPanel";
import { API } from "../http/API";
import { connect } from "react-redux";
// import { Helmet } from "react-helmet";

class StudentCare extends Component {
    state = {
        stdData: []
    }

    componentDidMount() {
        API.get('/studentCare').then(response => {
            this.setState({ stdData: response.data.data });
        })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const { global } = this.props;
        return (
            <div className="home-page">
                <TabPanel />
                <Inclusion
                    studentCareData={this.state.stdData}
                    isArabic={
                        global?.activeLanguage === "ar"
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
    return {
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentCare);