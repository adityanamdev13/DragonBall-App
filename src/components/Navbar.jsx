import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { PiUsersThreeFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="shadow-lg px-4 py-4 flex justify-between items-center sticky top-0 bg-white z-10">
      <Logo />

      <nav className="flex items-center gap-5 mx-6 bg-black text-white px-15 py-4 pb-3 rounded-t-2xl border-b-4 border-b-[#ffb000]">
        <NavLink to="/" className="flex font-bold gap-1 text-xl items-center ">
          <IoHome size={24} /> <span>Home</span>
        </NavLink>

        <NavLink
          to="/characters"
          className="flex font-bold gap-1 text-xl items-center "
        >
          <PiUsersThreeFill size={24} /> <span>Characters</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
