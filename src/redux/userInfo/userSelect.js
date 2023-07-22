import { createSelector } from "reselect";

const selectDetails = state => state.userTokenAndEmail;

export const selectUserTokenAndEmail = createSelector(
  [selectDetails],
  (tokenAndEmail) => tokenAndEmail.userTokenAndEmail
)

export const selectCurrentUser = createSelector(
  [selectDetails],
  (user) => user.userData
)
