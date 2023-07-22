import { combineReducers } from "redux";
import toggleReducer from "./navToggle/navToggleReducer";
import mobileReducer from './mobileToggle/mobileReducer';
import userTokenAndEmailReducer from "./userInfo/userReducer";

export default combineReducers({
    toggleView: toggleReducer,
    mobileView: mobileReducer,
    userTokenAndEmail: userTokenAndEmailReducer,
})