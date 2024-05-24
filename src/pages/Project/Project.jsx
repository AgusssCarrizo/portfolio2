import React from "react";
import Imagen from "../About-me/components/Imagen";
import Cards from "./Components/Cards";
import {useState} from "react";
import {db} from "../../data";

export default function index() {
   const [data, setData] = useState(db);
   return (
      <div className="bg-white/30 px-10   flex flex-wrap  items-center justify-center gap-8 z-50  text-white font-chakra ">
         <div className="flex justify-between w-full fixed h-14 top-0 z-40 bg-black">
            <div>
               <h1>Agustin Carrizo</h1>
            </div>
            <div className="flex gap-5">
               <button>About</button>
               <button>CV</button>
            </div>
            <button>Contactame</button>
         </div>
         <div className="flex">
            <div className="fixed w-[25vw] left-5 hidden md:flex md:justify-center md:flex-col md:items-center h-80  top-10">
               <Imagen />
               <h1>hola</h1>
            </div>
            <div className="absolute right-5 w-[70vw]  top-20 ">
               <div className="flex justify-center my-4 text-blue-200">
                  PROYECTOS
               </div>
               <div className="flex gap-10 justify-center my-4">
                  <button className="btn bg-blue-900 hover:bg-blue-950 ">
                     Destacados
                  </button>
                  <button className="btn bg-blue-900 hover:bg-blue-950 ">
                     JavaScript
                  </button>
                  <button className="btn bg-blue-900 hover:bg-blue-950 ">
                     React
                  </button>
               </div>
               <div className="flex flex-wrap gap-20">
                  {data.map((project) => (
                     <Cards project={project} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
