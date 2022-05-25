import { Fragment, useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {Object.keys(categoriesMap).map((title) => (
        <Fragment>
          <h2>{title}</h2>
          <div>
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
      {/* {products.map((product) => (
      ))} */}
    </div>
  );
};

export default Shop;
