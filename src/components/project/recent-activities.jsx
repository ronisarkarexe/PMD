import React from "react";
import { Steps } from "antd";

const description = "Recent Activities";

const RecentActivities = ({ data }) => {
  const stepsData = data.map((title, index) => ({
    title,
    description,
  }));
  return (
    <Steps direction="vertical" size="small" current={1} items={stepsData} />
  );
};

export default RecentActivities;
