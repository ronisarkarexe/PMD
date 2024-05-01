"use client";
import React, { useState } from "react";
import { Card, Button, message } from "antd";
import Link from "next/link";
import { useMutation } from "react-query";

const ProductsView = ({ project }) => {
  const [loading, setLoading] = useState(false);

  const deleteProjectMutation = useMutation(async (id) => {
    const response = await fetch(`http://localhost:3000/api/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw new Error("Failed to delete project");
    }
    return response.json();
  });

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteProjectMutation.mutateAsync(id);
      message.success("Project deleted successfully");
    } catch (error) {
      message.error("An error occurred while deleting project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title={project?.title}
      extra={
        <div>
          <Link href={`/project/view/${project?.id}`}>
            <Button type="primary" className="mr-4">
              View/Details
            </Button>
          </Link>
          <Link href={`/project/edit/${project?.id}`}>
            <Button className="mr-4">Edit</Button>
          </Link>
          <Button
            type="danger"
            onClick={() => handleDelete(project?.id)}
            loading={loading}
          >
            Delete
          </Button>
        </div>
      }
      bodyStyle={{ padding: "0px" }}
    />
  );
};

export default ProductsView;
