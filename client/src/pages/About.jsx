import React from 'react';
import euImage from "../assets/eu.jpg"; 
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="py-10 px-5 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-10 text-teal-600 ">Misiunea Noastră</h1>
        <p className=" text-xl mb-8">Site-ul nostru are misiunea de a ajuta viitorii studenții să intre la cea mai de prestigiu facultate din Timisoara, oferindu-le o platformă unde pot găsi informații utile, pot comunica și pot colabora între ei. Aici pot posta întrebări și răspunsuri, pot comenta pe postările altor utilizatori și pot rezolva teste de admitere pentru a-și pregăti intrarea la facultate.</p>
        <h2 className="text-3xl font-bold text-center mb-10 text-teal-600">Echipa Noastră</h2>
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out border-4 border-gray-300 dark:border-teal-800 hover:border-gray-500 hover:scale-105 hover:shadow-2xl">
            <div className="w-full flex justify-center pt-6">
              <img src={euImage} alt="Flavius Cârpean" className="w-40 h-40 rounded-full border-4 border-white shadow-sm"/>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Flavius Cârpean</div>
              <p className="text-gray-500 text-base mb-4">Inginer Software</p>
              <p className="text-xl mb-4">Flavius este inginerul software care a creat acest site web si se afla in conducerea echipei, având experiență în domeniul tehnologiei informației. Absolvent al Facultății de Automatică și Calculatoare, Flavius aduce o contribuție valoroasă echipei prin cunoștințele sale și pasiunea pentru dezvoltarea de software.</p>
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
        <div className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Despre Flavius</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-xl font-semibold">2020</h3>
                <p>
                 Absolvent al Liceului Tehnologic "Clisura Dunarii"
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-xl font-semibold">2020</h3>
                <p>
                  Admis la Facultatea de Automatica si Calculatoare
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-xl font-semibold">2022</h3>
                <p>
                  Angajat al companiei Continental Automotive 
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-xl font-semibold">2024</h3>
                <p>
                  Absolvent al Universitatii Politehnica din Timisoara, Facultatea de Automatica si Calculatoare
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300 ease-in-out"><Link to={'/contact'}>Contactează-ne</Link></button>
        </div> 
      </div>
    </div>
  );
}
