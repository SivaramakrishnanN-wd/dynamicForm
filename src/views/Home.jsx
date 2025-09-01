import {
  DiffOutlined,
  ExportOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
      link: "/",
    },
    {
      key: "2",
      icon: <DiffOutlined />,
      label: "Form Builder",
      link: "/builder",
    },
    {
      key: "3",
      icon: <ExportOutlined />,
      label: "Form Preview",
      link: "/preview",
    },
  ];

  const handleMenuClick = (e) => {
    const clickedItem = items.find((item) => item.key === e.key);
    if (clickedItem && clickedItem.link) {
      navigate(clickedItem.link);
      setCollapsed(true);
    }
  };

  return (
    <>
      <div className="menuIcon">
        <span onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
        <h2>Dynamic Form Builder</h2>
      </div>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}

        {/* Main content area */}
        <div className="mainContent">
          <div
            className={`menu-container ${collapsed ? "collapsed" : "expanded"}`}
          >
            <Menu
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
              onClick={handleMenuClick}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
