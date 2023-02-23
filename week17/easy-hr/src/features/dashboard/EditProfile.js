import { Button, Descriptions } from "antd";

import { ArrowRightOutlined } from "@ant-design/icons";
import { EmployeesApi } from "../../api/employeesApi";
import { toast } from "react-toastify";
import { updateProfile } from "../auth/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function EditProfile({ profile }) {
  const inputStyle = {
    borderRadius: "12px",
    border: "1px solid lightgrey",
    height: " 30px",
    padding: "0px 3%",
    outline: "1px solid aqua",
    maxWidth: "200px",
  };

  const [updateLoading, setUpdateLoading] = useState(false);
  const api = new EmployeesApi();
  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    avatar: profile.avatar,
    status: profile.status,
    title: profile.title,
    userName: profile.userName,
    password: profile.password,
    salary: profile.salary,
    address: profile.address,
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
    setUpdateLoading(true);
    try {
      const updatedEmployee = await api.updateEmployee(profile.id, profileData);
      console.log({ updatedEmployee });
      if (updatedEmployee && typeof updatedEmployee === "object") {
        dispatch(updateProfile(updatedEmployee));
        setUpdateLoading(false);
        toast.success("Profile updated!", {
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
        setUpdateLoading(false);
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
      setUpdateLoading(false);
    }
  };

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
        loading={updateLoading}
        type="primary"
        style={{ background: "aqua" }}
        shape="round"
        icon={<ArrowRightOutlined />}
        size="small"
        disabled={validateInputs}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
