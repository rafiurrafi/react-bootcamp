import React from "react";
import { Link } from "react-router-dom";
class MenuSidebarItem extends React.Component {
  state = {
    dropdown: false,
  };
  handleDropdown = (category) => {
    this.setState({ dropdown: !this.state.dropdown });
    this.props.onSelectCategory(category);
  };
  render() {
    const { menu, onSelectCategory } = this.props;
    const { dropdown } = this.state;
    return (
      <li key={menu._id} className="menu__sidebar-item">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => this.handleDropdown(menu.category)}
        >
          <span>{menu.icon}</span> <span>{menu.title}</span>
          <span>{!dropdown ? menu.opened : menu.closed}</span>
        </div>
        <ul className={`menu__dropdown ${dropdown && "menu__dropdown--show"}`}>
          {menu.dropdown.map((item) => (
            <li
              key={item._id}
              className="menu__dropdownp-item"
              onClick={() => onSelectCategory(item.category)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default MenuSidebarItem;
