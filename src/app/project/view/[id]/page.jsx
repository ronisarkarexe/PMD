import ViewProductsDetails from "@/components/project/view-product-details";
import React from "react";

const ViewPage = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <ViewProductsDetails id={id} />
    </div>
  );
};

export default ViewPage;
