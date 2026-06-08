"use client";

import React from "react";
import service from "../datas/service";
import { motion } from "framer-motion";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex flex-col p-4 justify-center items-center mb-8">
        <p className="text-4xl font-bold mb-8">
          Ser<span className="text-blue-400">vices</span>
        </p>
        <div>
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {service.map((service) => (
              <ServicesCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
