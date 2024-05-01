"use client";
import useTaskStore from "@/zustand/store";
import React, { useMemo } from "react";
import TaskDetails from "./task-details";

const Task = ({ title, status }) => {
  const tasks = useTaskStore((state) => state.tasks);
  const taskData = useMemo(
    () => tasks.filter((task) => task.status === status),
    [tasks, status]
  );

  const updateTask = useTaskStore((state) => state.updateTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const dragTask = useTaskStore((state) => state.dragTask);
  const handelDrop = () => {
    if (draggedTask) {
      updateTask(draggedTask, status);
      dragTask(null);
    }
  };

  return (
    <div className="h-[400] flex-1">
      <h2 className="text-2xl">{title}</h2>
      <div
        className="mt-3.5 h-full w-full rounded-xl bg-gray-700/50 p-4"
        onDrop={handelDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          {taskData && taskData.length ? (
            taskData.map((task, index) => (
              <div key={index}>
                <TaskDetails task={task} />
              </div>
            ))
          ) : (
            <div>No contains available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
