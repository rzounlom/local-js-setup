import "./Home.scss";

import { Col, Row } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => (
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
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
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
          <Button
            type="primary"
            style={{ background: "aqua" }}
            shape="round"
            icon={<ArrowRightOutlined />}
            size="large"
          >
            Download
          </Button>
        </div>
      </div>
      <div className="home-img">
        <img src="/management.jpg" alt="management" />
      </div>
    </main>
  </div>
);
export default Home;
