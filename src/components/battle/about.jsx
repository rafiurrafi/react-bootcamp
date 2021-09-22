import React from "react";

class About extends React.Component {
  componentDidMount() {
    console.log("Component did mount - about");
  }
  componentWillUnmount() {
    console.log("Component will unmojnt");
  }
  render() {
    console.log("Render");
    return <div>About</div>;
  }
}

export default About;
