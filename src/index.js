import ReactDOM from "react-dom";
// import App from "./app";
import { BrowserRouter } from "react-router-dom";
import AmazonApp from "./amazon/amazonApp";
ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <AmazonApp />
  </BrowserRouter>,
  document.querySelector("#root")
);
