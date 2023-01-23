import React, { Component } from "react";

class BlogInformation extends Component {
  state = {};
  render() {
    return (
      <div className="blogInfo">
        <h3>Blog Author: {this.props.author}</h3>
        <h3>
          Article:{" "}
          {this.props.article ? this.props.article : "No articles written"}
        </h3>
      </div>
    );
  }
}

export default BlogInformation;
