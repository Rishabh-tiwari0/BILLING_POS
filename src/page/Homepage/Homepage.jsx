import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Inventory from "./Inventory/Inventory";

const Homepage = () => {
  return (
    <div className="flex w-full h-full gap-3">
      <Sidebar />
      <Inventory />
    </div>
  );
};

export default Homepage;
