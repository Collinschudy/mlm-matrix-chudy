import { createSelector } from "reselect";

const selectDetails = state => state.userTokenAndEmail;

export const selectUserTokenAndEmail = createSelector(
  [selectDetails],
  (tokenAndEmail) => tokenAndEmail?.userTokenAndEmail
)

export const selectCurrentUser = createSelector(
  [selectDetails],
  (user) => user?.userData
)

export const selectUserUpdated = createSelector(
  [selectDetails],
  (updated) => updated?.userUpdated
)

export const selectPaymentResponse = createSelector(
  [selectDetails],
  (response) => response?.paymentResponse
)

export const selectUserTransactions = createSelector(
  [selectDetails],
  (transactions) => transactions?.userTransactions
)

export const selectRecipientDetails = createSelector(
  [selectDetails],
  (details) => details?.recipientDetails
)

export const selectTransferAccess = createSelector(
  [selectDetails],
  (details) => details?.transferAccess
)

export const selectBankList = createSelector(
  [selectDetails],
  (list) => list.bankList
)


