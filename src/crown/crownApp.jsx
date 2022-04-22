import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigatinon from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const CrownApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigatinon />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default CrownApp;
