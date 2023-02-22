import "./App.scss";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Dashboard from "./features/dashboard/Dashboard";
import Home from "./features/home/Home";
import Login from "./features/auth/login/Login";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

export default function App() {
  const { isLoggedIn } = useSelector((state) => state.auth.currentEmployee);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Login />} />
          <Route
            path="/dashboard"
            render={() =>
              isLoggedIn ? <Dashboard /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </Router>
    </>
  );
}
