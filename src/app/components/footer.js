"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="bg-blue-200 h-auto px-3 py-6 flex flex-col justify-center ">
        <div className=" flex flex-col md:flex-row justify-around py-4">
          <div className="flex pb-9 flex-col">
            <p className="text-xl lg:text-3xl font-bold">
              Indotama<span className="text-blue-500">service.</span>
            </p>
            <p className="mt-2 text-sm max-w-md">
              Indotama Service offers a trusted solution for your AC service and
              maintenance needs. We handle a wide range of needs, from AC
              cleaning and repairs to freon refills and installation of new
              units, all with professional workmanship..
            </p>
            <div className="flex gap-2 mt-3">
              <div className="flex items-center gap-1">
                <FaFacebook className="text-lg xl:text-3xl text-blue-500" />
              </div>
              <div className="flex items-center gap-1">
                <FaInstagram className="text-lg xl:text-3xl text-blue-500" />
              </div>
              <div className="flex items-center gap-1">
                <FaWhatsapp className="text-lg xl:text-3xl text-blue-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-xl font-bold mb-2">Services</h1>
            <div className="text-sm lg:text-md pl-3 space-y-2 ">
              <ol>AC Installation</ol>
              <ol>AC Repair</ol>
              <ol>AC Cleaning</ol>
              <ol>Freon refill</ol>
              <ol>AC Dismantling & Relocation</ol>
              <ol>Periodic AC Maintenance</ol>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-xl font-bold mb-2">Company</h1>
            <div className="text-sm lg:text-md pl-3 space-y-2">
              <ol>About us</ol>
              <ol>Career</ol>
              <ol>Partners</ol>
              <ol>Testimonials</ol>
              <ol>Documentation</ol>
              <ol>Contact</ol>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-xl font-bold mb-2">Service Area</h1>
            <div className="text-sm lg:text-md pl-3 space-y-2">
              <ol>City Center</ol>
              <ol>City North</ol>
              <ol>City South</ol>
              <ol>City West</ol>
              <ol>City East</ol>
              <ol>Other</ol>
            </div>
          </div>
        </div>
        <div className="text-xs md:text-sm text-gray-500 border-t border-gray-600 px-4 pt-6">
          &copy; 2024 Indotamaservice. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
