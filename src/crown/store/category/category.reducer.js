import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_STATE = {
  categoriesMap: {},
};
export function categoriesReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_ITEMS:
      return { ...state, categoriesMap: payload };

    default:
      return state;
  }
}
