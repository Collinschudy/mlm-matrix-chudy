import { ActionTypes } from "./ActionType";

const INITIAL_STATE = {
  userTokenAndEmail: [],
  userData: null,
  payment_response: null,
};

const userTokenAndEmailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.STORE_USER_TOKEN_EMAIL:
      return {
        ...state,
        userTokenAndEmail: action.payload,
      };
    case ActionTypes.STORE_CURRENT_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionTypes.STORE_PAYMENT_RESPONSE:
      return {
        ...state,
        payment_response: action.payload,
      };

    default:
      return state;
  }
};

export default userTokenAndEmailReducer;
