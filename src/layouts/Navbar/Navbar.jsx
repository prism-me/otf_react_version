import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav, Dropdown, Container } from "react-bootstrap";
import logo from "./../../assets/images/OTF/logo/ot_logo.png";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { types } from "../../redux/global/types";
import { CgMenuLeftAlt } from "react-icons/cg";
import { connect } from "react-redux";

function MainNavbar(props) {
  const history = useHistory();
  const [route_css, update_route] = useState();

  useEffect(() => {

    let route_mod = window.location.href;
    if (route_mod) {
      route_mod = route_mod.split("/")[4];
      if (route_mod === undefined || route_mod === "") {

        update_route("dropdown-basic");

      } else {
        update_route("dropdown-basic-arabic");
      }

    }

  }, [props.cssRoute]);


  useEffect(() => {
    // console.log()
    return history.listen((location) => {
      let route_mod = location.pathname;
      route_mod = route_mod.split("/")[2];

      if (route_mod === undefined || route_mod === "") {

        update_route("dropdown-basic");

      } else {
        update_route("dropdown-basic-arabic");
      }

    })
  }, [history])

  return (
    <>
      <div className="navbar-wrap">
        <Navbar
          collapseOnSelect
          expand="lg"
        >
          <Container>

            <Hidden mdUp>
              <Navbar.Brand>
                <CgMenuLeftAlt
                  onClick={() => props.toggleDrawer(true)}
                  className="nav-toggle-override"
                />
                <img
                  src={logo}
                  alt="AGS-logo"
                  onClick={() => history.push("/")}
                />
              </Navbar.Brand>
            </Hidden>
            <Hidden smDown>
              <Navbar.Brand
                // href="/"
                // href={`/` || `/${props.global.activeLanguage}`}
                style={{ cursor: "pointer" }}
              >
                <img src={logo} alt="OTF-logo"
                  onClick={() => history.push("/")}
                />
              </Navbar.Brand>
            </Hidden>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav
                className={props.global.activeLanguage === "ar" ? "mr-auto navborder" : "ml-auto navborder"}
              >
                <div
                  className={props.global.activeLanguage === "ar" ? "dropdown ml-2" : "dropdown mr-2"}
                >

                  <Dropdown>
                    <Dropdown.Toggle
                      variant=" btn-sm"
                      id={route_css}
                    >
                      {props.global.activeLanguage === "en" ? "Language" : "اللغة"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as="button"
                        className={props.global.activeLanguage === "en" ? "active" : ""}
                      >
                        <div onClick={() => {
                          props.setActiveLanguage("en");
                        }}>
                          {props.global.activeLanguage === "en" ? "English" : "English"}
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item as="button" className={props.global.activeLanguage === "ar" ? "active" : ""}>
                        <div onClick={() => {
                          props.setActiveLanguage("ar");
                        }}>
                          {props.global.activeLanguage === "en" ? "العربية" : "العربية"}
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <LinkContainer to={`/${props.global.activeLanguage}/Enroll`}>
                  <button className={"enrollButton"}>
                    {props.global.activeLanguage === "en" ? "Enroll" : "سجل"}
                  </button>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    global: state.globalReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () =>
      dispatch({
        type: "LOGOUT",
      }),
    setActiveLanguage: (language) =>
      dispatch({
        type: types.SET_ACTIVE_LANGUAGE,
        payload: {
          language: language,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);