import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import SideBar from "@/components/sidebar";
import Contents from "@/components/contents";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PMD",
  description: "project-management-dashboard",
};

export default function RootLayout({ children }) {
  return (
    <AntdRegistry>
      <html lang="en">
        <body className={inter.className}>
          <Layout hasSider>
            <SideBar />
            <Contents>{children}</Contents>
          </Layout>
        </body>
      </html>
    </AntdRegistry>
  );
}
