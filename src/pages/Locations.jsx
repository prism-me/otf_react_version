import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Layout from '../components/common-layout'
import CalculateSection from "../sections/Home/calculate";
import { API } from "../http/API"

//images
import locationbanner from "../assets/images/OTF/banner/locationbanner.jpg";

const Locations = (props) => {

    // locations API 

    useEffect(() => {
        getAllLocations();
        getPagesData();
    }, []);

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

    // locations page API
    const [locationsMetaData, setLocationsMetaData] = useState([]);

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "locations"
                    );
                    setLocationsMetaData(currentPage);
                }
            })
            .catch((err) => console.log(err));
    }

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    {
                        global?.activeLanguage === "ar"
                            ? locationsMetaData?.arabic?.meta_details?.meta_title
                            : locationsMetaData?.meta_details?.meta_title
                    }
                </title>
                <meta
                    name="description"
                    content={global?.activeLanguage === "ar" ?
                        locationsMetaData?.arabic?.meta_details
                            ?.meta_description
                        : locationsMetaData?.meta_details
                            ?.meta_description
                    }
                />
            </Helmet>
            <Layout
                title="Find us near you!"
                // subtitle="Feugiat vulputate cursus sagittis pulvinar duis non magna cursus. Parturient donec vehicula neque, ut consectetur pretium. Velit et duis a purus vitae vivamus. Aliquet tellus est."
                // btntext="Book your session"
                bannerImg={locationbanner}
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