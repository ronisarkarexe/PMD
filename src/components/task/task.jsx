import React from "react";

const tasks = [
  {
    id: "1234",
    title: "demo",
    description: "demo",
    status: "TODO",
  },
];

const Task = ({ title, status }) => {
  const taskData = tasks.filter((task) => task.status === status);
  return (
    <div className="h-[400] flex-1">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-3.5 h-full w-full rounded-xl bg-gray-700/50 p-4">
        <div className="flex flex-col gap-2">
          {taskData && taskData.length ? (
            taskData.map((task, index) => (
              <div key={index}>
                <h1>{task.title}</h1>
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
