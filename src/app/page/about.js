"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className=" grid grid-cols-1 items-center py-9">
        <div className="flex grid grid-cols-1 md:grid-cols-2 space-y-4 justify-center">
          <div className="flex justify-center pr-2">
            <img src="/assets/aboutCompany.jpg" alt="About Image" className="w-full h-auto rounded-r-4xl" />
          </div>
          <div className="flex flex-col justify-between p-6 w-auto">
            <p className="flex justify-center items-center text-sm bg-blue-100 w-30 rounded-full py-1">About Company</p>
            <h1 className="text-5xl font-bold py-3">
              Trust your AC maintenance <br /> to the experts.
            </h1>
            <p className="text-sm xl:text-lg py-3 text-gray-600">
              Indotama Service offers a trusted solution for your AC service and maintenance needs. We handle a wide range of needs, from AC cleaning and repairs to freon refills and installation of new units, all with professional
              workmanship.
            </p>
            <div className=" flex gap-8 py-3">
              <div className="flex flex-col gap-2">
                <p className="text-5xl font-bold">10+</p>
                <p className="text-sm text-gray-600">Operational Area</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-5xl font-bold">100+</p>
                <p className="text-sm text-gray-600">Location Handled</p>
              </div>
            </div>
            <div className="w-2/5 mt-3">
              <button className="bg-blue-900 rounded-4xl hover:bg-white hover:text-black transition duration-200 border border-gray-300 text-white py-4 w-full px-4  ">Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
