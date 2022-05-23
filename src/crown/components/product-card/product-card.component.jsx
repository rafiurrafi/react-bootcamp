const ProductCard = ({ product: { imageUrl, price, name } }) => {
  //   console.log(props);
  return (
    <div className="product-card">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
