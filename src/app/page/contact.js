"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex flex-col p-4 mb-5 ">
        <h1 className="text-center font-bold text-4xl m-8">CONTACT</h1>
        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          <div className="w-full flex flex-col gap-4 mt-5">
            <div>
              {" "}
              <p className="text-xl xl:text-2xl font-bold bg-blue-200 py-3 px-2 rounded-lg text-left">Bagaimana Cara memesan?</p>
              <p className="text-sm xl:text-lg pl-2 text-gray-500">
                Anda bisa memesan layanan dengan langkah-langkah berikut: Pilih layanan, hubungi kami pada nomor yang tertera, konfirmasi ketersediaan dan harga, setujui perjanjian, lakukan pembayaran, penyelesaian pemesanan, dan kami akan
                menuju lokasi anda.
              </p>
            </div>
            <div>
              <p className="text-xl xl:text-2xl font-bold bg-blue-200 py-3 px-2 rounded-lg text-left">Sosial Media</p>
              <div className="flex grid grid-cols-1 lg:grid-cols-3 lg:place-items-center gap-2 mt-3">
                <div className="flex items-center gap-1">
                  <FaFacebook className="text-lg xl:text-3xl text-blue-500" />
                  <p className="text-sm">Indotamaservicebjn</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaInstagram className="text-lg xl:text-3xl text-blue-500" />
                  <p className="text-sm">Indotamaservicebjn</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaWhatsapp className="text-lg xl:text-3xl text-blue-500" />
                  <p className="text-sm">+62 812-4986-1705</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-5">
            <input type="text" placeholder="Username" className="border w-full py-2 px-2"></input>
            <input type="text" placeholder="Layanan" className="border w-full py-2 mt-5 px-2"></input>
            <input type="text-area" placeholder="Saran & Kritik" className="border w-full pb-32 px-2 mt-5"></input>
            <div className="bg-blue-500 pb-2 rounded-lg w-full mt-3">
              <button className="bg-blue-400 text-white py-2 w-full rounded-lg px-4 ">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
