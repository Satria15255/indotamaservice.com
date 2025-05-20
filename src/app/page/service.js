"use client";

import React from "react";
import service from "../datas/service";
import { motion } from "framer-motion";

const services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex flex-col p-4 justify-center items-center mb-8">
        <p className="text-4xl font-bold mb-8">
          SERVI<span className="text-blue-400">CE</span>
        </p>
        <div>
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {service.map((service) => (
              <div key={service.id} className="bg-white rounded-lg p-4 h-full m-2 text-center rounded shadow-xl">
                <div className="text-center text-5xl rounded-full flex justify-center mb-5 ">{service.icon}</div>
                <h2 className="text-lg xl:text-xl font-semibold">{service.title}</h2>
                <p className="max-w-lg text-xs xl:text-sm py-4">{service.description}</p>
                <p className="text-xl text-blue-400 font-bold hover:underline">Answer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default services;
