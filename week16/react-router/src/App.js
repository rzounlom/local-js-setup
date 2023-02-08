import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Category from "./components/category/Category";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div>
      <Navbar />
      {/* Route components are rendered if the path prop matches the current URL */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
