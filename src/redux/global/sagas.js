import {
  put,
  takeLatest,
  select,
} from "redux-saga/effects";
// import { toast } from "react-toastify";
// import { types } from "./types";
// import * as service from "./service";
import { history } from "./../../history";
// import * as selectors from './selectors';

function* setActiveLanguage(action) {
  // debugger;
  try {
    yield put({
      type: "SET_ACTIVE_LANGUAGE_SUCCESS",
      payload: {
        language: action.payload.language,
      },
    });

    // let location = history.location.pathname.split("/");
    // debugger;
    if (window.location.pathname === "/") {
      // let location = window.location.pathname;
      let route = `/${action.payload.language}`;
      // console.log("route", route)
      // setTimeout(() => {
      //   window.location.reload();
      // }, 0);
      history.replace(route);
    } else {
      let location = window.location.pathname.split("/");

      // let route = `/${action.payload.language}/${location[2]}/${location[3]}/${location[4]}`;

      if (location[4]) {
        let route = `/${action.payload.language}/${location[2]}/${location[3]}/${location[4]}`
        history.replace(route);
      }
      else if (location[3]) {
        let route = `/${action.payload.language}/${location[2]}/${location[3]}`
        history.replace(route);
      }
      else if (location[2]) {
        let route = `/${action.payload.language}/${location[2]}`
        history.replace(route);
      }

      // if (
      //   route === `/${action.payload.language}/undefined`
      // ) {
      //   let route = `/${action.payload.language}`;
      //   // setTimeout(() => {
      //   //   window.location.reload();
      //   // }, 0);
      //   history.replace(route);
      // } else {
      //   // setTimeout(() => {
      //   //   window.location.reload();
      //   // }, 0);
      //
      //   history.replace(route);
      // }
    }

    // window.location = route;
  } catch (error) {
    console.log(error);
  }
}

export default function* globalWatcher() {
  yield takeLatest(
    "SET_ACTIVE_LANGUAGE",
    setActiveLanguage
  );
}
