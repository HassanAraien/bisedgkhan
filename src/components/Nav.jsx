import React from "react";
import NavItem from "./NavItem";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAppRegistration } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { BsNewspaper } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { MdPersonSearch } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";

const Nav = () => {
  const navItems = [
    {
      icon: <AiOutlineHome />,
      text: "home",
      position: 0,
      url: "#",
    },
    {
      icon: <MdOutlineAppRegistration />,
      text: "registration",
      position: 0,
      url: "#registration",
    },
    {
      icon: <BsClipboardData />,
      text: "result and statistical data",
      url: "#result",
    },
    {
      icon: <MdOutlineSettingsSystemDaydream />,
      text: "online system",
      url: "#onlinesystem",
    },
    {
      icon: <CgNotes />,
      text: "online admissions and roll number slips",
      url: "#admissions",
    },
    {
      icon: <BsNewspaper />,
      text: "news",
      url: "#news",
    },
    {
      icon: <FiHelpCircle />,
      text: "help desk",
      url: "#helpdesk",
    },
    {
      icon: <MdPersonSearch />,
      text: "RTI",
      url: "#rti",
    },
    {
      icon: <RiContactsBook2Line />,
      text: "contacts",
      url: "#contacts",
    },
    {
      icon: <IoIosContacts />,
      text: "aboutus",
      url: "#aboutus",
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <div
        className=" fixed bottom-1 bg-bgc/60 rounded-full z-50 flex items-center p-2 box-content
  
    lg:bottom-4 

    "
      >
        <NavItem
          icon={navItems[0].icon}
          text={navItems[0].text}
          url={navItems[0].url}
        />
        <NavItem
          icon={navItems[1].icon}
          text={navItems[1].text}
          url={navItems[1].url}
        />
        <NavItem
          icon={navItems[4].icon}
          text={navItems[4].text}
          url={navItems[4].url}
        />
        <div className="hidden lg:flex">
          <NavItem
            icon={navItems[3].icon}
            text={navItems[3].text}
            url={navItems[3].url}
          />
          <NavItem
            icon={navItems[5].icon}
            text={navItems[5].text}
            url={navItems[5].url}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
