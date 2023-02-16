import "./Login.scss";

import { Button, Form, Input } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    console.log("USER LOGIN DATA: ", loginData);
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
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: "aqua" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
