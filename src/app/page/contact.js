"use client";

import React from "react";
import { motion } from "framer-motion";
import { AiTwotoneMessage } from "react-icons/ai";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { FaMapLocationDot, FaRegClock } from "react-icons/fa6";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Awalnya transparan dan turun 50px
      whileInView={{ opacity: 1, y: 0 }} // Saat muncul, fade-in & naik ke atas
      transition={{ duration: 1.0 }} // Animasi selama 1 detik
      viewport={{ once: true }}
    >
      <div className="flex flex-col py-5 px-4 bg-blue-100 ">
        <div className="flex grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          <div className="w-auto flex flex-col justify-around md:p-5 space-y-2">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-4xl">Get in Touch</h1>
              <p className="text-sm text-gray-600">
                Have questions or need professional AC services? Our team is
                ready to help with installation, maintenance, repairs, and
                consultations. Contact us today and we will get back to you as
                soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white shadow-lg flex flex-col justify-around rounded-lg h-40 p-5">
                <p className="flex items-center gap-3 text-xl font-bold">
                  {" "}
                  <AiTwotoneMessage size={30} className="text-blue-900" /> Chat
                  to us :{" "}
                </p>

                <p className="text-sm text-gray-600">
                  {" "}
                  Our friendly team is here to help
                </p>
                <p className="text-sm  font-bold">indotamaservices@gmail.com</p>
              </div>
              <div className="bg-white shadow-lg flex flex-col justify-around rounded-lg h-40 p-5">
                <p className="text-xl font-bold flex gap-3">
                  {" "}
                  <PiPhoneCallDuotone size={30} className="text-blue-900" />
                  Call us :{" "}
                </p>
                <p className="text-sm text-gray-600">toll-free call</p>
                <p className="text-sm font-bold">081234567</p>
              </div>
              <div className="bg-white shadow-lg flex flex-col justify-around rounded-lg h-40 p-5">
                <p className="text-xl font-bold flex gap-3">
                  <FaMapLocationDot size={30} className="text-blue-900" />
                  Visit us :
                </p>
                <p className="text-sm text-gray-600">
                  Come say hello at our office
                </p>
                <p className="text-sm font-bold">
                  Business Center Building <br /> Jl. Ahmad Yani No. 45
                  <br />
                  Bojonegoro, East Java 62112, Indonesia
                </p>
              </div>
              <div className="bg-white shadow-lg flex flex-col justify-around rounded-lg h-40 p-5">
                <p className="text-xl font-bold flex gap-3">
                  <FaRegClock size={30} className="text-blue-900" />
                  Operational Time :{" "}
                </p>
                <p className="text-sm font-bold">Monday - Sunday</p>
                <p className="text-sm font-bold">08:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-around gap-5 md:p-5 space-y-2">
            <div className="flex gap-4 w-full">
              <div className="w-full">
                <label className="font-semibold">Your Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="  w-full py-2 rounded-lg bg-white shadow-lg px-2"
                ></input>
              </div>
              <div className="w-full">
                <label className="font-semibold">Your Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="  w-full py-2 rounded-lg bg-white shadow-lg px-2"
                ></input>
              </div>
            </div>
            <div className="w-full">
              <label className="font-semibold">Your Services</label>
              <input
                type="text"
                placeholder="Yout Service Chosee"
                className="  w-full rounded-lg bg-white shadow-lg py-2 px-2"
              ></input>
            </div>
            <div>
              <label className="font-semibold">Your Message</label>
              <input
                type="text-area"
                placeholder="Message"
                className="  w-full rounded-lg bg-white shadow-lg pb-32 px-2"
              ></input>
            </div>
            <div>
              <button className="bg-blue-900 text-white hover:bg-white hover:text-black transition duration-200 py-4 w-full rounded-lg px-4 ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
