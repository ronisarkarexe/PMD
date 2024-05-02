"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import useTaskStore from "@/zustand/store";

const TaskComponent = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const updatedFilteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(updatedFilteredTasks);
  }, [tasks, searchQuery]);

  const handelSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div>
      <div>
        <Input placeholder="Search" onChange={handelSearch} />
      </div>

      {filteredTasks?.map((task, index) => (
        <div key={index} className="my-3 bg-blue-100 rounded-md shadow-md p-3">
          <span className="text-xl">Name: {task?.title}</span> <br />
          <span> Description: {task?.description}</span> <br />
          <span>
            Member Name: {task?.memberName ? task?.memberName : "-"}
          </span>{" "}
          <br />
          <span>Status: {task?.status}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;
