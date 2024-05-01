import useTaskStore from "@/zustand/store";
import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const TaskDetails = ({ task }) => {
  const { title, description, status, id } = task;
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
        <span className="text-sm font-light text-gray-500">Assign: </span>
      </div>
      <div>
        <button
          className="cursor-pointer hover:text-rose-400"
          onClick={() => removeTask(id)}
        >
          <DeleteOutlined />
        </button>
        <button className="cursor-pointer ml-2 hover:text-green-400">
          <EditOutlined />
        </button>
        <button className="cursor-pointer ml-2 hover:text-green-400">
          <EyeOutlined />
        </button>
        <button className="cursor-pointer ml-2 hover:text-green-400">
          <UserAddOutlined />
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
