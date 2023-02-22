import {
  HomeOutlined,
  UserAddOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

export const adminOptions = [
  {
    key: "1",
    icon: (
      <Link to="/dashboard">
        <HomeOutlined />
      </Link>
    ),
    label: "Home",
  },
  {
    key: "2",
    icon: (
      <Link to="/dashboard/profle">
        <UserOutlined />
      </Link>
    ),
    label: "Profile",
  },
  {
    key: "3",
    icon: (
      <Link to="/dashboard/employees">
        <UsergroupDeleteOutlined />
      </Link>
    ),
    label: "Employees",
  },
  {
    key: "4",
    icon: (
      <Link to="/dashboard/add-employee">
        <UserAddOutlined />
      </Link>
    ),
    label: "Add New Employee",
  },
];

export const userOptions = [
  {
    key: "1",
    icon: (
      <Link to="/dashboard">
        <HomeOutlined />
      </Link>
    ),
    label: "Home",
  },
  {
    key: "2",
    icon: (
      <Link to="/dashboard/profle">
        <UserOutlined />
      </Link>
    ),
    label: "Profile",
  },
];
