import React from "react";
import "./ComponentsCSS/hero.css";

const Hero = () => {
  return (
    <div className="text-white pb-5">
      <div className="max-w-[950px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          <div className="inprogress">
            <span>S</span>
            <span>T</span>
            <span>R</span>
            <span>O</span>
            <span>N</span>
            <span>A</span>
            <span>W</span>
            <span>B</span>
            <span>U</span>
            <span>D</span>
            <span>O</span>
            <span>W</span>
            <span>I</span>
            <span>E</span>
          </div>
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Blacksmith Stone.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-4xl text-xl font-bold py-4">
            Foundry of Ideas, Forge of Technology!
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Where Visionaries Meet Developers: Transforming Ideas into Digital
          Brilliance.
        </p>
        <p className="md:text-2xl text-xl font-bold text-gray-500"></p>
      </div>
    </div>
  );
};

export default Hero;
