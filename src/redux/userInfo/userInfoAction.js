import { ActionTypes } from "./ActionType";


export const setUserTokenAndEmail = (user) => ({
    type: ActionTypes.STORE_USER_TOKEN_EMAIL,
    payload: user
});

export const setCurrentUser = (currentUser) => ({
    type: ActionTypes.STORE_CURRENT_USER,
    payload: currentUser
});

export const setUserUpdated = (userUpdated) => ({
    type: ActionTypes.STORE_USER_UPDATED,
    payload: userUpdated
})
export const setPaymentResponse = (response) => ({
    type: ActionTypes.STORE_PAYMENT_RESPONSE,
    payload: response
});

export const setUserTransactions = (transactions) => ({
    type:ActionTypes.STORE_USER_TRANSACTIONS,
    payload: transactions
});

export const setUserWallet = (wallet) => ({
    type:ActionTypes.STORE_USER_WALLET,
    payload: wallet
});

export const setBankList = (list) => ({
    type:ActionTypes.STORE_BANK_LIST,
    payload: list
})

export const setUsersList = (list) => ({
    type:ActionTypes.STORE_USERS_LIST,
    payload: list
})

export const setUserMatrix = (list) => ({
    type:ActionTypes.STORE_USER_MATRIX,
    payload: list
})

export const setUsersWithdrawals = (list) => ({
    type:ActionTypes.STORE_USERS_WITHDRAWALS,
    payload: list
})

export const setUserCommissions = (list) => ({
    type:ActionTypes.STORE_USERS_COMMISSIONS,
    payload: list
})

export const setRecipientDetails = (details) => ({
    type:ActionTypes.STORE_RECIPIENT_DETAILS,
    payload: details
});

export const setTransferAccess = (details) => ({
    type:ActionTypes.STORE_TRANSFER_ACCESS,
    payload: details
})

export const setLogOut = () => ({
    type:ActionTypes.LOG_OUT,
   
})