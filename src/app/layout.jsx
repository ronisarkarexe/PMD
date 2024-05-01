"use client"
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Layout } from "antd";
import SideBar from "@/components/sidebar";
import Contents from "@/components/contents";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "PMD",
//   description: "project-management-dashboard",
// };

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
