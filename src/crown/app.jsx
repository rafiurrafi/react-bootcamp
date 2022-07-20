import CategoryItem from "./components/category-item/category-item.component";
import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
    },
    {
      id: 2,
      title: "sneaker",
    },
    {
      id: 13,
      title: "jackets",
    },
    {
      id: 14,
      title: "men",
    },
    {
      id: 15,
      title: "women",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
