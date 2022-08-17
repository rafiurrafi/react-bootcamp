const initial_state = {
  counter: 0,
  isLoading: false,
};
export const INCREMENT = "increment";
export const INCREMENT_START = "INCREMENT_START";
export const setCounter = () => ({ type: INCREMENT });
export const startLoading = () => ({ type: INCREMENT_START });
export const counterReducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT_START:
      return { ...state, isLoading: true };
    case INCREMENT:
      return { ...state, counter: state.counter + 1, isLoading: false };
    default:
      return state;
  }
};
export const counterAsync = () => (dispatch) => {
  startLoading();
  setTimeout(() => {
    dispatch(setCounter());
  }, 1000);
};
