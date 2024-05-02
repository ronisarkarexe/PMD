import TaskSection from "@/components/task/tasks";
import TaskComponent from "@/components/task/tasks-component";
import React from "react";

const Task = () => {
  return (
    <div className="flex text-black">
      <div className="mx-auto w-full max-w-7xl px-3">
        {/* <TaskSection /> */}
        <TaskComponent />
      </div>
    </div>
  );
};

export default Task;
