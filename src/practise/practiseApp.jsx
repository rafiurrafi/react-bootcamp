import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./store/actions";
const PractiseApp = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Practise App
      <button onClick={() => dispatch(addItem())}>Add to cart</button>
    </div>
  );
};

export default PractiseApp;
