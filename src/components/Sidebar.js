import React from "react";
import hotelroom from "../assets/hotelroom.png";

const Sidebar = () => {
  return (
    <div name="Sidebar" className="w-full">
      <div className="w-full h-[600px] bg-gray-900/90 absolute">
        <img
          className="w-full h-[600px] object-fill mix-blend-overlay"
          src={hotelroom}
          alt="/"
        />
      </div>
      {/* Dropdown Menu  */}
    </div>
  );
};

export default Sidebar;
