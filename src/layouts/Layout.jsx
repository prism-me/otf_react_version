import React from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Footer from "./Footer";
import Header from "./header";
import BackToTop from "../components/BackToTop";
// import Contactpannel from "../sections/Contactpannel";
import { types } from "../redux/global/types";
import "./Layout.scss";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Layout(props) {
  const history = useHistory();

  const { global } = props;
  return (
    <div
      className={`layout ${global?.activeLanguage === "ar"
        ? "arabic-direction"
        : "english-direction"
        }`}>

      <Header className="gym nav-lg"
        activeLanguage={global.activeLanguage}
      />
      {/* <Navbar show={visible} toggleDrawer={(show) => toggleDrawer(show)} cssRoute={history.location.pathname} /> */}
      {/* <Contactpannel activeLanguage={global.activeLanguage} /> */}
      {props.children}
      <BackToTop />
      <Footer />
      <BottomTabNavigator activeLanguage={global.activeLanguage} />
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
