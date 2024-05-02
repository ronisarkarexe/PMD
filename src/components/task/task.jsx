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
      <h2 className="text-1xl">{title}</h2>
      <div
        className={`mt-1 h-80 w-full rounded-xl bg-blue-200 p-3`}
        onDrop={handelDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          {taskData &&
            taskData.map((task, index) => (
              <div key={index}>
                <TaskDetails task={task} />
              </div>
            ))}
          {taskData.length == 0 && status === "TODO" && (
            <div className="mt-1 text-center text-sm text-black-300">
              <p>Create a new task</p>
            </div>
          )}
          {tasks.length && taskData.length == 0 && status !== "TODO" ? (
            <div className="mt-1 text-center text-sm text-black-300">
              <p>Drag your tasks here</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Task;
