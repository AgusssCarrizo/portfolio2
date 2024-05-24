import Imagen from "./components/Imagen";
import {Link} from "react-router-dom";

export default function About() {
   return (
      <div class=" bg-white/30 px-10 py-24 flex flex-col md:flex-row flex-wrap  items-center justify-center gap-8 z-50  w-full text-white font-chakra">
         <div className="flex flex-col lg:flex-row   gap-20">
            <div className=" flex flex-col gap-10 justify-center ">
               <Imagen />
               <button className="btn mx-auto ">Contactame</button>
            </div>
            <div className="flex flex-col justify-center gap-20">
               <div>
                  <h1 className="font-bold text-5xl mb-12 ">Agustin Carrizo</h1>
                  <p className="w-11/12  text-base lg:text-xl">
                     ¡Hola! Soy Agustin Carrizo, un apasionado del desarrollo
                     web con experiencia en tecnologías como React, Node.js,
                     Express y Redux. Mi habilidad para crear interfaces
                     interactivas y escalables utilizando HTML y CSS me permite
                     diseñar experiencias de usuario atractivas y funcionales.
                     Además de mis habilidades técnicas, poseo fuertes
                     habilidades blandas como comunicación efectiva, trabajo en
                     equipo y capacidad para resolver problemas, lo que me
                     permite colaborar de manera efectiva en proyectos y
                     adaptarme rápidamente a nuevos entornos. Estoy comprometido
                     con el aprendizaje continuo y siempre estoy buscando
                     oportunidades para mejorar y crecer profesionalmente.
                  </p>
               </div>
               <div className="flex gap-6 text-black">
                  <button>
                     <Link to="/Proyectos" className="btn gap-2   flex">
                        {" "}
                        Proyectos{" "}
                        <span>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-box-arrow-up-right"
                              viewBox="0 0 16 16">
                              <path
                                 fill-rule="evenodd"
                                 d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                              />
                              <path
                                 fill-rule="evenodd"
                                 d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                              />
                           </svg>
                        </span>{" "}
                     </Link>
                  </button>
                  <button className="btn ">
                     CV{" "}
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-download"
                        viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
