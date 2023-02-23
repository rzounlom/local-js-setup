import "./Login.scss";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { Button } from "antd";
import { EmployeesApi } from "../../../api/employeesApi";
import { Link } from "react-router-dom";
import { login } from "../authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const api = new EmployeesApi();

  const dispatch = useDispatch();
  const history = useHistory();

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginLoading, setLoginLoading] = useState(false);

  const { username, password } = loginData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    // console.log("USER LOGIN DATA: ", loginData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginLoading(true);

    try {
      const employees = await api.getAllEmplyees();

      const foundEmployee = employees.find(
        (employee) =>
          employee.userName === username && employee.password === password
      );

      if (!foundEmployee) {
        setLoginLoading(false);
        toast.error("Invalid username/password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      } else {
        setLoginLoading(false);
        dispatch(login(foundEmployee));
        setLoginData({
          username: "",
          password: "",
        });
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Soemthing went wrong! Please try again", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setLoginData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="login">
      <div className="login-heading">
        <h1>Login</h1>
        <Link to="/">
          <Button
            type="primary"
            style={{ background: "aqua" }}
            shape="round"
            icon={<ArrowLeftOutlined />}
            size="small"
          >
            Home
          </Button>
        </Link>
      </div>
      <form>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleInputChange}
          />
        </div>
        <Button
          loading={loginLoading}
          type="primary"
          style={{ background: "aqua" }}
          shape="round"
          icon={<ArrowRightOutlined />}
          size="small"
          disabled={!username || !password}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Login;
