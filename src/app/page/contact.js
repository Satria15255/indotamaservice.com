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
        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
          <div className="w-auto flex flex-col gap-4 p-5">
            <h1 className=" font-bold text-4xl">Get in Touch</h1>
            <div>
              <p className="text-lg font-semibold">Email : </p>
              <p>indotamaservices@gmail.com</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Phone : </p>
              <p>081234567</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Address : </p>
              <p>
                Business Center Building <br />
                Jl. Ahmad Yani No. 45
                <br />
                Bojonegoro, East Java 62112
                <br />
                Indonesia
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Follow Us</p>
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
          </div>

          <div className="w-full flex flex-col gap-5 mt-5">
            <div className="flex gap-4 w-full">
              <div className="w-full">
                <label>Your Name</label>
                <input type="text" placeholder="Username" className="border w-full py-2 rounded-lg border-gray-200 px-2"></input>
              </div>
              <div className="w-full">
                <label>Your Email</label>
                <input type="email" placeholder="Email" className="border w-full py-2 rounded-lg border-gray-200 px-2"></input>
              </div>
            </div>
            <div className="w-full">
              <label>Your Services</label>
              <input type="text" placeholder="Yout Service Chosee" className="border w-full rounded-lg border-gray-200 py-2 px-2"></input>
            </div>
            <div>
              <label>Your Message</label>
              <input type="text-area" placeholder="Message" className="border w-full rounded-lg border-gray-200 pb-32 px-2"></input>
            </div>
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
