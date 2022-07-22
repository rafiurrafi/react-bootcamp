import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategoryMap = (action) =>
  createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, action);
