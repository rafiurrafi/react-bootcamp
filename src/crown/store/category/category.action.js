import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.type";

export const fetchCategoryStart = () =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_ITEM);
export const fetchCategorySuccess = (categoriesMap) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_ITEM, categoriesMap);
export const fetchCategoryFailed = (error) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_ITEM, error);

export const fetchCategoryAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categoryMap = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategorySuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoryFailed(error));
  }
};
