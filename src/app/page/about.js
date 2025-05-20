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
      <div className=" grid grid-cols-1 items-center p-4 ">
        <h1 className="text-4xl text-center font-bold ">
          ABOUT <span className="text-blue-400">US</span>
        </h1>
        <div className="flex grid grid-cols-1 md:grid-cols-2 justify-center mt-2 ">
          <Image src="/assets/about.jpg" alt="About Image" className="w-full  mt-16" />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold py-3">Trusted AC Service</p>
            <p className="max-w-xl text-sm xl:text-lg pb-3">
              We are a trusted AC service provider committed to providing high-quality services to our customers. With a team of trained and experienced technicians, we are ready to provide the best solutions for all your AC maintenance and
              repair needs. We put customer safety, comfort, and satisfaction as our top priorities in every ste p of our service. Trust your AC maintenance to us for optimal results and excellent AC performance all the time.
            </p>
            <div className="bg-blue-500 pb-3 w-2/5 mt-3">
              <button className="bg-blue-400 text-white py-4 w-full px-4 ">Answer</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
