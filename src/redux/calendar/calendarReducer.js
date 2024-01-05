import { ActionTypes } from "./calendarActType";

const initialState = {
    events: [
      { id: '5545', title: 'Collection of data', date: '2023-06-27' },
    ],
  };
  
  const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.ADD_EVENT:
        return {
          ...state,
          events: [...state.events, action.payload],
        };
      case ActionTypes.REMOVE_EVENT:
        return {
          ...state,
          events: state.events.filter((event) => event.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default calendarReducer;
  