const ProductCart = ({ imageUrl, price, name }) => {
  return (
    <div className="product-cart-container">
      <img src={imageUrl} alt="" />
      <h5>{name}</h5>
      <p>{price}</p>
    </div>
  );
};

export default ProductCart;
