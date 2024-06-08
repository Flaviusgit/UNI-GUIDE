import React from 'react';
import Project1 from "../assets/2poza.png";
import Project2 from "../assets/3poza.png";
import Project3 from "../assets/4poza.png";
import Project4 from "../assets/3poza.png";
import Project5 from "../assets/3poza.png"; 
import Project6 from "../assets/2poza.png"; 

const projectData = [
  {
    imgSrc: Project1,
    title: "Ghid pentru admitere",
    description: "Aplicație Full Stack pentru pregătirea de admitere bazată pe React, MongoDB, Express, Node.js",
    siteLink: "https://myblog-l5gg.onrender.com",
  },
  {
    imgSrc: Project2,
    title: "Pagină de prezentare pentru magazin de mobilă",
    description: "Aplicație cu design responsiv HTML/CSS pentru magazin online de mobilă de designer. HTML5, CSS3 (SCSS)",
    siteLink: "https://myblog-l5gg.onrender.com",

  },
  {
    imgSrc: Project3,
    title: "Pagină de prezentare pentru dezvoltatori front-end",
    description: "Aplicație cu design responsiv HTML/CSS pentru pagina de prezentare a unui dezvoltator front-end. HTML5, CSS3 (SCSS)",
    siteLink: "https://myblog-l5gg.onrender.com",

  },
  {
    imgSrc: Project4,
    title: "Aplicatie web pentru crearea propriului site",
    description: "Aplicație cu design responsiv HTML/CSS pentru redesign-ul site-ului tau. HTML5, CSS3 (SCSS)",
    siteLink: "https://myblog-l5gg.onrender.com",

  },
  {
    imgSrc: Project5,
    title: "Pagină de prezentare pentru afaceri noi",
    description: "Aplicație cu design interactiv UI cu React, demonstrând gestionarea dinamică a datelor și managementul stărilor.",
    siteLink: "https://myblog-l5gg.onrender.com",

  },
  {
    imgSrc: Project6,
    title: "Aplicație educațională interactivă",
    description: "Aplicație educațională captivantă dezvoltată cu Vue.js, incluzând quiz-uri și module de învățare interactivă.",
    siteLink: "https://myblog-l5gg.onrender.com",

  }
];

export default function Projects() {
  return (
    <div className="container m-auto px-4 sm:py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold ">Proiecte de Licență</h2>
        <p className="dark:text-gray-500 mt-2 text-xl">
          Mai jos puteți observa o serie de proiecte de licență realizate de absolvenții facultății de Automatică și Calculatoare, demonstrând potențialul pe care îl puteți atinge în urma finalizării studiilor acestei facultăți. Explorând proiectele prezentate puteți descoperi de ce facultatea noastră este cea mai bună alegere pentru performanță în domeniul tehnologiei.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 mt-11">
        <div className="border border-gray-300 dark:border-teal-800 dark:b_glowrounded-md p-5 flex-1">
          <img src={projectData[0].imgSrc} className="w-full h-auto" alt="Project 1"/>
          <h3 className="text-2xl font-semibold mt-8">{projectData[0].title}</h3>
          <p className="text-gray-400 text-sm mt-2">{projectData[0].description}</p>
          <div className="flex mt-12 gap-2">
            <button className="flex-1 text-sm py-3 bg-gradient-to-t rounded-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100">
              <a href={projectData[0].siteLink} target='_blank' rel='noopener noreferrer'>Catre site</a>
            </button>
            
          </div>
        </div>
        <div className="border border-gray-300 dark:border-teal-800 dark:b_glowrounded-md p-5 flex-1">
          <img src={projectData[1].imgSrc} className="w-full h-auto" alt="Project 2"/>
          <h3 className="text-2xl font-semibold mt-8">{projectData[1].title}</h3>
          <p className="text-gray-400 text-sm mt-2">{projectData[1].description}</p>
          <div className="flex gap-2 mt-12">
            <button className="flex-1 text-sm py-3 bg-gradient-to-t rounded-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100">
              <a href={projectData[1].siteLink} target='_blank' rel='noopener noreferrer'>Catre site</a>
            </button>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 mt-11">
        <div className="border border-gray-300 dark:border-teal-800 dark:b_glowrounded-md p-5 flex-1">
          <img src={projectData[2].imgSrc} className="w-full h-auto" alt="Project 3"/>
          <h3 className="text-2xl font-semibold mt-8">{projectData[2].title}</h3>
          <p className="text-gray-400 text-sm mt-2">{projectData[2].description}</p>
          <div className="flex gap-4 mt-12">
            <button className="flex-1 text-sm py-3 bg-gradient-to-t rounded-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100">
              <a href={projectData[2].siteLink} target='_blank' rel='noopener noreferrer'>Catre site</a>
            </button>
            
          </div>
        </div>
        <div className="border border-gray-300 dark:border-teal-800 dark:b_glow rounded-md p-5 flex-1">
          <img src={projectData[3].imgSrc} className="w-full h-auto" alt="Project 4"/>
          <h3 className="text-2xl font-semibold mt-8">{projectData[3].title}</h3>
          <p className="text-gray-400 text-sm mt-2">{projectData[3].description}</p>
          <div className="flex gap-2 mt-12">
            <button className="flex-1 text-sm py-3 rounded-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100">
              <a href={projectData[3].siteLink} target='_blank' rel='noopener noreferrer'>Catre site</a>
            </button>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 mt-11">
        <div className="border border-gray-300 dark:border-teal-800 dark:b_glow rounded-md p-5 flex-1">
          <img src={projectData[4].imgSrc} className="w-full h-auto" alt="Project 5"/>
          <h3 className="text-2xl font-semibold mt-8">{projectData[4].title}</h3>
          <p className="text-gray-400 text-sm mt-2">{projectData[4].description}</p>
          <div className="flex gap-2 mt-12">
            <button className="flex-1 text-sm py-3 rounded-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100">
              <a href={projectData[4].siteLink} target='_blank' rel='noopener noreferrer'>Catre site</a>
            </button>

          </div>
        </div>
        <div className="border border-gray-300 dark:border-teal-800 dark:b_glow rounded-md p-5 flex-1">
          <img src={projectData[5].imgSrc} className="w-full h-auto" alt="Project 6"/>
          <h3 className="text-2xl font-semibold mt-8">{projectData[5].title}</h3>
          <p className="text-gray-400 text-sm mt-2">{projectData[5].description}</p>
          <div className="flex gap-2 mt-12">
            <button className="flex-1 text-sm py-3 rounded-full shadow-xl dark:text-white border-2 dark:hover:shadow-teal-800/50 dark:border-teal-800 dark:bg-teal-800 dark:hover:bg-slate-900 hover:shadow-slate-300/50 border-slate-300 bg-slate-300 hover:bg-slate-100">
              <a href={projectData[5].siteLink} target='_blank' rel='noopener noreferrer'>Catre site</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
