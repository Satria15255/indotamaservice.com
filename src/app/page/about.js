"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { TbMapStar } from "react-icons/tb";
import aboutImage from "../assets/aboutCompany.webp";

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
            <Image
              src={aboutImage}
              alt="About Image"
              className="w-full h-auto rounded-r-4xl object-center object-cover"
            />
          </div>
          <div className="flex flex-col justify-between p-6 w-auto">
            <p className="flex justify-center items-center text-sm md:text-xs lg:text-sm bg-blue-900 text-white w-50 h-9 rounded-full">
              About Company
            </p>
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold py-3">
              Trust your AC maintenance to the
              <span className="text-blue-900"> experts.</span>
            </h1>
            <p className="text:xs md:text-sm lg:text-lg py-3 text-gray-600">
              Indotama Service offers a trusted solution for your AC service and
              maintenance needs. We handle a wide range of needs, from AC
              cleaning and repairs to freon refills and installation of new
              units, all with professional workmanship.
            </p>
            <div className=" flex gap-8 py-3">
              <div className="flex justify-center items-center gap-2">
                <div className="bg-blue-100 rounded-full text-blue-900 p-2 shadow-lg">
                  <TbMapStar size={40} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-4xl font-bold">10+</p>
                  <p className="text-sm md:text-xs lg:text-sm text-gray-600">
                    Operational Area
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="bg-blue-100 rounded-full text-blue-900 p-2 shadow-lg">
                  <IoLocationSharp size={40} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-4xl font-bold">100+</p>
                  <p className="text-sm md:text-xs lg:text-sm text-gray-600">
                    Location Handled
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-2/5 mt-3">
              <button className="bg-blue-900 rounded-4xl hover:bg-white hover:text-black transition duration-200 border border-gray-300 text-white text-md md:text-sm lg:text-lg py-4 md:py-2 lg:py-4 w-full px-4  ">
                Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
