import ReactDOM from "react-dom";
// import App from "./app";
import { BrowserRouter } from "react-router-dom";
import PractiseApp from "./practise/practiseApp";
import AmazonApp from "./amazon/amazonApp";
ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <AmazonApp /> */}
    <PractiseApp />
  </BrowserRouter>,
  document.querySelector("#root")
);
