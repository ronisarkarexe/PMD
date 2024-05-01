import React from "react";
import { Card, Col, Row } from "antd";

const TeamMembersDetails = ({ data }) => {
  return (
    <Row gutter={16}>
      {data?.map((item) => (
        <Col key={item.id} xs={24} sm={12} md={8}>
          <Card
            title={item.name}
            bordered={false}
            className="border border-blue-700"
          >
            {item.role}
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TeamMembersDetails;
