import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import Offerbanner from "../sections/Offers/offerbanner"
import Plans from "../sections/Offers/plans"
import Coaching from "../sections/Offers/coaching"
import Workouteveryone from "../sections/Offers/workouteveryone"


const Offers = (props) => {

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
            <Offerbanner />

            <Plans />

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