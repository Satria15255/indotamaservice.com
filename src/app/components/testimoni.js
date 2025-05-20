"use client";
import { FaStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import testimoni from "../datas/testimoni";
// Import Swiper styles
import "swiper/css";

const Testimoni = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className=" h-auto flex flex-col bg-blue-100 pb-8 items-center">
        <div className="text-4xl font-bold m-8">
          TESTI<span className="text-blue-400">MONI</span>
        </div>
        <div className="w-3/5">
          <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={1} loop={true} autoplay={{ delay: 4000 }}>
            {testimoni.map((item) => (
              <SwiperSlide key={item.id} className="flex flex-col items-center justify-center h-auto p-4 bg-white rounded-lg shadow-xl">
                <div className="flex justify-center gap-4 mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-center">{item.name}</h3>
                <p className="text-gray-500 text-sm md:text-lg text-center">{item.city}</p>
                <p className="text-center text-xs md:text-sm mt-2">{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimoni;
