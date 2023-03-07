import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="sticky top-0 z-50 ">
      <nav className="flex space-x-4 w-screen h-10 justify-between items-center p-10 backdrop-blur-xl bg-opacity-60">
        <div className="logo w-1/2 font-bold text-slate-900 items-center flex text-[26px] italic"><Link to={"/"}>Teja</Link> </div>
        <div className="flex justify-around items-center  w-1/2">
          <NavLink to="/" className={({ isActive }) => (isActive ? "bg-third p-[10px] rounded-md" : "text-white hover:bg-third p-[10px] rounded-md")}>
            Home
          </NavLink>
          <NavLink
            to="/resume/"
            className={({ isActive }) => (isActive ? "bg-third p-[10px] rounded-md" : "text-white hover:bg-third p-[10px] rounded-md")}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact/"
            className={({ isActive }) => (isActive ? "bg-third p-[10px] rounded-md" : "text-white hover:bg-third p-[10px] rounded-md")}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
