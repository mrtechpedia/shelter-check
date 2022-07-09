import axios from "axios";
import {
  SIGNUP_USER,
  LOGIN_USER,
  GOOGLE_USER,
  LOGOUT_USER,
  SIGNUP_PROFESSIONAL,
} from "./types";

export const signupUser = (newUser) => async (dispatch) => {
  const res = await axios.post("/api/register", newUser);
  dispatch({ type: SIGNUP_USER, payload: res.data });
};

export const loginUser = (existingUser) => async (dispatch) => {
  const res = await axios.post("/api/login", existingUser);
  dispatch({ type: LOGIN_USER, payload: res.data });
};

export const googleUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: GOOGLE_USER, payload: res.data });
};

export const signupProfessional = (newProfessional) => async (dispatch) => {
  const res = await axios.post("/api/professional", newProfessional);
  dispatch({ type: SIGNUP_PROFESSIONAL, payload: res.data });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};
