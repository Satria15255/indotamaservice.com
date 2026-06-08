"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import testimoni from "../datas/testimoni";
import TestimoniCard from "../components/TestimoniCard";
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
        <div className="flex flex-col items-center m-8">
          <p className="text-sm font-semibold mb-2">Testimonials</p>
          <p className="text-4xl font-bold">
            What Our <span className=" text-blue-400">Clients Say</span>
          </p>
        </div>
        <div className="w-3/5">
          <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={3} loop={true} autoplay={{ delay: 4000 }}>
            {testimoni.map((item) => (
              <SwiperSlide key={item.id} className="flex flex-col items-center justify-center h-auto p-4 bg-white rounded-lg shadow-xl">
                <TestimoniCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimoni;
