import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { API } from "../http/API";

import Offerbanner from "../sections/Offers/offerbanner"
import Plans from "../sections/Offers/plans"
import Coaching from "../sections/Offers/coaching"
import Workouteveryone from "../sections/Offers/workouteveryone"


const Offers = (props) => {

    useEffect(() => {
        getAllOffers();
        getAllLocations();
        getPagesData();
    }, []);

    // offers API 
    const [offersData, setOffersData] = useState([]);

    const getAllOffers = () => {
        API.get('/offers').then(response => {
            const alloffers = response.data?.data;
            setOffersData(alloffers);
        })
            .catch(err => {
                console.log(err)
            })
    }

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

    // offers page API
    const [offersMetaData, setOffersMetaData] = useState([]);

    const getPagesData = () => {
        API.get(`/pages`)
            .then((response) => {
                // debugger;
                if (response.status === 200 || response.status === 201) {
                    let currentPage = response.data.data.find(
                        (x) => x.slug === "offers"
                    );
                    setOffersMetaData(currentPage);
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
                            ? offersMetaData?.arabic?.meta_details?.meta_title
                            : offersMetaData?.meta_details?.meta_title
                    }
                </title>
                <meta
                    name="description"
                    content={global?.activeLanguage === "ar" ?
                        offersMetaData?.arabic?.meta_details
                            ?.meta_description
                        : offersMetaData?.meta_details
                            ?.meta_description
                    }
                />
            </Helmet>
            <Offerbanner
                language={global?.activeLanguage}
                offersData={offersData}
                locationsData={locationsData}
            />

            <Plans
                offersData={offersData}
                language={global?.activeLanguage}
                isArabic={global?.activeLanguage === "ar"}
                locationsData={locationsData}
            />

            <Coaching />

            <Workouteveryone />
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
)(Offers);