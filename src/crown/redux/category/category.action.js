import { createAction } from "../../utils/firebase/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
export const setCategoriesMap = (categories) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, categories);
export const fetchCategoryStart = () =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START);
export const fetchCategorySuccess = (categories) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START);
export const fetchCategoryFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);
export const fetchCategoryAsync = async () => (dispatch) => {
  fetchCategoryStart();
  try {
    // const categoryMap = await getCategoriesAndDocuments();
    let categoryMap;
    fetchCategorySuccess(categoryMap);
  } catch (error) {
    fetchCategoryFailed(error);
  }
};
