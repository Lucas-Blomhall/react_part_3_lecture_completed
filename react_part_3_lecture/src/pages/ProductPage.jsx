import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <h1>ProductPage {id}</h1>
      </div>
    </div>
  );
}

export default ProductPage;
