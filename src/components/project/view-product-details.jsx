"use client";
import Loading from "@/app/loading";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Collapse } from "antd";
import TeamMembersDetails from "./team-members-details";
import Tasks from "../task/tasks";
import useProjectStore from "@/zustand/projectStore";
import RecentActivities from "./recent-activities";
const { Panel } = Collapse;

const fetchSingleProject = async (id) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await response.json();
  return data;
};

const ViewProductsDetails = ({ id }) => {
  const addMembers = useProjectStore((state) => state.addMembers);
  const { data, isLoading, error } = useQuery("project", () =>
    fetchSingleProject(id)
  );
  useEffect(() => {
    if (data) {
      addMembers(data?.teamMembers);
    }
  }, [data]);
  if (isLoading) {
    <Loading />;
  }
  return (
    <div className="m-4 ">
      <div className="border border-blue-700 rounded-lg p-6 shadow-md">
        <span className="text-gray-400 mb-4">Project Details/View Page</span>
        <h2 className="text-3xl">{data?.title}</h2>
      </div>
      <div className="mt-3">
        <Collapse>
          <Panel header="Team Members Details">
            <TeamMembersDetails data={data?.teamMembers} />
          </Panel>
        </Collapse>
      </div>
      <div className="mt-3">
        <Collapse>
          <Panel header="Tasks">
            <Tasks />
          </Panel>
        </Collapse>
      </div>
      <div className="mt-3">
        <Collapse>
          <Panel header="Recent activities">
            <RecentActivities data={data?.recentActivities} />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default ViewProductsDetails;
