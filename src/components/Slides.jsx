import React from "react";

const Slides = (props) => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <img src={props.img1} alt="" className="h-[400px]" />
    </div>
  );
};

export default Slides;
