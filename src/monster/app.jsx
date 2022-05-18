import Directory from "./directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 13,
      title: "Sneakers",
    },
    {
      id: 14,
      title: "Men",
    },
    {
      id: 145,
      title: "Women",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
