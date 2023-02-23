import "./Dashboard.scss";

import { Layout, Menu, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { adminOptions, userOptions } from "../../data/menuOptions";
import { createElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import Employees from "./Employees";
import Profile from "./Profile";
import { fetchEmployees } from "./dashboardSlice";
import { logout } from "../auth/authSlice";
import { useEffect } from "react";

const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  //declare dispatch function for actions
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const history = useHistory();

  const { profile } = useSelector((state) => state.auth.currentEmployee);
  const { employees } = useSelector((state) => state.dashboard);

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    dispatch(fetchEmployees());
    history.push("/dashboard");
  }, [dispatch, history]);

  return (
    <Layout className="dashboard">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={profile.status === "ADMIN" ? adminOptions : userOptions}
          onClick={({ key }) => {
            if (key === "3") {
              dispatch(fetchEmployees());
            }

            if (key === "5") {
              dispatch(logout());
            }
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
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "89vh",
            background: colorBgContainer,
            overflowY: "auto",
          }}
        >
          <Switch>
            <Route
              exact
              path={`${url}`}
              render={() => (
                <h2>
                  Welcome to your Dashboard:
                  {`${profile.firstName} ${profile.lastName}`}
                </h2>
              )}
            />
            <Route path={`${url}/profile`} render={() => <Profile />} />
            <Route
              path={`${url}/employees`}
              render={() => <Employees employees={employees} />}
            />
            <Route
              exact
              path={`${url}/add-employee`}
              render={() => <AddEmployee />}
            />
            <Route
              path={`${url}/employee/:employeeId`}
              render={() => <EditEmployee />}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
