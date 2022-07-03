const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
