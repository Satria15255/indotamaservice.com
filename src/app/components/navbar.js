"use client";

import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import FadeInFromTop from "./fadeinfromtop";
import React from "react";
import { PiUserBold, PiArrowRightThin } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInFromTop>
      <div>
        <nav className="grid grid-cols-3 justify-between bg-transparent w-full py-6 px-4 z-50  fixed top-0 ">
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
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-50"
            >
              {isOpen ? "X" : <FaAlignJustify />}
            </button>
            <button className="bg-blue-900 rounded-4xl hover:bg-white hover:text-black transition duration-200 border border-gray-300 text-white py-4  flex items-center justify-center gap-2 w-1/2">
              Book Now <PiArrowRightThin />{" "}
            </button>
          </div>
        </nav>
      </div>
    </FadeInFromTop>
  );
};

export default Navbar;
