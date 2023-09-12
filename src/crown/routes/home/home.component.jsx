import Directory from "../../components/directory/directory.component";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Men",
    },
    {
      id: 2,
      name: "Women",
    },
    {
      id: 3,
      name: "Shirt",
    },
    {
      id: 4,
      name: "Pant",
    },
    {
      id: 5,
      name: "Sneaker",
    },
  ];
  return (
    <div>
      <h1>App</h1>
      <Directory data={data} />
    </div>
  );
};

export default Home;
