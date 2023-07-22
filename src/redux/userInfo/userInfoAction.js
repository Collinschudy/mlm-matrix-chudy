import { ActionTypes } from "./ActionType";


export const setUserTokenAndEmail = (user) => ({
    type: ActionTypes.STORE_USER_TOKEN_EMAIL,
    payload: user
});

export const setCurrentUser = (currentUser) => ({
    type: ActionTypes.STORE_CURRENT_USER,
    payload: currentUser
});