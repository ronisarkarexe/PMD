"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { sideBarItems } from "./sidebaritem";
const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="overflow-auto h-screen sticky left-0 top-0 bottom-0 bg-gray-800"
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sideBarItems()}
      />
    </Sider>
  );
};

export default SideBar;
