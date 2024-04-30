"use client";
import LoginPage from "@/components/login/Login";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Create = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    if (values) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        message.success("Account created successful!");
        router.push("/");
      } catch (error) {
        message.error("Failed to create account!");
      }
      setLoading(false);
    }
  };

  const createData = {
    title: "Create Account",
    isCreate: true,
    accountType: "Already have an account?",
    createAc: "Login",
    regPath: "/login",
  };

  return <LoginPage onFinish={onFinish} loading={loading} data={createData} />;
};

export default Create;
