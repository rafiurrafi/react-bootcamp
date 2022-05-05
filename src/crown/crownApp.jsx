import Home from "./routes/home/home.component";    
import { Outlet, Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component"

const Shop = () => {
  return <h2>Shop</h2>
}


const CrownApp = () => {
 return (
  <Routes>
    <Route path="/" element = {<Navigation />}>
      <Route index element = {<Home />} />
      <Route path="shop" element = {<Shop />} />
    </Route>
  </Routes>
 )

};

export default CrownApp;
