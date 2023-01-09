import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategoriesMap = (payload) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_ACTION, payload);
};
