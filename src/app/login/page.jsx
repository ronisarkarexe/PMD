"use client";
import LoginPage from "@/components/login/Login";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    if (values) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        message.success("Login successful!");
        router.push("/");
      } catch (error) {
        message.error("Login failed!");
      }
      setLoading(false);
    }
  };

  const loginData = {
    title: "Login in",
    isCreate: false,
    accountType: "Don't have an account?",
    createAc: "Create Account",
    regPath: "/create"
  };

  return <LoginPage onFinish={onFinish} loading={loading} data={loginData} />;
};

export default Login;
