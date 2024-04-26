import React, { useRef } from 'react';

import { FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";


export default function Contact() {
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4   ">
      <div className="max-w-7xl w-full  rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border-2 border-gray-300 dark:border-teal-800 dark:b_glow">
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-12">Contact Us</h1>
          <p className="mb-12 text-6xl-nowrap ">
          Suntem aici pentru a vă oferi toate resursele și suportul necesar pentru a naviga cu succes prin acest capitol important al vieții voastre. Pentru orice eventuale neclaritati, nu ezitați să ne contactați.
          </p>
          <div className="space-y-6">
            <div className="flex items-center  ">
            <FaPhone className="text-teal-600 mr-3 text-xl" />
              <span>+40 756 189 430</span>
            </div>
            <div className="flex items-center ">
            <IoMdMail  className="text-teal-600 mr-3 text-xl"/>
              <span>flaviuscarpean@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-start space-x-4 text-teal-600 text-2xl mt-52 gap-2">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <input
              className=" w-full lg:my-3 my-4 rounded-lg dark:bg-slate-800 p-4 border-2 dark:border-teal-800 dark:b_glow text-xl dark:text-slate-500"
              type="text"
              placeholder="Your name"
            />
            <input
              className="w-full lg:my-3 my-4 rounded-lg dark:bg-slate-800 p-4 border-2 dark:border-teal-800 dark:b_glow text-xl dark:text-slate-500"
              type="email"
              placeholder="Email Address"
            />
            <textarea
              className="w-full my-3 rounded-lg dark:bg-slate-800 p-4 border-2 dark:border-teal-800 dark:b_glow text-xl dark:text-slate-500"
              name = "" id="" cols="30" rows="10"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            className="neno-button shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50   dark:border-teal-800 dark:bg-teal-800  dark:hover:bg-slate-900 hover:shadow-slate-300/50   border-slate-300 bg-slate-300  hover:bg-slate-100 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden dark:b_glow text-text-xl text-bold mb-10"
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
}
