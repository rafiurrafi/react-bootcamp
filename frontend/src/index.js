import ReactDOM from "react-dom";
// import App from "./app";
import { BrowserRouter } from "react-router-dom";
// import BazaarApp from "./bazaar/bazaarApp";
// import NotificationApp from "./notifications/notificationApp";
// import SocialApp from "./social/socialApp";
// import ProshopApp from "./proshop/proshopApp";
// import IntensoApp from "./intenso/intensoApp";
import PractiseApp from "./practise/practiseApp";
// import AmazonApp from "./amazon/amazonApp";
ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <AmazonApp /> */}
    <PractiseApp />
    {/* <BazaarApp /> */}
    {/* <IntensoApp /> */}
    {/* <ProshopApp /> */}
    {/* <NotificationApp /> */}
    {/* <SocialApp /> */}
  </BrowserRouter>,
  // <BazaarApp />,
  document.querySelector("#root")
);
