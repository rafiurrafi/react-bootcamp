import React from "react";
import Sidebar from "./components/common/sidebar";
import HeaderBottom from "./components/headerBottom";
import HeaderMiddle from "./components/headerMiddle";
import HeaderTop from "./components/headerTop";
import useToggle from "./components/hooks/toggle";
import LeftNews from "./components/leftNews";
import MiddleNews from "./components/middleNews";
import RightNews from "./components/rightNews";
import SectionPopular from "./components/sectionPopular";

// scss importing
import "./components/styles/newzeelaApp.scss";
import "./components/styles/topNews.scss";

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
      <main>
        <section className="top-news" style={{ margin: "7rem 0 " }}>
          <LeftNews />
          <MiddleNews />
          <RightNews />
        </section>
        <SectionPopular />
      </main>
    </div>
  );
};

export default NewzeelaApp;
