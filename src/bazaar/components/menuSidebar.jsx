import React from "react";

import menuService from "../service/menuService";
import MenuSidebarItem from "./menuSidebarItem";
import "../styles/menuSidebar.scss";

class MenuSidebar extends React.Component {
  state = {
    menus: menuService,
  };

  render() {
    const { menus } = this.state;
    return (
      <aside className="section-menu__sidebar">
        <ul className="menu__sidebar">
          {menus.map((menu) => (
            <MenuSidebarItem menu={menu} />
          ))}
        </ul>
      </aside>
    );
  }
}

export default MenuSidebar;
