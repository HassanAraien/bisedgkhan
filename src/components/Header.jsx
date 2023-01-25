import React from "react";

const Header = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center  border-primary pb-4 bg-text
      md:border-b
      lg:flex-row 
      "
    >
      <div
        className="bg-logo bg-no-repeat border-primary border bg-center rounded-lg h-32 w-28 mt-2
      md:
      lg:
      "
      ></div>
      <div
        className="text-center cursor-default
      md:
      lg:mx-8
      "
      >
        <p
          className="uppercase font-bold text-primary mt-2 text-2xl
        md:text-3xl
        lg:text-5xl
        "
        >
          bise d.g khan
        </p>
        <p
          className="uppercase text-sm text-primary font-semibold
        md:text-lg
        lg:
        "
        >
          board of intermediate and secondary education
        </p>
        <p
          className="uppercase text-sm text-md text-primary font-semibold
        md:text-lg
        lg:"
        >
          dera ghazi khan
        </p>
        <div className="w-full rounded-xl mt-2 border-2 border-primary"></div>
      </div>
    </div>
  );
};

export default Header;
