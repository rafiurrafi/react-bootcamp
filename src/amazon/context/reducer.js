export const initialState = {
  basket: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return;
      break;
    default:
      return state;
  }
}
export default reducer;
