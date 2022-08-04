import { CATEGORY_ACTION_TYPES } from "./category.type";

const INITIAL_STATE = {
  isLoading: false,
  categoryMap: [],
  error: null,
};
export const categoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_START:
      return { ...state, isLoading: true };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, categoryMap: payload };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORY_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
