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
          <div className="w-auto flex flex-col justify-around p-5">
            <div>
              <h1 className=" font-bold text-4xl">Get in Touch</h1>
              <p className="text-sm text-gray-600">
                Have questions or need professional AC services? Our team is ready to help with installation, maintenance, repairs, and consultations. Contact us today and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-2 ">
              <div>
                <p className="text-xl font-bold">Chat to us : </p>
                <p className="text-sm text-gray-600"> Our friendly team is here to help</p>
                <p className="text-sm  font-bold">indotamaservices@gmail.com</p>
              </div>
              <div>
                <p className="text-xl font-bold">Call us : </p>
                <p className="text-sm text-gray-600">toll-free call</p>
                <p className="text-sm font-bold">081234567</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-xl font-bold">Visit us : </p>
                <p className="text-sm text-gray-600">Come say hello at our office</p>
                <p className="text-sm font-bold">
                  Business Center Building <br />
                  Jl. Ahmad Yani No. 45
                  <br />
                  Bojonegoro, East Java 62112
                  <br />
                  Indonesia
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Operactional Time : </p>
                <p className="text-sm font-bold">08:00 AM - 6:00 PM Every Day</p>
              </div>
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
