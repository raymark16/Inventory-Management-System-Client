import { Layout } from "antd";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { Outlet } from "react-router-dom";

const SiteLayoutComponent = () => {
  return (
    <Layout className="site-layout">
      <HeaderComponent />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Outlet />
      </div>
      <FooterComponent />
    </Layout>
  );
};

export default SiteLayoutComponent;
