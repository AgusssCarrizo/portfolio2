import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Fondo";
import Project from "./pages/Project/Project";

function App() {
   return (
      <BrowserRouter>
         <div>
            <video
               autoPlay
               loop
               muted
               src="https://res.cloudinary.com/diotu9grj/video/upload/v1708667992/video_ezbzlk.mp4"
               className="top-0 left-0 w-full h-full object-cover -z-10  fixed"
            />
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 "></div>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Proyectos" element={<Project />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
