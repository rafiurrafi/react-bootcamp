import { useContext } from "react";
import { ProductContext } from "../../context/products.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  function addToCart() {
    console.log(products);
  }
  return (
    <div>
      <h1>Shop</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "1rem",
        }}
      >
        {products.map((product) => (
          <div>
            <img src={product.imageUrl} style={{ width: "100%" }} />
            <h4>
              {product.name} - {product.price}
            </h4>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
