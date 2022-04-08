import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// crown start
// import "./crown/index.css";
// import App from "./crown/App";
// import { Provider } from "react-redux";
// import { store, persistor } from "./crown/redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// crown end
import PractiseApp from "./practise/practiseApp";
ReactDOM.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <PersistGate persistor={persistor}>
  //       <App />
  //     </PersistGate>
  //   </BrowserRouter>
  // </Provider>,
  <PractiseApp />,
  document.getElementById("root")
);
