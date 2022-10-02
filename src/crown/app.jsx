import { Route, Routes } from "react-router-dom";
import Home from "./route/home/home.component";
import Navigation from "./route/navigation/navigation.component";
import Shop from "./route/shop/shop.component";
import SignIn from "./route/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
