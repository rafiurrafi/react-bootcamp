import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const CounterContext = createContext();
const CounterProvider = ({ step = 1, initialCount = 0, ...props }) => {
  const [state, dispatch] = useReducer(countReducer, { count: initialCount });
  const value = [state, dispatch];
  return <CounterContext.Provider value={value} {...props} />;
};

const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error(`useCounter must be used with in a counter provider`);
  return context;
};

const Counter = () => {
  const [state, dispatch] = useCounter();
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  return (
    <div>
      <div>Current Count: {state.count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};
const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

const countReducer = (state, action) => {
  const change = action.step;
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + change };
    }
    case "decrement": {
      return { ...state, count: state.count - change };
    }
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
};
