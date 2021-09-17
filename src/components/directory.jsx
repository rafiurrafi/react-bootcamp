import React, { Component } from "react";
import MenuItem from "./menuItem";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 2,
          title: "Men",
          image:
            "https://media.istockphoto.com/photos/young-man-shopping-online-picture-id1305615921?b=1&k=20&m=1305615921&s=170667a&w=0&h=nQ1qcUP8MBo5OkghDXZb_nDKgJmxjK7VkAJ4yb0n4-M=",
        },
        {
          id: 3,
          title: "Sneaker",
          image:
            "https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA=",
        },
        {
          id: 4,
          title: "Jackets",
          image:
            "https://media.istockphoto.com/photos/satisfied-with-her-shopping-picture-id532392166?b=1&k=20&m=532392166&s=170667a&w=0&h=OqvOBgAIQsR3CCFRwldQIDl96Eywx7cfCfpVSmwcaV4=",
        },
        {
          id: 5,
          title: "Jeans",
          image:
            "https://media.istockphoto.com/photos/window-shopping-picture-id867339374?b=1&k=20&m=867339374&s=170667a&w=0&h=lEcd6S1DMOe7FAfIhM-WQG2mKk6MqVEpxfHhfglaDUU=",
        },
        {
          id: 1,
          title: "Women",
          image:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            image={section.image}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
