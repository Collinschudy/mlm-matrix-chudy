import { combineReducers } from "redux";
import toggleReducer from "./navToggle/navToggleReducer";

export default combineReducers({
    toggleView: toggleReducer
})