import Directory from "../../components/directory/directory.component";
const Home = () => {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Show" },
    { id: 3, title: "Sneaker" },
    { id: 4, title: "Men" },
    { id: 5, title: "Women" },
  ];
  return <Directory categories={categories} />;
};

export default Home;
