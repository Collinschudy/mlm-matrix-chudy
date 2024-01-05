import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import toggleReducer from "./navToggle/navToggleReducer";
import mobileReducer from './mobileToggle/mobileReducer';
import userTokenAndEmailReducer from "./userInfo/userReducer";
import calendarReducer from "./calendar/calendarReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userTokenAndEmail']
}
const rootReducer = combineReducers({
    toggleView: toggleReducer,
    mobileView: mobileReducer,
    userTokenAndEmail: userTokenAndEmailReducer,
    calendar: calendarReducer,
})

export default persistReducer(persistConfig, rootReducer);