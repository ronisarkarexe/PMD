import React, { useState } from "react";
import { Collapse, Button } from "antd";
import AddProjectPopup from "./add-project-popup";
import useProjectStore from "@/zustand/projectStore";
const { Panel } = Collapse;

const ProjectCollapseComponent = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const removeProject = useProjectStore((state) => state.removeProject);
  const { title, description, id } = project;

  const handleDelete = () => {
    removeProject(id);
  };

  return (
    <div>
      <Collapse>
        <Panel
          header={title}
          key={id}
          extra={[
            <AddProjectPopup
              key="edit"
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              showModal={() => setIsModalOpen(true)}
              handleCancel={() => setIsModalOpen(false)}
              projectTitle="Edit"
              project={project}
            />,
            <Button key="delete" onClick={handleDelete} type="danger">
              Delete
            </Button>,
          ]}
        >
          <p>{description}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default ProjectCollapseComponent;
