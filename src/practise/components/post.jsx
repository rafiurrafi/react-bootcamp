import React from "react";

class Post extends React.Component {
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillUnmount() {
    console.log("Unmount");
  }
  render() {
    console.log("Render");
    return <div>Post {this.props.title}</div>;
  }
}

export default Post;
