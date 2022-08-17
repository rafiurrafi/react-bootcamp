import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAsync } from "./store/incrementReducer";

const PractiseApp = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isLoading = useSelector((state) => state.counter.isLoading);
  console.log(isLoading);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterAsync());
  };
  return (
    <div>
      <h3>Counter : {counter}</h3>
      <button onClick={handleIncrement}>
        {isLoading ? "Loading..." : "Inc"}{" "}
      </button>
    </div>
  );
};

export default PractiseApp;
