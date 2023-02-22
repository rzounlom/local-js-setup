import {
  UserOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

export const adminOptions = [
  {
    key: "1",
    icon: (
      <Link to="/dashboard">
        <UserOutlined />
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
      <Link to="/dashboard/users">
        <UsergroupDeleteOutlined />
      </Link>
    ),
    label: "Users",
  },
  {
    key: "4",
    icon: (
      <Link to="/dashboard/manage-users">
        <UsergroupAddOutlined />
      </Link>
    ),
    label: "Manage Users",
    url: "/manage-users",
  },
];

export const userOptions = [
  {
    key: "1",
    icon: (
      <Link to="/dashboard/profle">
        <UserOutlined />
      </Link>
    ),
    label: "Profile",
    url: "/profile",
  },
];
