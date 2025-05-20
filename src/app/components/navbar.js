"use client";

import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import FadeInFromTop from "./fadeinfromtop";
import React from "react";

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeInFromTop>
      <div>
        <nav className="flex justify-between bg-white w-full py-6 px-4 z-50  fixed top-0 ">
          <h1 className="font-bold font-sans text-md md:text-2xl xl:text-3xl  ">
            Indotama<span className="text-blue-400">service.</span>
          </h1>
          <ul className="flex hidden md:flex space-x-4 font-bold">
            <li className="hover:text-blue-500 text-md xl:text-xl transition duration-100">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-500 text-md xl:text-xl transition duration-100">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-500 text-md xl:text-xl transition duration-100">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-blue-500 text-md xl:text-xl transition duration-100">
              <a href="#">Testimoni</a>
            </li>
            <li className="hover:text-blue-500 text-md xl:text-xl transition duration-100">
              <a href="#">Contact</a>
            </li>
          </ul>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
            {isOpen ? "X" : <FaAlignJustify />}
          </button>
        </nav>

        <div className={`fixed top-0 right-0 w-40 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
          <button onClick={() => setIsOpen(false)} className="fixed left-3 top-2">
            X
          </button>
          <ul className=" space-y-full flex mt-8 p-3 flex-col text-gray-5500 font-bold">
            <li className="hover:text-blue-500 text-lg xl:text-xl py-2 border-b transition duration-100">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-blue-500 text-lg xl:text-xl  py-2 border-b transition duration-100">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-500 text-lg xl:text-xl  py-2 border-b transition duration-100">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-blue-500 text-lg xl:text-xl  py-2 border-b transition duration-100">
              <a href="#">Testimoni</a>
            </li>
            <li className="hover:text-blue-500 text-lg xl:text-xl  py-2 border-b transition duration-100">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </FadeInFromTop>
  );
};

export default navbar;
