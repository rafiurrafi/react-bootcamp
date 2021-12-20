import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as RiIcon from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcon.AiFillHome />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpFill />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icon: <IoIcon.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/overview/revenue",
        icon: <IoIcon.IoIosPaper />,
      },
    ],
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <AiIcon.AiFillHome />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpFill />,
    subNav: [
      {
        title: "Reports new",
        path: "/overview/reportsn",
        icon: <IoIcon.IoIosPaper />,
      },
      {
        title: "Reports Extra",
        path: "/overview/reportsne",
        icon: <IoIcon.IoIosPaper />,
      },
    ],
  },
  {
    title: "Products",
    path: "/overview/products",
    icon: <FaIcon.FaCartPlus />,
  },
  {
    title: "Team",
    path: "/overview/team",
    icon: <IoIcon.IoMdPeople />,
  },
  {
    title: "Message",
    path: "/message",
    icon: <FaIcon.FaEnvelopeOpenText />,
    iconClosed: <RiIcon.RiArrowDownFill />,
    iconOpened: <RiIcon.RiArrowUpFill />,
    subNav: [
      {
        title: "Message 1",
        path: "/overview/message1",
        icon: <IoIcon.IoIosPaper />,
      },
      {
        title: "Message 2",
        path: "/overview/message2",
        icon: <IoIcon.IoIosPaper />,
      },
    ],
  },
];
