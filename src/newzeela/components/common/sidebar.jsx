import React from "react";
import "../styles/sidebar.scss";
const Sidebar = ({ openSidebar, onOpenSidebar }) => {
  return (
    <div className={`sidebar ${openSidebar && "active"}`}>
      <button onClick={onOpenSidebar}>X</button>
      Helo
    </div>
  );
};

export default Sidebar;
