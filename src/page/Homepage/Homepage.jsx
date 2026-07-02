import React from "react";
import Inventory from "./Inventory/Inventory";
import Navbar from "./Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Inventory />
    </div>
  );
};

export default Homepage;
