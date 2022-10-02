import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    { id: 1, title: "men" },
    { id: 112, title: "Show" },
    { id: 121, title: "women" },
    { id: 132, title: "sneaker" },
    { id: 1112, title: "Bag" },
  ];
  return <Directory categories={categories} />;
};

export default Home;
