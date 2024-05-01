import useTaskStore from "@/zustand/store";
import { Button, Form, Input, Modal } from "antd";

const EditTask = ({ isModalOpen, setIsModalOpen, id, title, description }) => {
  const editTask = useTaskStore((state) => state.editTask);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const { title, description } = values;
    const newTitle = title;
    const newDescription = description;
    editTask(id, newTitle, newDescription);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Edit Task"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please enter task title!" }]}
        >
          <Input placeholder="Task title" defaultValue={title} />
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
            defaultValue={description}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditTask;
