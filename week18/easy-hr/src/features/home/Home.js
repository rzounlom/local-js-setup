import "./Home.scss";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { logout } from "../auth/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth.currentEmployee);

  return (
    <div className="home">
      <header>
        <Link className="logo" to="/">
          EasyHR
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {!isLoggedIn ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : null}
            {isLoggedIn ? (
              <li>
                <Link to="/" onClick={() => dispatch(logout())}>
                  Logout
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </header>
      <main>
        <div className="description">
          <div className="description-heading">
            <p>
              Welcome to <span>EasyHr.</span> <br />
              Your Employee Management System
            </p>
          </div>
          <div className="description-text">
            <p>Easily manage your employees without all the hastle</p>
          </div>
          <div className="description-action">
            <Link to="/dashboard">
              <Button
                type="primary"
                style={{ background: "aqua" }}
                shape="round"
                icon={<ArrowRightOutlined />}
                size="large"
              >
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
        <div className="home-img">
          <img src="/management.jpg" alt="management" />
        </div>
      </main>
    </div>
  );
};
export default Home;
