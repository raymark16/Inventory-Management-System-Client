import { Layout } from "antd";
import Sider from "./SiderComponent";
import SiteLayout from "./SiteLayoutComponent";

const LayoutComponent = () => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider />
      <SiteLayout />
    </Layout>
  );
};

export default LayoutComponent;
