import { ActionTypes } from "./ActionType";

const INITIAL_STATE = {
    userTokenAndEmail: [],
    userData: null
}

const userTokenAndEmailReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.STORE_USER_TOKEN_EMAIL:
            return {
                ...state,
                userTokenAndEmail: action.payload
            }
        case ActionTypes.STORE_CURRENT_USER:
            return {
                ...state,
                userData: action.payload,
            }

        default:
            return state;
    }
}

export default userTokenAndEmailReducer;