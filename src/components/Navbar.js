import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div name="Navbar" className="flex">
        <img className="h-10 w-10  ml-4 mt-4" src={logo} alt="Sample Logo" />
        <h1 className=" absolute top-0 right-0 p-4 ">
          Need Help ? Call 8107344682
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
