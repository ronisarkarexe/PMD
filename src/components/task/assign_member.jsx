import useProjectStore from "@/zustand/projectStore";
import useTaskStore from "@/zustand/store";
import { Button, Modal } from "antd";

const TaskMemberAssign = ({ isModalOpen, setIsModalOpen, id }) => {
  const members = useProjectStore((state) => state.members);
  const assignMemberToTask = useTaskStore((state) => state.assignMemberToTask);
  const handelTaskMember = (e) => {
    e.preventDefault();
    const memberName = e.target.value;
    assignMemberToTask(id, memberName);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Assign Member"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={false}
            onClick={handleOk}
          >
            Save
          </Button>,
        ]}
      >
        <select
          className="bg-blue-100 select select-bordered select-sm w-full max-w-full rounded-md"
          style={{ outline: "none" }}
          onChange={handelTaskMember}
        >
          <option defaultValue="" selected>
            All members
          </option>
          {members?.map((member, i) => (
            <option key={i} name="member" defaultValue={member.name}>
              <span>{member.name}</span>
            </option>
          ))}
        </select>
      </Modal>
    </div>
  );
};

export default TaskMemberAssign;
