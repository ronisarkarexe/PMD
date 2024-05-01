import React from "react";
import { Card, Button } from "antd";
import Link from "next/link";

const ProductsView = ({ project }) => {
  return (
    <Card
      title={project?.title}
      extra={
        <div>
          <Link href={`/project/view/${project?.id}`}>
            <Button type="primary" className="mr-4">
              View
            </Button>
          </Link>
          <Link href={`/project/edit/${project?.id}`}>
            <Button className="mr-4">Edit</Button>
          </Link>
          <Button type="danger">Delete</Button>
        </div>
      }
      bodyStyle={{ padding: "0px" }}
    />
  );
};

export default ProductsView;
