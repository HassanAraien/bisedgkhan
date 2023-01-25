import React from "react";
import { useState } from "react";
const NavItem = (props) => {
  const icon = props.icon;
  const text = props.text;

  const [nav, setNav] = useState(true);
  const checkNav = () => {
    console.log(window.scrollY);
  };
  window.addEventListener("scroll", checkNav);

  return (
    <div className="flex flex-col items-center justify-center">
      <a href={props.url}>
        {" "}
        <button
          data-tooltip-target="tooltip-default"
          type="button"
          className="hover:cursor-pointer uppercase p-2  text-bgc flex items-center justify-center duration-200 text-2xl rounded-lg bg-primary hover:text-text mx-8 
        md:text-4xl md:shadow-lg
        lg:flex-col 
        
      "
        >
          {icon}
        </button>
      </a>
    </div>
  );
};

export default NavItem;
