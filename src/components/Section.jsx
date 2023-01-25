import React from "react";
import { MdOutlineAppRegistration } from "react-icons/md";
import { CgNotes } from "react-icons/cg";

const Section = () => {
  return (
    // Registration
    <div>
      <div
        id="registration"
        className="h-screen bg-primary flex items-center justify-center 
    lg:justify-between
    "
      >
        {" "}
        <div
          className="bg-text/80 shadow-xl h-[70%] rounded-lg mx-4 w-full flex flex-col items-center justify-around
  md:w-[70%]
  lg:w-[45%]
  "
        >
          <div
            className="flex items-center justify-between rounded-xl bg-slate-700 w-[95%] shadow-2xl
          lg:justify-center"
          >
            <button
              className="hover:cursor-pointer uppercase p-2  text-text flex items-center justify-center duration-200 text-2xl rounded-lg bg-primary mx-8  ring-text ring-4 
              md:text-4xl md:shadow-lg
              lg:flex-col 
               focus:outline-none 
               "
            >
              <MdOutlineAppRegistration />
            </button>
            <div
              className=" p-2 px-4
            lg:p-4 lg:px-8"
            >
              <p
                className="text-2xl uppercase text-center font-bold text-text    cursor-default
                lg:text-4xl
               "
              >
                registration
              </p>
              <p className="uppercase text-center mx-2 text-lg font-bold cursor-default">
                <span className="">for the </span>
                <span className=" text-primary"> session 2022-24</span>
              </p>
            </div>
          </div>

          <p
            className="text-slate-900 leading-10 capitalize text-justify text-xl mx-8 tracking-tight font-bold
          lg:mx-16
          "
          >
            Click on the respective button given below for registration of
            students of class 9th or 11th
          </p>

          <div className="flex flex-col w-full px-16 ">
            <button className="py-2 w-full m-2 text-center  rounded-lg text-primary   hover:cursor-pointer  font-bold bg-text/60 hover:bg-text  shadow-lg">
              <p className="uppercase"> class 9</p>
            </button>
            <button className="py-2 w-full m-2 text-center  rounded-lg text-text font-bold bg-primary/80 hover:bg-primary hover:cursor-pointer shadow-lg ">
              <p className="uppercase"> class 11 </p>
            </button>
          </div>
        </div>
      </div>
      {/* Admissions */}
      <div
        id="admissions"
        className="h-screen bg-text flex items-center justify-center flex-row-reverse
    lg:justify-between
    "
      >
        {" "}
        <div
          className="bg-primary/80 shadow-xl h-[70%] rounded-lg mx-4 w-full flex flex-col items-center justify-around
          md:w-[70%]
          lg:w-[45%]"
        >
          <div
            className="flex items-center justify-between rounded-xl bg-slate-700 w-[95%]
          lg:justify-center shadow-xl"
          >
            <button
              className="hover:cursor-pointer uppercase p-2  text-text flex items-center justify-center duration-200 text-2xl rounded-lg bg-primary mx-8  ring-text ring-4 
              md:text-4xl md:shadow-lg
              lg:flex-col 
               focus:outline-none 
               "
            >
              <CgNotes />
            </button>
            <div
              className=" p-2 px-4
            lg:p-4 lg:px-8
            "
            >
              <p className="text-4xl uppercase text-center font-bold text-text    cursor-default ">
                online
              </p>
              <p className="uppercase text-center text-lg font-bold cursor-default">
                <span className="">Admissions & </span>
                <span className=" text-primary">Roll Number Slips </span>
              </p>
            </div>
          </div>

          <p
            className="text-slate-900 leading-10 capitalize text-justify text-xl mx-8  tracking-tight font-bold
          lg:mx-16
          "
          >
            Click on the respective button given below for registration of
            students of class 9th or 11th
          </p>

          <div className="flex flex-col w-full px-16  ">
            <button className="py-2 w-full m-2 text-center  rounded-lg text-text  hover:cursor-pointer  font-bold bg-primary/60 hover:bg-primary  shadow-lg">
              <p className="uppercase"> Matric </p>
            </button>
            <button className="py-2 w-full focus:scale m-2 text-center  rounded-lg text-primary font-bold bg-text/80 hover:bg-text hover:cursor-pointer shadow-lg">
              <p className="uppercase"> Intermediate</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

<div className="flex w-full px-16">
  <div className="flex w-full px-16">
    <div className="py-2 w-full m-2 text-center  rounded-lg text-text   hover:cursor-pointer  font-bold bg-primary/60 hover:bg-primary  shadow-lg">
      9th Class
    </div>
    <div className="py-2 w-full m-2 text-center  rounded-lg text-primary font-bold bg-text/80 hover:bg-text hover:cursor-pointer  shadow-lg">
      11th Class
    </div>
  </div>
</div>;
