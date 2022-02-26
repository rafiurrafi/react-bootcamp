import React from "react";
import Sidebar from "./components/common/sidebar";
import HeaderBottom from "./components/headerBottom";
import HeaderMiddle from "./components/headerMiddle";
import HeaderTop from "./components/headerTop";
import useToggle from "./components/hooks/toggle";
import "./components/styles/newzeelaApp.scss";

// react icons

// link inspiration
// https://bytesed.com/tf/katerio/index-04.html
const NewzeelaApp = () => {
  const [openSidebar, setOpenSidebar] = useToggle(false);

  return (
    <div className="newzeela-app">
      <Sidebar openSidebar={openSidebar} onOpenSidebar={setOpenSidebar} />
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom onOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default NewzeelaApp;
