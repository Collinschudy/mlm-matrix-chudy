import { ActionTypes } from "./toggleActionType";

const INITIAL_STATE = {
    isToggle: false
}

const toggleReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_VIEW:
            return {
                ...state,
                isToggle: !state.isToggle
            }

        default:
            return state;
    }
}

export default toggleReducer;