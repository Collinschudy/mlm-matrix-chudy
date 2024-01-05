import { ActionTypes } from "./calendarActType";

export const addEvent = (event) => ({
    type: ActionTypes.ADD_EVENT,
    payload: event,
  });
  
export const removeEvent = (eventId) => ({
    type: ActionTypes.REMOVE_EVENT,
    payload: eventId,
  });
  