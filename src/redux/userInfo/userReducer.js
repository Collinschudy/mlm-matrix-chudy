import { ActionTypes } from "./ActionType";

const INITIAL_STATE = {
  userTokenAndEmail: [],
  userData: null,
  paymentResponse: null,
  userTransactions: null,
  recipientDetails: null,
  transferAccess: null,
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
        paymentResponse: action.payload,
      };
    case ActionTypes.STORE_USER_TRANSACTIONS:
      return {
        ...state,
        userTransactions: action.payload,
      };
    case ActionTypes.STORE_RECIPIENT_DETAILS:
      return {
        ...state,
        recipientDetails: action.payload,
      };
      case ActionTypes.STORE_TRANSFER_ACCESS:
      return {
        ...state,
        transferAccess: action.payload,
      };

    default:
      return state;
  }
};

export default userTokenAndEmailReducer;
