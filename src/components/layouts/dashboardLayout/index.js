import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Style from "./style";
import {
  useUserTokenStateDispatcher,
  userTokenAction,
} from "context/userToken";
import { LOCAL_STORAGE_TOKEN_KEY } from "src/constants";
import { useHistory } from "react-router-dom";
import { DASHBOARD_ROUTE } from "routes/constants";
const { Header, Content, Footer, Sider } = Layout;
export const DashboardLayout = ({ children, title }) => {
  const navigate = useHistory();
  const tokenDispatcher = useUserTokenStateDispatcher();
  function handleLogout() {
    userTokenAction(tokenDispatcher, { type: "LOGOUT" });
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    navigate.push(DASHBOARD_ROUTE);
  }
  return (
    <Style>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />} onClick={handleLogout}>
              Log Out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <h1 className="page-title">{title}</h1>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Style>
  );
};
export default DashboardLayout;
