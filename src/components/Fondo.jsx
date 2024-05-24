import React from "react";
import About from "../pages/About-me/About";

export default function Home() {
  return (
    <div className="absolute w-full min-h-screen px-20 py-10 flex justify-between items-center md:flex-row flex-col">
      <About />
    </div>
  );
}
