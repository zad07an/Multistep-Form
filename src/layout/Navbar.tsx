import React from "react";
import { NavLink } from "react-router-dom";
import { navbarData } from "../data/navbar-data";

const Navbar: React.FC = () => {
  return (
    <nav className=" grid h-16 w-full grid-cols-3 bg-primary-blue px-10">
      <div className=" flex items-center">
        <NavLink
          to=""
          className={" text-2xl font-semibold uppercase text-white"}
        >
          Logo
        </NavLink>
      </div>
      <ul className=" flex items-center justify-center gap-6">
        {navbarData?.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link?.path}
                className=" flex items-center gap-2 text-white"
              >
                {link?.icon} {link?.pathname}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className=" flex items-center justify-end">
        <button className=" rounded-sm bg-primary-green px-10 py-1 text-white">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
