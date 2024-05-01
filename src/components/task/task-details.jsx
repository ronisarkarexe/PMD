import useTaskStore from "@/zustand/store";
import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import TaskMemberAssign from "./assign_member";
import { Tooltip } from "antd";
import AddEditTaskPopup from "../project/add-project-popup";
import EditTask from "./edit_task";

const TaskDetails = ({ task }) => {
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { title, description, status, id, memberName } = task;
  const removeTask = useTaskStore((state) => state.removeTask);
  const dragTask = useTaskStore((state) => state.dragTask);

  return (
    <div
      className="flex cursor-move items-start justify-between rounded-lg bg-white px-3 py-2 text-gray-900"
      draggable
      onDrag={() => dragTask(id)}
    >
      <div>
        <h3 className="font-medium text-gray-700">{title}</h3>
        <p className="text-sm font-light text-gray-500">{description}</p>
        <span className="text-sm font-light text-gray-500">
          Assign: {memberName}
        </span>
      </div>
      <div>
        <button
          className="cursor-pointer hover:text-rose-400"
          onClick={() => removeTask(id)}
        >
          <Tooltip title="Delete">
            <DeleteOutlined />
          </Tooltip>
        </button>
        <button
          className="cursor-pointer ml-2 hover:text-green-400"
          onClick={() => setIsModalOpen2(true)}
        >
          <Tooltip title="Edit">
            <EditOutlined />
          </Tooltip>
        </button>
        <button
          className="cursor-pointer ml-2 hover:text-green-400"
          onClick={() => setIsModalOpen2(true)}
        >
          <Tooltip title="View">
            <EyeOutlined />
          </Tooltip>
        </button>
        <button
          className="cursor-pointer ml-2 hover:text-green-400"
          onClick={() => setIsModalOpen(true)}
        >
          <Tooltip title="Assign Member">
            <UserAddOutlined />
          </Tooltip>
        </button>
      </div>
      {isModalOpen && (
        <TaskMemberAssign
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          id={id}
        />
      )}
      {isModalOpen2 && (
        <EditTask
          isModalOpen={isModalOpen2}
          setIsModalOpen={setIsModalOpen2}
          id={id}
          title={title}
          description={description}
        />
      )}
    </div>
  );
};

export default TaskDetails;
