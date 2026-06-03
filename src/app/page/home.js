"use client";

import React from "react";
import { motion } from "framer-motion";
import { PiMedal, PiShieldCheckBold, PiClock } from "react-icons/pi";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex h-screen grid grid-cols-1 md:grid-cols-2 mt-17 items-center bg-white justify-center">
        <div className="w-auto p-7 flex flex-col">
          <p className="text-sm bg-blue-100 rounded-full w-50 flex justify-center items-center p-1">Stay Cool All Year Round</p>
          <h1 className="text-4xl lg:text-6xl font-bold  py-4">
            Fast, Reliable & Affordable Air Conditioning<span className="text-blue-900"> Services</span>
          </h1>
          <p className="max-w-xl text-gray-500 text:xs md:text-lg ">Professional air conditioning solutions for homes and businesses. Available for installation, cleaning, maintenance, and emergency repairs.</p>
          <div className=" w-2/5 mt-3">
            <button className="bg-blue-900 rounded-4xl hover:bg-white hover:text-black transition duration-200 border border-gray-300 text-white py-4 w-full px-4 ">Book Now</button>
          </div>
          <div className="flex gap-7 mt-12">
            <div className="flex items-center gap-2">
              <PiClock size={40} />
              <p>
                Fast <br /> Response
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiMedal size={40} />
              <p>
                Expert <br /> Technicians
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PiShieldCheckBold size={40} />
              <p>
                Guaranteed <br /> Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-screen py-4">
          <img src="/assets/imageHero.png" alt="Home Image" className="w-full h-full object-cover object-center rounded-l-4xl " />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
