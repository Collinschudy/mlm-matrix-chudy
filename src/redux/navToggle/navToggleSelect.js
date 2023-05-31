import { createSelector } from "reselect";

const selectToggle = state => state.toggleView;

export const selectToggleView = createSelector(
  [selectToggle],
  (toggle) => toggle.isToggle
)
