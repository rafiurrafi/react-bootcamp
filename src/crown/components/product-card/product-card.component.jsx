const ProductCard = ({ imageUrl, price, name }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt="" />
      <p>{price}</p>
      <p>{name}</p>
    </div>
  );
};

export default ProductCard;
