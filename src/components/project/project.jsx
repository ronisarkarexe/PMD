"use client";
import React, { useState } from "react";
import { Divider } from "antd";
import { useQuery, useQueryClient } from "react-query";
import ProductsView from "./products-view";
import Loading from "@/app/loading";

const fetchProjects = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();
  return data;
};

const ProjectComponent = () => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, error } = useQuery("projects", fetchProjects);

  if (isLoading) {
    <Loading />;
  }

  return (
    <div>
      <div className="">
        <Divider orientation="left">Project List</Divider>
        {/* <Projects /> */}
        {data?.map((project) => (
          <div key={project?.id} className="my-1">
            <ProductsView project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
