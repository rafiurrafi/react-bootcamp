import { POST_ACTION_TYPES } from "./post.types";

export const setPosts = (items) => ({
  type: POST_ACTION_TYPES.SET_POST_ITEM,
  payload: items,
});
