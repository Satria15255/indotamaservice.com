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
        <div className="flex grid grid-cols-1 md:grid-cols-2 justify-center mt-2 ">
          <div className="flex justify-center">
            <img src="/assets/aboutCompany.jpg" alt="About Image" className="w-full h-auto rounded-r-4xl" />
          </div>
          <div className="flex flex-col justify-between p-6">
            <h1 className="text-4xl font-bold ">
              Who's <span className="text-blue-400">Indotamaservices? </span>
            </h1>
            <p className="text-xl font-bold py-3">Trusted AC Services</p>
            <p className="text-sm xl:text-lg pb-3">
              We are a trusted AC service provider committed to providing high-quality service to our customers. With a team of experienced and knowledgeable technicians, we are ready to provide the best solutions for all your AC
              maintenance and repair needs. We prioritize customer safety, comfort, and satisfaction in every step of our service. Trust your AC maintenance to us for optimal results and excellent performance at all times.
            </p>
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
