import { CATEGORY_ACTION_TYPES } from "./category.types";

const INITIAL_VALUE = {
  categoryMap: {},
};
export function categoryReducer(state = INITIAL_VALUE, action) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_ACTION:
      return { ...state, payload };

    default:
      return state;
  }
}
