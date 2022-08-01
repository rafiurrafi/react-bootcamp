const INITIAL_VALUE = {
  posts: [],
};
export const postReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_POST_ITEM":
      return { ...state, ...payload };
    default:
      return state;
  }
};
