import { CATEGORIES_ACTION_TYPES } from "./category.type";

const initial_state = {
  categoriesMap: {},
};
export const categoriesReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORY_ITEM:
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
};
