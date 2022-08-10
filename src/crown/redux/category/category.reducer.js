import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: false,
};
export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categoriesMap: payload };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
