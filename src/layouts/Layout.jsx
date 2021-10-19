import React, { useEffect, useState } from "react";
import BottomTabNavigator from "../components/BottomTabNavigator";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import logo from "../assets/images/agslogo/Logo.png";
import {
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/BounceLoader";
import BackToTop from "../components/BackToTop";
import Contactpannel from "../sections/Contactpannel";
import ClearIcon from '@material-ui/icons/Clear';
import { types } from "../redux/global/types";
import "./Layout.scss";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";


const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  nested: { paddingLeft: theme.spacing(4) }
}));

function Layout(props) {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const { global } = props;
  return (
    <div
      className={`layout ${global?.activeLanguage === "ar"
        ? "arabic-direction"
        : "english-direction"
        }`}
    >
      <div
        className={`${props.showSpinner ? "d-flex" : "d-none"
          } flex-column text-center align-items-center justify-content-center`}
        style={{
          position: "absolute",
          zIndex: 99999,
          height: "100%",
          width: "100%",
          background: "rgba(255,255,255,0.6)",
        }}
      >
        <ClipLoader color={"#1a2c52e6"} loading={true} size={80} />
      </div>

      <Hidden mdUp>
        <nav className={classes.drawer}>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor={"left"}
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <div className="d-flex justify-content-end align-items-center">
              <span className="DrawerCloseIcon">
                <ClearIcon
                  onClick={() => {
                    toggleDrawer(false);
                  }}
                />
              </span>
            </div>
            <div className="drawer-menu">
              <div className="drawer-logo d-flex justify-content-center align-items-center">
                <img
                  src={logo}
                  alt="AGS Logo"
                  onClick={() => {
                    history.push("/");
                    toggleDrawer(false);
                  }}
                />
              </div>
              <List
                component="nav"
                aria-label="main mailbox folders"
                className="ListStyle"
              >
                <ListItem button
                  selected={true}
                >
                  <ListItemText
                    onClick={() => {
                      history.push(`/${global.activeLanguage}/about`);
                      toggleDrawer(false);
                    }}
                    // primary="About us"
                    primary={global.activeLanguage === "en" ? "About Us" : "معلومات عنا"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/${global.activeLanguage}/academics`);
                      toggleDrawer(false);
                    }}
                    // primary="Academics"
                    primary={global.activeLanguage === "en" ? "Academics" : "شؤون أكاديمية"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/${global.activeLanguage}/Student-care`);
                      toggleDrawer(false);
                    }}
                    // primary="Student care"
                    primary={global.activeLanguage === "en" ? "Student Care" : "رعاية الطلاب"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/${global.activeLanguage}/agsPortal`);
                      toggleDrawer(false);
                    }}
                    // primary="AGS Portal"
                    primary={global.activeLanguage === "en" ? "AGS Portal" : "بوابة المدرسة الأمريكية الخليجية"}
                  />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/${global.activeLanguage}/contact`);
                      toggleDrawer(false);
                    }}
                    // primary="Contact us"
                    primary={global.activeLanguage === "en" ? "Contact Us" : "اتصل بنا"}
                  />
                </ListItem>
                <ListItem button>
                  <div
                    className={props.global.activeLanguage === "ar" ? "dropdown ml-2" : "dropdown mr-2"}
                  >
                    <Dropdown>
                      <Dropdown.Toggle
                        variant=" btn-md"
                        id="dropdown-basic"
                        style={{ fontSize: "1.1rem", padding: "0", color: "#1A2C52" }}
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
                        <Dropdown.Item as="button"
                          className={props.global.activeLanguage === "ar" ? "active" : ""}>
                          <div onClick={() => {
                            props.setActiveLanguage("ar");
                          }}
                          >
                            {props.global.activeLanguage === "en" ? "العربية" : "العربية"}
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </ListItem>
                <ListItem button>
                  <ListItemText
                    onClick={() => {
                      history.push(`/${global.activeLanguage}/Enroll`);
                      toggleDrawer(false);
                    }}
                  // primary="Enroll"
                  >
                    <button style={{
                      background: "#1A2C52",
                      border: "none",
                      color: "white",
                      padding: "0.5rem 0rem",
                      borderRadius: "60px",
                      width: "100%"
                    }}>
                      {global.activeLanguage === "en" ? "Enroll" : "سجل"}
                    </button>
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </nav>
      </Hidden>

      <Navbar
        show={visible}
        toggleDrawer={(show) => toggleDrawer(show)}
      />
      <Contactpannel
        activeLanguage={global.activeLanguage}
      />
      {props.children}
      <BackToTop />
      <Footer />
      <BottomTabNavigator
        activeLanguage={global.activeLanguage}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  {
    console.log("spinner", state?.globalReducer?.showSpinner)
  }
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