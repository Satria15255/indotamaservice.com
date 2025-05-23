"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex h-screen grid grid-cols-1 md:grid-cols-2 mt-17 items-center  p-4 justify-center">
        <div className="flex flex-col order-2 md:order-1">
          <h1 className="text-4xl xl:text-6xl font-bold text-blue-400 py-4">Servis AC Terpercaya</h1>
          <p className="max-w-xl text-gray-500 text:xs md:text-lg xl:text-xl">Kami menyediakan perawatan, perbaikan dan pemasangan AC dengan teknisi berpengalaman.</p>
          <div className="bg-blue-500 pb-3 w-2/5 mt-3">
            <button className="bg-blue-400 text-white py-4 w-full px-4 ">Whatsapp</button>
          </div>
        </div>
        <Image src="/assets/home2.jpg" alt="Home Image" width="800" height="800" priority className=" order-1 md:order-2" />
      </div>
    </motion.div>
  );
};

export default Home;
