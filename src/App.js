import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import BounceLoader from "react-spinners/BounceLoader";
import Layout from "./layouts/Layout";
import Navigation from "./navigator/Navigation";
import ScrollToTop from "./utils/ScrollToTop";
// import PopUp from "./components/Modals/popup/PopUp";
// import { connect } from "react-redux";


function App(props) {
  const [loader, setLoader] = useState(true);
  // const [modalShow, setModalShow] = useState(true);

  useEffect(() => {
    setLoader(false);
  });


  return (
    <BrowserRouter>
      {loader ? (
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "absolute",
            zIndex: 99999,
            height: "100%",
            width: "100%",
            background: "rgba(255,255,255,0.6)",
          }}>
          <BounceLoader color={"#1a2c52e6"} size={100} />
        </div>
      ) : (
        <>
          {/* <PopUp show={modalShow} onHide={() => setModalShow(false)}
            language={props.global?.activeLanguage}
          /> */}
          <ScrollToTop />
          <Layout>
            <Navigation />
          </Layout>
        </>
      )}
    </BrowserRouter>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     global: state.globalReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
export default App;
