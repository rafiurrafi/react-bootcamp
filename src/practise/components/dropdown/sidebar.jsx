import React from "react";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";

const Sidebar = (props) => {
  return (
    <div>
      <Link to="">
        <FaIcon.FaBars />
      </Link>
    </div>
  );
};

export default Sidebar;
