import uuid from "uuid/v4";
const products = [
  {
    id: uuid(),
    name: "apples",
    img: "/img/fruites/Apples.jpg",
    stock: 10,
    price: 1.99,
    offer: 20,
    category: "fruits",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "orange",
    img: "/img/fruites/BabySpinach.jpg",
    stock: 10,
    price: 9.09,
    category: "vegetables",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "blackberries",
    img: "/img/fruites/beef.jpg",
    stock: 10,
    price: 2.03,
    category: "fruits",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "jackfruits",
    img: "/img/fruites/BrusselsSprouts.jpg",
    stock: 10,
    price: 3.01,
    offer: 15,
    category: "vegetables",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "pineapples",
    img: "/img/fruites/CelerySticks.jpg",
    stock: 10,
    price: 1.05,
    category: "fruits",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "Baby Spinach",
    img: "/img/fruites/CelerySticks.jpg",
    stock: 10,
    price: 7.16,
    category: "vegetables",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "Celery Stick",
    img: "/img/fruites/chicken_brest_ribcxo.jpg",
    stock: 10,
    price: 3.99,
    category: "fruits",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
  {
    id: uuid(),
    name: "Clementines",
    img: "/img/fruites/chicken_thigh.jpg",
    stock: 10,
    price: 4.59,
    offer: 10,
    category: "vegetables",
    shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    description:
      "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
  },
];
export default products;
