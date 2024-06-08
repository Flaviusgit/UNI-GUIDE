import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsDiscord  } from 'react-icons/bs';
import { IoMdMail } from "react-icons/io";
import { Alert } from 'flowbite-react';

export default function Contact() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = e.target.elements;

    if (!user_name.value.trim() || !user_email.value.trim() || !message.value.trim()) {
      setAlertMessage('Te rugam sa completezi toate campurile.');
      setShowAlert(true);
      return;
    }

    emailjs
      .sendForm('service_t74f1ze', 'template_6qhvfrk', form.current, {
        publicKey: 'Q2Lf68tPqKVh1HCIg',
      })
      .then(
        () => {
          setAlertMessage('Mesajul a fost trimis cu succes');
          setShowAlert(true);
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border-2 border-gray-300 dark:border-teal-800 dark:b_glow">
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-12">Contacteaza-ne</h1>
          <p className="mb-12 text-6xl-nowrap">
            Suntem aici pentru a vă oferi toate resursele și suportul necesar pentru a naviga cu succes prin acest capitol important al vieții voastre. Pentru orice eventuale neclarități, nu ezitați să ne contactați.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaPhone className="text-teal-600 mr-3 text-xl" />
              <span>+40 786 184 946</span>
            </div>
            <div className="flex items-center">
              <IoMdMail className="text-teal-600 mr-3 text-xl" />
              <span>flaviuscarpean@gmail.com</span>
            </div>
          </div>
          <div className="flex justify-start space-x-4 text-teal-600 text-2xl lg:mt-36 md:mt-24 sm:mt-12 mt-8 gap-2">
            <a href="https://www.facebook.com/flavius.carpean/">
              <BsFacebook />
            </a>
            <a href="https://discord.gg/5YhvZskB">
              <BsDiscord  />
            </a>
            <a href="https://www.instagram.com/flavius.carpean/">
              <BsInstagram/>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="w-full lg:my-3 my-4 rounded-lg dark:bg-slate-800 p-4 border-2 dark:border-teal-800 text-xl dark:text-slate-500"
              type="text"
              name="user_name"
              placeholder="Nume"
            />
            <input
              className="w-full lg:my-3 my-4 rounded-lg dark:bg-slate-800 p-4 border-2 dark:border-teal-800 text-xl dark:text-slate-500"
              type="email"
              name="user_email"
              placeholder="Email "
            />
            <textarea
              className="w-full my-3 rounded-lg dark:bg-slate-800 p-4 border-2 dark:border-teal-800  text-xl dark:text-slate-500"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Scrie..."
            ></textarea>
            <button
              className="neno-button w-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden text-text-xl text-bold mb-10"
              type="submit"
            >
              TRIMITE MESAJUL
            </button>
          </form>
          {showAlert && (
            <Alert
              variant="error"
              title="Alert"
              onClose={() => setShowAlert(false)}
            >
              {alertMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
