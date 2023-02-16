import {
  UserOutlined,
  UsergroupAddOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";

export const adminOptions = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Profile",
  },
  {
    key: "2",
    icon: <UsergroupDeleteOutlined />,
    label: "Users",
  },
  {
    key: "3",
    icon: <UsergroupAddOutlined />,
    label: "Add New Users",
  },
];

export const userOptions = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Profile",
  },
];
