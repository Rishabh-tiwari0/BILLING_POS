import React from "react";
import Inventory from "./Inventory/Inventory";
import Navbar from "./Navbar/Navbar";

class Homepage extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <Navbar />
        <Inventory />
      </div>
    );
  }
}

export default Homepage;
