import React from "react";
import AddTaskPopup from "./add-task-popup";
import Task from "./task";

const Tasks = () => {
  return (
    <div>
      <AddTaskPopup />
      <div className="mt-3 flex gap-3 lg:gap-8">
        <Task title="Todo" status="TODO" />
        <Task title="In progress" status="IN_PROGRESS" />
        <Task title="Complied" status="COMPLIED" />
        <Task title="Done" status="DONE" />
      </div>
    </div>
  );
};

export default Tasks;
