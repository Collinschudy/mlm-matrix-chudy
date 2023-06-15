import { createSelector } from "reselect";

const selectMobile = state => state.mobileView;

export const selectMobileView = createSelector(
  [selectMobile],
  (mobile) => mobile.hidden
)
