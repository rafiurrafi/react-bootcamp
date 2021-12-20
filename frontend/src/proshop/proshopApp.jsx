import React from "react";
import "./bootstrap.min.css";
import "./proshopApp.scss";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeScreen from "./components/screens/homeScreen";
import { Route, Switch } from "react-router-dom";
import ProductScreen from "./components/screens/productScreen";
// virkidukku@vusra.com
// vadija3004

// DB
// mannan
// mannan1234
const ProshopApp = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route
              path="/product/:id"
              render={(props) => <ProductScreen {...props} />}
            />
            <Route path="/" render={() => <HomeScreen />} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ProshopApp;
