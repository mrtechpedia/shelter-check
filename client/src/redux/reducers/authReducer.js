import {
  SIGNUP_USER,
  LOGIN_USER,
  GOOGLE_USER,
  LOGOUT_USER,
  SIGNUP_PROFESSIONAL,
} from "../actions/types";

const initialState = { user: null, msg: null };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return action.payload || false;
    case LOGIN_USER:
      return action.payload || false;
    case GOOGLE_USER:
      return action.payload || false;
    case SIGNUP_PROFESSIONAL:
      return action.payload || false;
    case LOGOUT_USER:
      return initialState || false;
    default:
      return state;
  }
}
