import { Layout } from "antd";
import Sidebar from "../components/home/Sidebar";
import { Outlet } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

const Home = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sidebar />
        <Content style={{ padding: "24px" }}>
          <Outlet />
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
