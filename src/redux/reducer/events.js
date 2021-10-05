import {
  CURRENT_USER_EVENTS_UPDATE,
  ALL_USERS_OF_THE_EVENT,
  CURRENT_LOOKING_EVENT_CHANGE,
  ALL_USERS_EVENTS_UPDATE,
} from "../constants";

const initialState = {
  currentUserEvents: null,
  allUsersOfRave: null,
  allUsersEvents: null,

  currentLookingEvent: null,
};

export const events = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER_EVENTS_UPDATE:
      return {
        ...state,
        currentUserEvents: action.currentUserEvents,
      };
    case ALL_USERS_OF_THE_EVENT:
      return {
        ...state,
        allUsersOfRave: action.allUsersOfRave,
      };
    case CURRENT_LOOKING_EVENT_CHANGE:
      return {
        ...state,
        currentLookingEvent: action.currentLookingEvent,
      };
    case ALL_USERS_EVENTS_UPDATE:
      return {
        ...state,
        allUsersEvents: action.allUsersEvents,
      };

    default:
      return state;
  }
};
