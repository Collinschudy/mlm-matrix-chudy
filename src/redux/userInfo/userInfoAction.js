import { ActionTypes } from "./ActionType";


export const setUserTokenAndEmail = (user) => ({
    type: ActionTypes.STORE_USER_TOKEN_EMAIL,
    payload: user
});

export const setCurrentUser = (currentUser) => ({
    type: ActionTypes.STORE_CURRENT_USER,
    payload: currentUser
});

export const setPaymentResponse = (response) => ({
    type: ActionTypes.STORE_PAYMENT_RESPONSE,
    payload: response
});

export const setUserTransactions = (transactions) => ({
    type:ActionTypes.STORE_USER_TRANSACTIONS,
    payload: transactions
});

export const setRecipientDetails = (details) => ({
    type:ActionTypes.STORE_RECIPIENT_DETAILS,
    payload: details
});

export const setTransferAccess = (details) => ({
    type:ActionTypes.STORE_TRANSFER_ACCESS,
    payload: details
})