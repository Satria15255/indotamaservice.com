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
            <p className="text-xl lg:text-3xl font-bold pr-8">
              Indotama<span className="text-blue-500">service.</span>
            </p>
            <p className="mt-2 text-sm lg:text-lg">PO Box 12300 Bangilan Street,</p>
            <p className="text-sm lg:text-lg">Bojonegoro (+62) 812-4986-1705 </p>
            <p className="text-sm lg:text-lg">indotamaservice@gmail.com</p>
          </div>
          <div className="flex mt-5 flex-col justify-center">
            <h1 className="text-xl lg:text-3xl font-bold mb-2">Teratas</h1>
            <div className="text-sm lg:text-lg">
              <ol>Pembayaran</ol>
              <ol>Harga</ol>
              <ol>Pemesanan</ol>
              <ol>Layanan</ol>
              <ol>Kinerja</ol>
            </div>
          </div>
          <div className="flex mt-5 flex-col">
            <h1 className="text-xl lg:text-3xl font-bold mb-2">Informasi</h1>
            <div className="text-sm lg:text-lg">
              <ol>Tentang</ol>
              <ol>Layanan</ol>
              <ol>Pemesanan</ol>
              <ol>Testimoni</ol>
              <ol>Pemesanan</ol>
            </div>
          </div>
        </div>
        <div className="text-xs md:text-sm text-gray-500 text-center mt-12">&copy; 2024 Indotamaservice. All rights reserved.</div>
      </div>
    </motion.div>
  );
};

export default Footer;
