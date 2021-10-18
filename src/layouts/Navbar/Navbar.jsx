import React, { useEffect, useReducer, useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import logo from "./../../assets/images/agslogo/Logo (2).png";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "../../http/API";
import { types } from "../../redux/global/types";
import { CgMenuLeftAlt } from "react-icons/cg";
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import logoSidebar from "./../../assets/images/agslogo/Logo.png";
import { connect } from "react-redux";

function MainNavbar(props) {
  const history = useHistory();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "340px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className={props.global.activeLanguage === "ar" ? "d-flex justify-content-start align-items-center" : "d-flex justify-content-end align-items-center"}
      >
        <span className="DrawerCloseIcon">
          <ClearIcon
            onClick={() => {
              toggleDrawer(false);
            }}
          />
        </span>
      </div>
      <div
        className={props.global.activeLanguage === "ar" ? "drawer-logo d-flex justify-content-end align-items-center" : "drawer-logo d-flex justify-content-start align-items-center"}
      >
        <img
          src={logoSidebar}
          alt="AGS Logo"
          className={props.global.activeLanguage === "ar" ? "drawerImageArabic" : "drawerImage"}
          onClick={() => {
            history.push("/");
            toggleDrawer(false);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className="ListStyle"
      >
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${props.global.activeLanguage}/about`);
              toggleDrawer(false);
            }}
            // primary="About us"
            primary={props.global.activeLanguage === "en" ? "About Us" : "معلومات عنا"}
            className={props.global.activeLanguage === "ar" ? "text-right" : ""}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${props.global.activeLanguage}/academics`);
              toggleDrawer(false);
            }}
            // primary="Academics"
            primary={props.global.activeLanguage === "en" ? "Academics" : "شؤون أكاديمية"}
            className={props.global.activeLanguage === "ar" ? "text-right" : ""}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${props.global.activeLanguage}/Student-care`);
              toggleDrawer(false);
            }}
            // primary="Student care"
            primary={props.global.activeLanguage === "en" ? "Student Care" : "رعاية الطلاب"}
            className={props.global.activeLanguage === "ar" ? "text-right" : ""}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${props.global.activeLanguage}/agsPortal`);
              toggleDrawer(false);
            }}
            // primary="AGS Portal"
            primary={props.global.activeLanguage === "en" ? "AGS Portal" : "بوابة المدرسة الأمريكية الخليجية"}
            className={props.global.activeLanguage === "ar" ? "text-right" : ""}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${props.global.activeLanguage}/contact`);
              toggleDrawer(false);
            }}
            // primary="Contact us"
            primary={props.global.activeLanguage === "en" ? "Contact Us" : "اتصل بنا"}
            className={props.global.activeLanguage === "ar" ? "text-right" : ""}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            onClick={() => {
              history.push(`/${props.global.activeLanguage}/Enroll`);
              toggleDrawer(false);
            }}
            // primary="Enroll"
            className={props.global.activeLanguage === "ar" ? "text-right" : ""}
          >
            <button style={{
              background: "#1A2C52",
              border: "none",
              color: "white",
              padding: "0.3rem 0rem",
              borderRadius: "60px",
              width: "43%"
            }}
            >
              {props.global.activeLanguage === "en" ? "Enroll" : "سجل"}
            </button>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div className="navbar-wrap">
        <Navbar
          collapseOnSelect
          expand="lg"
        >
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
              <img src={logo} alt="AGS-logo"
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
                {/* <Dropdown>
                  <Dropdown.Toggle
                    variant=" btn-sm"
                    id="dropdown-basic">
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
                </Dropdown> */}
              </div>
              <LinkContainer to={`/${props.global.activeLanguage}/Enroll`}>
                <button className={"enrollButton"}>
                  {props.global.activeLanguage === "en" ? "Enroll" : "سجل"}
                </button>
              </LinkContainer>
              <Hidden smDown>
                <div
                  // href="/"
                  // href={`/` || `/${props.global.activeLanguage}`}
                  style={{ cursor: "pointer" }}
                >
                  {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <MenuIcon
                        onClick={toggleDrawer(anchor, true)}
                        className={props.global.activeLanguage === "ar" ? "nav-toggle-overrideDesktopArabic" : "nav-toggle-overrideDesktop"}
                      />
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </Hidden>
            </Nav>
          </Navbar.Collapse>
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