import "./Products.scss";

import { Link, Route, useRouteMatch } from "react-router-dom";

import Product from "../product/Product";
import { products } from "../../data/products";

export default function Products() {
  const { url } = useRouteMatch();
  /* Create an array of `<li>` items for each product */
  const linkList = products.map((product) => {
    return (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });
  return (
    <div className="products">
      <div className="products-header">
        <h1>Products</h1>
        <ul>{linkList}</ul>
      </div>

      <Route path={`${url}/:productId`}>
        <Product data={products} />
      </Route>
      <Route exact path={url}>
        <p>Please select a product.</p>
      </Route>
    </div>
  );
}
