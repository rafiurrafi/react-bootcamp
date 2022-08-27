import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const setCategoriesMap = (payload) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORY_ITEM, payload);
