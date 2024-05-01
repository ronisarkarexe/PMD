"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import useTaskStore from "@/zustand/store";

const AddTaskPopup = ({title}) => {
  const addTask = useTaskStore((state) => state.addTask);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const { title, description } = values;
    addTask(title, description);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Task
      </Button>
      <Modal
        title="Add Task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please enter task title!" }]}
          >
            <Input placeholder="Task title" />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              { required: true, message: "Please enter task description!" },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Task description"
              maxLength={6}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddTaskPopup;
