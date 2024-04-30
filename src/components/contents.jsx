"use client";
import { Layout } from "antd";
import HeaderPage from "./header";
const { Content } = Layout;

const Contents = ({ children }) => {
  return (
    <Content className="min-h-screen text-black">
      <HeaderPage />
      <div className="m-3">{children}</div>
    </Content>
  );
};

export default Contents;
