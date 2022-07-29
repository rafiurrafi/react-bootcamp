import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
export const fetchUserState = () =>
  createAction(USER_ACTION_TYPES.FETCH_USER_START);
export const fetchUserSuccess = (categories) =>
  createAction(USER_ACTION_TYPES.FETCH_USER_SUCCESS, categories);
export const fetchUserFailed = (err) =>
  createAction(USER_ACTION_TYPES.FETCH_USER_FAILED, err);
export const fetchUserAsync = () => async (dispatch) => {
  dispatch(fetchUserState());
  try {
    dispatch(fetchUserSuccess());
  } catch (error) {}
};
