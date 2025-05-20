"use client";

import React from "react";
import { motion } from "framer-motion";

const home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex h-screen grid grid-cols-1 md:grid-cols-2 mt-17 items-center  p-4 justify-center">
        <div className="flex flex-col order-2 md:order-1">
          <h1 className="text-5xl xl:text-7xl font-bold text-blue-400 py-4">Trusted AC Service</h1>
          <p className="max-w-xl text-gray-500 text:xs md:text-lg xl:text-xl">We provide AC maintenance, repair and installation with experienced technicians.</p>
          <div className="bg-blue-500 pb-3 w-2/5 mt-3">
            <button className="bg-blue-400 text-white py-4 w-full px-4 ">Whatsapp</button>
          </div>
        </div>
        <img src="/assets/home2.jpg" alt="Home Image" className="w-full order-1 md:order-2" />
      </div>
    </motion.div>
  );
};

export default home;
