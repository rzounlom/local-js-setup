import "./Dashboard.scss";

import { Layout, Menu, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { adminOptions, userOptions } from "../../data/menuOptions";

import AddUsers from "./AddUsers";
import Profile from "./Profile";
import Users from "./Users";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;
const App = () => {
  const { profile } = useSelector((state) => state.auth.currentEmployee);
  const [collapsed, setCollapsed] = useState(false);
  const [content, setContent] = useState("1");

  const renderContent = (key) => {
    switch (key) {
      case "1":
        return <Profile />;
      case "2":
        return <Users />;
      case "3":
        return <AddUsers />;
      default:
        return null;
    }
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={profile.status === "ADMIN" ? adminOptions : userOptions}
          onClick={({ key }) => {
            console.log({ key });
            setContent(key);
          }}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "88.5vh",
            background: colorBgContainer,
            overflowY: "auto",
          }}
        >
          {renderContent(content)}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
