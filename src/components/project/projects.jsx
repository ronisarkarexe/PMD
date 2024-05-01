import React from "react";
import ProjectCollapseComponent from "./project-collapse-component";
import useProjectStore from "@/zustand/projectStore";

const Projects = () => {
  const projects = useProjectStore((state) => state.projects);
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="my-2">
          <ProjectCollapseComponent project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
