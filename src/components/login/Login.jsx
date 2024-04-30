import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
const { Text, Title, Link } = Typography;

const LoginPage = ({ onFinish, loading, data }) => {
  return (
    <section className="flex items-center bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6 w-96">
        <div className="mb-8">
          <Title className="text-2xl mb-2">{data && data.title}</Title>
          <Text className="text-gray-600">
            Welcome back to PMD!
          </Text>
        </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {data && data.isCreate && (
            <Form.Item
              name="name"
              rules={[
                {
                  type: "text",
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Name" />
            </Form.Item>
          )}
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="float-right" href="#">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit" loading={loading}>
              {data && data.title}
            </Button>
            <div className="mt-4 text-center">
              <Text className="text-gray-600">{data && data.accountType}</Text>{" "}
              <Link href={data && data.regPath} className="text-blue-500">
                {data && data.createAc} now
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;
