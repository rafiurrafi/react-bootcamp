import uuid from "uuid/v4";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as RiIcon from "react-icons/ri";
import * as GiIcon from "react-icons/gi";
const menuService = [
  {
    _id: uuid(),
    title: "Fruits & Vegetable",
    category: "fruits-veg",
    icon: <AiIcon.AiOutlineApple />,
    opened: <RiIcon.RiArrowDownSLine />,
    closed: <RiIcon.RiArrowUpSLine />,
    dropdown: [
      {
        _id: uuid(),
        title: "Fruits",
        category: "fruits",
      },
      {
        _id: uuid(),
        title: "Vegetables",
        category: "vegetables",
      },
    ],
  },
  {
    _id: uuid(),
    title: "Meal & Fish",
    category: "meal-fish",
    icon: <GiIcon.GiChickenLeg />,
    opened: <RiIcon.RiArrowDownSLine />,
    closed: <RiIcon.RiArrowUpSLine />,
    dropdown: [
      {
        _id: uuid(),
        title: "Meat",
        category: "Meat",
      },
      {
        _id: uuid(),
        title: "Fresh Fish",
        category: "fish",
      },
    ],
  },

  {
    _id: uuid(),
    title: "Fruits & Vegetable",
    category: "Snacks",
    icon: <FaIcon.FaAppleAlt />,
    opened: <RiIcon.RiArrowDownSLine />,
    closed: <RiIcon.RiArrowUpSLine />,
    dropdown: [
      {
        _id: uuid(),
        title: "Nuts &amp Biscuits",
        category: "nuts",
      },
      {
        _id: uuid(),
        title: "Chocolate",
        category: "chocolate",
      },
      {
        _id: uuid(),
        title: "Crips",
        category: "crips",
      },
      {
        _id: uuid(),
        title: "Noodles & Pasta",
        category: "noodles",
      },
      {
        _id: uuid(),
        title: "Sauce",
        category: "sauce",
      },
      {
        _id: uuid(),
        title: "Soup",
        category: "soup",
      },
    ],
  },
];
export default menuService;
