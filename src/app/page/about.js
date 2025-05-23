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
          TENTANG <span className="text-blue-400">KAMI</span>
        </h1>

        <div className="flex grid grid-cols-1 md:grid-cols-2 justify-center mt-2 ">
          <Image src="/assets/about.jpg" alt="About Image" width="800" height="800" className="w-full  mt-16" priority />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-bold py-3">Servis AC Terpercaya</p>
            <p className="max-w-xl text-sm xl:text-lg pb-3">
              Kami adalah penyedia layanan AC terpercaya yang berkomitmen untuk memberikan layanan berkualitas tinggi kepada pelanggan kami. Dengan tim teknisi yang terlatih dan berpengalaman, kami siap memberikan solusi terbaik untuk semua
              kebutuhan perawatan dan perbaikan AC Anda. Kami mengutamakan keselamatan, kenyamanan, dan kepuasan pelanggan dalam setiap langkah layanan kami. Percayakan perawatan AC Anda kepada kami untuk hasil yang optimal dan kinerja AC
              yang sangat baik setiap saat.
            </p>
            <div className="bg-blue-500 pb-3 w-2/5 mt-3">
              <button className="bg-blue-400 text-white py-4 w-full px-4 ">Tanyakan</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
