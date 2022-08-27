import { createStore } from "redux";
import thunk from "redux-thunk";

const QUOTE_REQUEST = "QUOTE_REQUEST";
const QUOTE_SUCCESS = "QUOTE_SUCCESS";
const QUOTE_FAILED = "QUOTE_FAILED";

function getQuoteActions() {
  return function (dispatch) {
    dispatch({ type: QUOTE_REQUEST });
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: QUOTE_SUCCESS, payload: data });
      })
      .catch((err) => dispatch({ type: QUOTE_FAILED, payload: err }));
  };
}

export const store = createStore();
