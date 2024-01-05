import { createSelector } from "reselect";

const selectCalendar = state => state.calendar;


export const selectAdminCalendar = createSelector(
    [selectCalendar],
    (calendar) => calendar?.events
  )