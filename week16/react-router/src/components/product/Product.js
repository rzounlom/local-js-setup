import "./Product.scss";

import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));

  if (product) {
    return (
      <div className="product">
        <div className="product-img">
          <img src={product.imgUrl} alt="product" />
        </div>
        <div className="product-desc">
          <h3> Name: {product.name} </h3>
          <p>Description: {product.description}</p>
          <hr />
          <h4>Status: {product.status}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="product">
        <h2>Sorry! Couln't find your product</h2>
      </div>
    );
  }
};

export default Product;
