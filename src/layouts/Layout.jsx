import React from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Footer from "./Footer";
import Header from "./header";
import ClipLoader from "react-spinners/ClipLoader";
import BackToTop from "../components/BackToTop";
// import Contactpannel from "../sections/Contactpannel";
import { types } from "../redux/global/types";
import "./Layout.scss";
import { connect } from "react-redux";



function Layout(props) {

  const { global } = props;
  return (
    <div
      className={`layout ${global?.activeLanguage === "ar"
        ? "arabic-direction"
        : "english-direction"
        }`}>
      <div
        className={`${props.showSpinner ? "d-flex" : "d-none"
          } flex-column text-center align-items-center justify-content-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(255,255,255,0.6)",
        }}>
        <ClipLoader color={"#1a2c52e6"} loading={true} size={80} />
      </div>

      <Header className="gym nav-lg" />
      {/* <Navbar show={visible} toggleDrawer={(show) => toggleDrawer(show)} cssRoute={history.location.pathname} /> */}
      {/* <Contactpannel activeLanguage={global.activeLanguage} /> */}
      {props.children}
      <BackToTop />
      <Footer />
      {/* <BottomTabNavigator activeLanguage={global.activeLanguage} /> */}
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
    setActiveLanguage: (language) =>
      dispatch({
        type: types.SET_ACTIVE_LANGUAGE,
        payload: {
          language: language,
        },
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
