import "./Product.scss";

import { useParams } from "react-router-dom";

const Product = ({ data }) => {
  const { productId } = useParams();
  const product = data.find((p) => p.id === Number(productId));
  let productData;

  if (product) {
    productData = (
      <div>
        <h3> Name: {product.name} </h3>
        <p>Description: {product.description}</p>
        <hr />
        <h4>Status: {product.status}</h4>
      </div>
    );
  } else {
    productData = <h2> Sorry. Product doesn't exist </h2>;
  }

  return (
    <div className="product">
      <div>{productData}</div>
    </div>
  );
};

export default Product;
