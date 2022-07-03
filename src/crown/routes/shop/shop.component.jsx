import ProductCard from "../../components/product-card/product-card.component";
import SHOP_DATA from "../../shop_data.json";
const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      {SHOP_DATA.map(({ id, name, price, imageUrl }) => (
        <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Shop;
