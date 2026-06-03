"use client";

import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import FadeInFromTop from "./fadeinfromtop";
import React from "react";
import { PiUserBold } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInFromTop>
      <div>
        <nav className="flex justify-between bg-white w-full py-6 px-4 z-50  fixed top-0 ">
          {/* Logo */}
          <div>
          <h1 className="font-bold font-sans text-md md:text-2xl xl:text-3xl  ">
            Indotama<span className="text-blue-400">service.</span>
          </h1>
          </div>

{/* Navigation */}
          <div>
          <ul className="flex hidden md:flex space-x-9 ">
            <li className="hover:text-blue-500 text-md xl:text-lg transition duration-100">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-500 text-md xl:text-lg transition duration-100">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-500 text-md xl:text-lg transition duration-100">
              <a href="#">Services</a>
            </li>
             <li className="hover:text-blue-500 text-md xl:text-lg transition duration-100">
              <a href="#">Contact</a>
            </li>
          </ul>
          </div>

{/* Login Info */}
          <div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            {isOpen ? "X" : <FaAlignJustify />}
          </button>
          <button className="flex items-center gap-3 text-sm lg:text-lg">
            <PiUserBold/>
            Login / Register
          </button>
          </div>
        </nav>
      </div>
    </FadeInFromTop>
  );
};

export default Navbar;
