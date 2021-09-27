import React from "react";
import Slide from "./slide";
import travells from "../service/travelService";

class SlideContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travells: [],
    };
  }
  componentDidMount() {
    this.setState({ travells });
  }
  render() {
    return (
      <div>
        {this.state.travells.map((travell) => (
          <Slide
            key={travell._id}
            heading={travell.heading}
            text={travell.text}
            imgSrc={travell.imageSrc}
          />
        ))}
      </div>
    );
  }
}

export default SlideContainer;
