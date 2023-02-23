import { Button, Descriptions } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ArrowRightOutlined } from "@ant-design/icons";
import { EmployeesApi } from "../../api/employeesApi";
import { fetchEmployees } from "./dashboardSlice";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function AddEmployee() {
  const { profile } = useSelector((state) => state.auth.currentEmployee);

  const inputStyle = {
    borderRadius: "12px",
    border: "1px solid lightgrey",
    height: " 30px",
    padding: "0px 3%",
    outline: "1px solid aqua",
    maxWidth: "200px",
  };

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const api = new EmployeesApi();
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
    status: "",
    title: "",
    userName: "",
    password: "",
    salary: "",
    address: "",
  });

  const {
    firstName,
    lastName,
    avatar,
    status,
    title,
    userName,
    salary,
    password,
    address,
  } = profileData;

  //create boolean to validate inputs have values
  const validateInputs =
    !firstName |
    !lastName |
    !avatar |
    !status |
    !title |
    !userName |
    !password |
    !salary |
    !address;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("creating new user: ", { profileData });
      const addedEmployee = await api.createEmployee(profileData);
      console.log({ addedEmployee });
      if (addedEmployee) {
        dispatch(fetchEmployees());
        setLoading(false);
        history.push("/dashboard/employees");
        setProfileData({
          firstName: "",
          lastName: "",
          avatar: "",
          status: "",
          title: "",
          userName: "",
          password: "",
          salary: "",
          address: "",
        });
        toast.success("Employee added!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
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
        setLoading(false);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profile.status !== "ADMIN") {
      history.push("/dashboard");
    }
  }, [history, profile]);

  return (
    <div className="edit-profile">
      <Descriptions title="User Info" layout="vertical">
        <Descriptions.Item label="FirstName">
          <input
            style={inputStyle}
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="LastName">
          <input
            style={inputStyle}
            type="text"
            name="lastName"
            value={lastName}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="UserName">
          <input
            style={inputStyle}
            type="text"
            name="userName"
            value={userName}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Password">
          <input
            style={inputStyle}
            type="password"
            name="password"
            value={password}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Title">
          <input
            style={inputStyle}
            type="text"
            name="title"
            value={title}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Salary">
          <input
            style={inputStyle}
            type="text"
            name="salary"
            value={salary}
            disabled={profile.status !== "ADMIN"}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Avatar(url)">
          <input
            style={inputStyle}
            type="text"
            name="avatar"
            value={avatar}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <input
            style={inputStyle}
            type="text"
            name="status"
            value={status}
            disabled={profile.status !== "ADMIN"}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
          <input
            style={inputStyle}
            type="text"
            name="address"
            value={address}
            required
            onChange={handleInputChange}
          />
        </Descriptions.Item>
      </Descriptions>
      <Button
        loading={loading}
        type="primary"
        style={{ background: "aqua" }}
        shape="round"
        icon={<ArrowRightOutlined />}
        size="middle"
        disabled={validateInputs}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
