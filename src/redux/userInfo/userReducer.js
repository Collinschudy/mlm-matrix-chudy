import { ActionTypes } from "./ActionType";

const INITIAL_STATE = {
  userTokenAndEmail: [],
  userData: null,
  userProfile: null,
  userUpdated: null,
  recipientDetails: null,
  paymentResponse: null,
  userTransactions: null,
  transferAccess: null,
  bankList: null,
  usersList: null,
  userMatrix: null,
  usersWithdrawals: null,
  userCommissions: null,
  userWallet: null,
  resetToken: null,
  withdrawalHistory: null,
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
      case ActionTypes.STORE_USER_PROFILE:
        return {
          ...state,
          userProfile: action.payload,
        };
    case ActionTypes.STORE_USER_UPDATED:
      return {
        ...state,
        userUpdated: action.payload,
      };
    case ActionTypes.STORE_BANK_LIST:
      return {
        ...state,
        bankList: action.payload,
      };
    case ActionTypes.STORE_USERS_LIST:
      return {
        ...state,
        usersList: action.payload,
      };
    case ActionTypes.STORE_USER_MATRIX:
      return {
        ...state,
        userMatrix: action.payload,
      };
    case ActionTypes.STORE_USERS_WITHDRAWALS:
      return {
        ...state,
        usersWithdrawals: action.payload,
      };
      case ActionTypes.STORE_WITHDRAWAL_HISTORY:
        return {
          ...state,
          withdrawalHistory: action.payload,
        };
    case ActionTypes.STORE_USERS_COMMISSIONS:
      return {
        ...state,
        userCommissions: action.payload,
      };
    case ActionTypes.STORE_USER_WALLET:
      return {
        ...state,
        userWallet: action.payload,
      };
    case ActionTypes.STORE_RECIPIENT_DETAILS:
      return {
        ...state,
        recipientDetails: action.payload,
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

    case ActionTypes.STORE_TRANSFER_ACCESS:
      return {
        ...state,
        transferAccess: action.payload,
      };
      case ActionTypes.STORE_RESET_TOKEN:
      return {
        ...state,
        resetToken: action.payload,
      };
    case ActionTypes.LOG_OUT:
      return (state = null);

    default:
      return state;
  }
};

export default userTokenAndEmailReducer;
