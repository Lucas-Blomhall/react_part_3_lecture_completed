import React from "react";
import { Link } from "react-router-dom";
import UseEffectProducts from "../components/UseEffectProducts";


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <h1 className="text-7xl">Home</h1>
        <UseEffectProducts></UseEffectProducts>
      </div>
    </div>
  );
}

export default Home;
