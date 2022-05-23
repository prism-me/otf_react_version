import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import ApplyNow from '../Modals/ApplyNow/ApplyNow';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

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
        <Link to={`/${props.activeLanguage}/memberships`}>
          <button className={"BNButton"}>
            Memberships
          </button>
        </Link>
        <Link to={`/${props.activeLanguage}/locations`}>
          <button className={"BNButton"}>
            Locations
          </button>
        </Link>
        <button className={"BNButton"}
          onClick={() => setShowModal(true)}
        >Book a Free Class!</button>
        <ApplyNow
          show={showModal} onHide={() => setShowModal(false)}
          title={"Free Class"}
          language={props.activeLanguage}
        />
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
