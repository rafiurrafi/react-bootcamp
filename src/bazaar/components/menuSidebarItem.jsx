import React from "react";
import { Link } from "react-router-dom";
class MenuSidebarItem extends React.Component {
  state = {
    dropdown: false,
  };
  handleDropdown = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };
  render() {
    const { menu } = this.props;
    const { dropdown } = this.state;
    return (
      <li key={menu._id} className="menu__sidebar-item">
        <div style={{ cursor: "pointer" }} onClick={this.handleDropdown}>
          <span>{menu.icon}</span> <span>{menu.title}</span>
          <span>{!dropdown ? menu.opened : menu.closed}</span>
        </div>
        <ul className={`menu__dropdown ${dropdown && "menu__dropdown--show"}`}>
          {menu.dropdown.map((item) => (
            <li key={item._id} className="menu__dropdownp-item">
              <Link to="/">{item.title}</Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default MenuSidebarItem;
