import "./Category.scss";

import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

export const Item = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default function Category() {
  const { url, path } = useRouteMatch();

  // console.log({ url, path });
  return (
    <div className="category">
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>

      <Route path={`${url}/:name`}>
        <Item />
      </Route>
    </div>
  );
}
