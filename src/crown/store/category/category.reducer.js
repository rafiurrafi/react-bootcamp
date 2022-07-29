import { CATEGORY_ACTION_TYPES } from "./category.types";

const initial_value = {
  categoryMap: {},
};
export const categoryReducer = (state = initial_value, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
      return { ...state, ...payload };

    default:
      return state;
  }
};
