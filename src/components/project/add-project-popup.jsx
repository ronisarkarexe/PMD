"use client";
import React from "react";
import { Button, Form, Input, Modal } from "antd";
import useProjectStore from "@/zustand/projectStore";

const AddProjectPopup = ({
  showModal,
  handleCancel,
  isModalOpen,
  setIsModalOpen,
  projectTitle,
  project,
}) => {
  const addProject = useProjectStore((state) => state.addProject);
  const editProject = useProjectStore((state) => state.editProject);
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit();
  };

  const onFinish = (values) => {
    const { title, description } = values;
    const newTitle = title;
    const newDescription = description;
    if (projectTitle === "Edit") {
      editProject(project?.id, newTitle, newDescription);
      form.resetFields();
      setIsModalOpen(false);
      return;
    }
    addProject(title, description);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {projectTitle === "Edit" ? projectTitle : projectTitle + " Project"}
      </Button>
      <Modal
        title={projectTitle + " Project"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please enter project title!" }]}
          >
            <Input placeholder="Project title" defaultValue={project?.title}/>
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              { required: true, message: "Please enter project description!" },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Project description"
              maxLength={6}
              defaultValue={project?.description}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProjectPopup;
