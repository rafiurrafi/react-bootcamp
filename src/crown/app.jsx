const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 11,
      title: "Sneaker",
    },
    {
      id: 1111,
      title: "Jackets",
    },
    {
      id: 111,
      title: "Men",
    },
    {
      id: 12,
      title: "Women",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container">
          <div className="category-image" />
          <div className="category-body-container">
            <h3>Hats</h3>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
