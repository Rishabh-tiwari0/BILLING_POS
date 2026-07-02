import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white h-14  flex justify-between items-center ">
      {/* company name */}
      <h1 className="text-lg font-bold leading-tight m-5">BILLING.COM</h1>
      {/* todays date and time */}
      <div className="text-right font-figures  text-gray-400 mr-5">
        <p>Thu, 02 Jul, 2026</p>
        <p>11:56:10 am</p>
      </div>
    </div>
  );
};

export default Navbar;
