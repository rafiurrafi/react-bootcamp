import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoryStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);

export const fetchCategorySuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categoriesArr);

export const fetchCategoryFailed = (err) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, err);

export const fetchCategoryAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categories = await getCategoriesAndDocuments();
    dispatch(fetchCategorySuccess(categories));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};
