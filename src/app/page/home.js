"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiMedal, PiShieldCheckBold, PiClock,PiArrowRightThin } from "react-icons/pi";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex md:h-screen grid grid-cols-1 md:grid-cols-2 bg-blue-100 justify-center">
        <div className="w-auto p-12 flex flex-col justify-center">
          <p className="text-sm bg-blue-400 rounded-full w-50 flex justify-center items-center p-1">Stay Cool All Year Round</p>
          <h1 className="text-4xl lg:text-6xl font-bold  py-4">
            Fast, Reliable & Affordable Air Conditioning<span className="text-blue-900"> Services</span>
          </h1>
          <p className="max-w-xl text-gray-500 text:xs md:text-lg ">Professional air conditioning solutions for homes and businesses. Available for installation, cleaning, maintenance, and emergency repairs.</p>
          <div className=" w-2/5 mt-3">
            <button className="bg-blue-900 rounded-4xl hover:bg-white hover:text-black transition duration-200 border border-gray-300 text-white py-4 w-full px-4 flex items-center justify-center gap-2">Book Now <PiArrowRightThin/> </button>
          </div>
          <div className="grid grid-cols-3 gap-9 mt-12 max-w-screen">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className=" p-2 text-blue-900 bg-white shadow-lg rounded-full ">
                <PiClock size={40} />
              </div>
              <p className="text-sm text-center md:text-left">
                Fast <br /> Response
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className=" p-2 text-blue-900 bg-white shadow-lg rounded-full ">
                <PiMedal size={40} />
              </div>
              <p className="text-sm text-center md:text-left">
                Expert <br /> Technicians
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className=" p-2 text-blue-900 bg-white shadow-lg rounded-full ">
                <PiShieldCheckBold size={40} />
              </div>
              <p className="text-sm text-center md:text-left">
                Guaranteed <br /> Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-16 pt-3 pl-2">
          <img src="/assets/hero-section.webp" alt="Home Image" className="w-full h-full object-cover object-center rounded-l-4xl " />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
