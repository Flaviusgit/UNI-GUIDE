import React from 'react';
import euImage from "../assets/eu.jpg"; 
import profaImage from "../assets/stanescu.jpg"
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export default function About() {
  return (
    <div className="py-10 px-5 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-10 text-teal-600 ">Misiunea Noastră</h1>
        <p className=" txt-base mb-8">Site-ul nostru are misiunea de a ajuta viitorii studenții să intre la cea mai de prestigiu facultate din Timisoara , oferindu-le o platformă unde pot găsi informații utile, pot comunica și pot colabora între ei. Aici pot posta întrebări și răspunsuri, pot comenta pe postările altor utilizatori și pot rezolva teste de admitere pentru a-și pregăti intrarea la facultate.</p>
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-600">Echipa Noastră</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out border-4 border-gray-300 dark:border-teal-800  hover:border-gray-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-full flex justify-center pt-6">
              <img src={euImage} alt="Flavius Cârpean" className="w-40 h-40 rounded-full border-4 border-white shadow-sm"/>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Flavius Cârpean</div>
              <p className="text-gray-500 text-base mb-4">Inginer Software</p>
              <p className="text-sm mb-4">Flavius este inginerul software care a creat acest site web, având experiență în domeniul tehnologiei informației. Absolvent al Facultății de Automatică și Calculatoare, Flavius aduce o contribuție valoroasă echipei  prin cunoștințele sale și pasiunea pentru dezvoltarea de software.</p>
              <div className="flex justify-center space-x-3 text-teal-600 text-2xl">
              <a href="https://www.facebook.com/flavius.carpean/">
              <BsFacebook />
              </a>
              <a href="https://www.instagram.com/flavius.carpean/">
              <BsInstagram/>
              </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out border-4 border-gray-300 dark:border-teal-800  hover:border-gray-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-full flex justify-center pt-6">
              <img src={profaImage} alt="Daniela Stănescu" className="w-40 h-40 rounded-full border-4 border-white shadow-sm transition-all"/>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Daniela Stănescu</div>
              <p className="text-gray-500 text-base mb-4">Profesor Universitar</p>
              <p className="text-sm mb-4">Daniela este un profesor universitar specializat în domeniul hardware-ului. Cu o vastă experiență în cercetarea și predarea acestor subiecte, Daniela contribuie la dezvoltarea profesională a studenților noștri și la promovarea cunoștințelor în domeniul tehnologic.</p>
              <div className="flex justify-center space-x-3 text-teal-600 text-2xl">
              <a href="https://www.facebook.com/flavius.carpean/">
              <BsFacebook />
              </a>
              <a href="https://www.instagram.com/flavius.carpean/">
              <BsInstagram/>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
