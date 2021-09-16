import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
    };
    this.changePage = this.changePage.bind(this);
  }
  changePage(page) {
    console.log(page);
    this.setState({ page: page });
  }
  renderPage() {
    const { page } = this.state;
    if (page === "home") return <Home />;
    else if (page === "about") return <About />;
    else return <Contact />;
  }
  render() {
    return (
      <div>
        <Header page={this.state.page} onChangePage={this.changePage} />{" "}
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
