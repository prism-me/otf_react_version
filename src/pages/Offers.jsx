import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { API } from "../http/API";
import { constants } from "../utils/constants";

import Offerbanner from "../sections/Offers/offerbanner"
import Plans from "../sections/Offers/plans"
import Coaching from "../sections/Offers/coaching"
import Workouteveryone from "../sections/Offers/workouteveryone"


const Offers = (props) => {

    useEffect(() => {
        getAllOffers();
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

    const { global } = props;
    return (
        <div>
            <Helmet>
                <title>
                    Offers
                </title>
                <meta
                    name="description"
                    content="Offers"
                />
            </Helmet>
            <Offerbanner
                language={global?.activeLanguage}
            />

            <Plans
                offersData={offersData}
                language={global?.activeLanguage}
                isArabic={global?.activeLanguage === "ar"}
            />

            <Coaching
                language={global?.activeLanguage}
            />

            <Workouteveryone
                language={global?.activeLanguage}
            />
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