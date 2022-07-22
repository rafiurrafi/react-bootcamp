import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_VALUE = {
  categoriesMap: {},
};
export const categoryReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
      return { ...state, ...payload };
    default:
      return state;
  }
};
