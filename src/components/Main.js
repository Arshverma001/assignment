import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
const Main = () => {
  return (
    <div name="Main" className="w-full my-32">
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-2">
          <img src={img1} alt="hotel images" className="object-fill"></img>
        </div>
        <div>
          <img src={img2} alt="hotel images" className=""></img>
        </div>
        <div>
          <img src={img3} alt="hotel images" className=""></img>
        </div>
        <div>
          <img src={img4} alt="hotel images" className=""></img>
        </div>
        <div>
          <img src={img5} alt="hotel images" className=""></img>
        </div>
      </div>
    </div>
  );
};

export default Main;
