"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="bg-blue-200 h-auto pt-8 p-5 flex flex-col justify-center ">
        <div className="flex grid grid-cols-1 md:grid-cols-3 md:place-items-center justify-center ">
          <div className="flex mt-5 pb-9 flex-col">
            <p className="text-xl lg:text-xl font-bold pr-8">
              Indotama<span className="text-blue-500">service.</span>
            </p>
            <p className="mt-2 text-sm max-w-lg lg:text-lg">Professional air conditioning solutions for homes and businesses. Available for installation, cleaning, maintenance, and emergency repairs.</p>
          </div>
          <div className="flex mt-5 flex-col justify-center">
            <h1 className="text-xl lg:text-xl font-bold mb-2">Services</h1>
            <div className="text-sm lg:text-lg">
              <ol>AC Installation</ol>
              <ol>AC Repair</ol>
              <ol>AC Cleaning</ol>
              <ol>Freon refill</ol>
              <ol>AC Dismantling & Relocation</ol>
              <ol>Periodic AC Maintenance</ol>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <h1 className="text-xl lg:text-xl font-bold mb-2">Company</h1>
            <div className="text-sm lg:text-lg">
              <ol>About us</ol>
              <ol>Career</ol>
              <ol>Partners</ol>
              <ol>Testimonials</ol>
              <ol>Documentation</ol>
              <ol>Contact</ol>
            </div>
          </div>
        </div>
        <div className="text-xs md:text-sm text-gray-500 text-center mt-12">&copy; 2024 Indotamaservice. All rights reserved.</div>
      </div>
    </motion.div>
  );
};

export default Footer;
