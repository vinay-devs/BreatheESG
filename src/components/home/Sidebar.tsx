import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, useNavigate } from "react-router-dom";
import Dashboad from "../../assets/images/sidebar/Dashboard.png";
import Entity_manager from "../../assets/images/sidebar/Entity_manager.png";
import DataManager from "../../assets/images/sidebar/Data-Manager.png";
import Report from "../../assets/images/sidebar/Reporting.png";
import Materiality from "../../assets/images/sidebar/Materiality.png";
import Suppliers from "../../assets/images/sidebar/Suppliers.png";
import Analytics from "../../assets/images/sidebar/Analytics.png";
import Targets from "../../assets/images/sidebar/Targets.png";
import LogoName from "../../assets/images/LogoName.jpg";
import {
  //   BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

interface MenuItem {
  icon: JSX.Element;
  label: string;
  route: string;
}

const Sidebar = () => {
  const menuItems: MenuItem[] = [
    {
      icon: <img src={Dashboad} />,
      label: "Dashboard",
      route: "/user/dashboard",
    },
    {
      icon: <img src={Entity_manager} />,
      label: "Entity Manager",
      route: "/user/entity-manager",
    },
    {
      icon: <img src={DataManager} />,
      label: "Data Manager",
      route: "/user/data-manager",
    },
    {
      icon: <img src={Report} />,
      label: "Reporting",
      route: "/user/reporting",
    },
    {
      icon: <img src={Materiality} />,
      label: "Materiality",
      route: "/user/materiality",
    },
    {
      icon: <img src={Suppliers} />,
      label: "Suppliers",
      route: "/user/suppliers",
    },
    {
      icon: <img src={Analytics} />,
      label: "Analytics",
      route: "/user/analytics",
    },
    { icon: <img src={Targets} />, label: "Targets", route: "/user/targets" },
  ];

  const menuItemsWithRoutes = menuItems.map((item, index) => ({
    key: String(index + 1),
    icon: item.icon,
    label: item.label,
    route: item.route,
  }));

  const navigate = useNavigate();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <Sider
        style={{
          backgroundColor: "black",
          height: "100%",
          paddingTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "50px",
          }}
        >
          <img src={LogoName} width={"150px"} />
        </div>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                darkItemSelectedBg: "black",
                darkItemSelectedColor: "green",
              },
            },
          }}
        >
          <Menu
            className="menu"
            theme="dark"
            style={{ backgroundColor: "black" }}
            mode="inline"
            defaultSelectedKeys={["3"]}
          >
            {menuItemsWithRoutes.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={`${item.route}`}>{item.label}</Link>
              </Menu.Item>
            ))}
            <Menu.Item className="red" icon={<LogoutOutlined />}>
              <p onClick={handleLogout}>Logout</p>
            </Menu.Item>
          </Menu>
        </ConfigProvider>
        ;
      </Sider>
    </div>
  );
};

export default Sidebar;
