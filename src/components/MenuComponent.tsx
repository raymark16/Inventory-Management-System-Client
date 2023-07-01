import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiImageAdd } from "react-icons/bi";
import { MdOutlineManageAccounts, MdReport } from "react-icons/md";

interface Item {
  label: string;
  key: string;
  iconItem?: JSX.Element;
}

const MenuComponent = () => {
  const getItems = (
    labelItem: string,
    keyItem: string,
    iconItem?: JSX.Element,
    childrenItem?: Item[]
  ) => {
    return {
      label: labelItem,
      key: keyItem,
      icon: iconItem,
      children: childrenItem,
    };
  };
  const navigate = useNavigate();
  const menuItems = [
    getItems("Dashboard", "/", <RxDashboard size={25} />),
    getItems("Add Product", "/add-product", <BiImageAdd size={25} />),
    getItems("Account", "sub1", <MdOutlineManageAccounts size={25} />, [
      {
        label: "Profile",
        key: "/profile",
      },
      {
        label: "Update Profile",
        key: "/update-profile",
      },
      {
        label: "Change Password",
        key: "/change-password",
      },
    ]),
    getItems("Report Bug", "/report-bug", <MdReport size={25} />),
  ];

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      onClick={({ key }) => navigate(key)}
      mode="inline"
      items={menuItems}
    />
  );
};

export default MenuComponent;
