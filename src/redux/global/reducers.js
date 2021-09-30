import { types } from "./types";

let initialState = {
  showSpinner: false,
  activeLanguage: "en",
};
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SPINNER:
      return {
        ...state,
        showSpinner: true,
      };
    case types.HIDE_SPINNER:
      return {
        ...state,
        showSpinner: false,
      };
    case "SET_ACTIVE_LANGUAGE_SUCCESS":
      // debugger;
      return {
        ...state,
        activeLanguage: action.payload.language || "en",
      };
    default: {
      return state;
    }
  }
};
export default globalReducer;
