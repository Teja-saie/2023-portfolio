import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-100 rounded-lg text-orange-500 p-1"
              : "hover:bg-red-600 hover:rounded-lg hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/resume/"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-100 rounded-lg text-orange-500 p-1"
              : "hover:bg-red-600 hover:rounded-lg hover:text-white"
          }
        >
          Resume
        </NavLink>
        <NavLink
          to="/contact/"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-100 rounded-lg text-orange-500 p-1"
              : "hover:bg-red-600 hover:rounded-lg hover:text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;
