import { ActionTypes } from "./toogleMobileAction";


const INITIAL_STATE = {
    hidden: false,
}

const mobileReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        
            case ActionTypes.MOBILE_VIEW:
                return {
                    ...state,
                    hidden: !state.hidden
                }

        default:
            return state;
    }
}

export default mobileReducer;