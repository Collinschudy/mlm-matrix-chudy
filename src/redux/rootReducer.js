import { combineReducers } from "redux";
import toggleReducer from "./navToggle/navToggleReducer";
import mobileReducer from './mobileToggle/mobileReducer';

export default combineReducers({
    toggleView: toggleReducer,
    mobileView: mobileReducer
})