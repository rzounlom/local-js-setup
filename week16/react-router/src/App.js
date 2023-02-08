import "./App.scss";

import { Route, Switch } from "react-router-dom";

import Admin from "./components/admin/Admin";
import Category from "./components/category/Category";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/nav/Navbar";
import PrivateRoute from "./components/private-route/PrivateRoute";
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
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
