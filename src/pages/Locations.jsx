import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from '../components/common-layout'
import CalculateSection from "../sections/Home/calculate";
import { API } from "../http/API"

//images
import bannerImage from "../assets/images/OTF/banner/locationbanner.jpg";

const Locations = (props) => {

    // locations API 
    const [locationsData, setLocationsData] = useState([]);

    const getAllLocations = () => {
        API.get('/locations').then(response => {
            const alllocations = response.data?.data;
            setLocationsData(alllocations);
        })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getAllLocations();
    }, []);

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Locations
                </title>
                <meta
                    name="description"
                    content="Location"
                />
            </Helmet>
            <Layout
                title="Find us near you!"
                // subtitle="Feugiat vulputate cursus sagittis pulvinar duis non magna cursus. Parturient donec vehicula neque, ut consectetur pretium. Velit et duis a purus vitae vivamus. Aliquet tellus est."
                // btntext="Book your session"
                bannerImg={bannerImage}
            >
                <CalculateSection
                    locationsData={locationsData}
                    language={global?.activeLanguage}
                    isArabic={global?.activeLanguage === "ar"}
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
)(Locations);