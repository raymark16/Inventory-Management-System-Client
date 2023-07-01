import { Layout } from "antd";
import MenuComponent from "./MenuComponent";
import { useState } from "react";

const { Sider } = Layout;

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 50,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      ></div>
      <MenuComponent />
    </Sider>
  );
};

export default SiderComponent;
