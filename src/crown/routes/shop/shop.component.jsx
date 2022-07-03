import SHOP_DATA from "../../shop_data.json";
const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      {SHOP_DATA.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Shop;
