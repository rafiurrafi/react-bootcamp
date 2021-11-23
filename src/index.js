import ReactDOM from "react-dom";
// import App from "./app";
import { BrowserRouter } from "react-router-dom";
import BazaarApp from "./bazaar/bazaarApp";
// import IntensoApp from "./intenso/intensoApp";
// import PractiseApp from "./practise/practiseApp";
// import AmazonApp from "./amazon/amazonApp";
ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <AmazonApp /> */}
    {/* <PractiseApp /> */}
    <BazaarApp />
    {/* <IntensoApp /> */}
  </BrowserRouter>,
  // <BazaarApp />,
  document.querySelector("#root")
);
