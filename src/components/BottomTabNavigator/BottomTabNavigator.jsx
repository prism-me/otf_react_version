import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InputIcon from '@material-ui/icons/Input';
import { Link } from "react-router-dom";
import RoomIcon from '@material-ui/icons/Room';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-navigator-wrapper">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <Link to={`/${props.activeLanguage}/agsPortal`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <InputIcon className={props.activeLanguage === "en" ? "iconSize" : "iconSizeArabic"} />
            <span>
              {props.activeLanguage === "en" ? "AGS Portal" : "بوابة AGS"}
              {/* AGS Portal */}
            </span>
          </button>
        </Link>
        <Link to={`/${props.activeLanguage}/Enroll`}>
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <PersonAddIcon className={props.activeLanguage === "en" ? "iconSize" : "iconSizeArabic"} />
            <span>
              {props.activeLanguage === "en" ? "Enroll" : "سجل"}
              {/* ENROLL */}
            </span>
          </button>
        </Link>
        <a href="https://www.google.com/maps/place/American+Gulf+School/@25.3382268,55.5628731,17z/data=!3m1!4b1!4m5!3m4!1s0x3ef5f5ef006a4c83:0xcf95030e29d9fb7!8m2!3d25.3382268!4d55.5650618?shorturl=1" target="_blank">
          <button className={"BNButton d-flex justify-content-between align-items-center"}>
            <RoomIcon className={props.activeLanguage === "en" ? "iconSize" : "iconSizeArabic"} />
            <span>
              {props.activeLanguage === "en" ? "Location" : "موقعك"}
              {/* Location */}
            </span>
          </button>
        </a>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
