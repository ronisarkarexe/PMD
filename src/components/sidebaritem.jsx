import React from "react";
import { BorderOuterOutlined, HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

export const sideBarItems = () => {
  const Dashboard = [
    {
      label: <Link href={`/`}>Dashboard</Link>,
      icon: <HomeOutlined />,
      key: `/`,
    },
    {
      label: <Link href={`/project`}>Project</Link>,
      icon: <BorderOuterOutlined />,
      key: `/project`,
    },
    {
      label: <Link href={`/task`}>Task</Link>,
      icon: <BorderOuterOutlined />,
      key: `/task`,
    },
  ];

  return Dashboard;
};
