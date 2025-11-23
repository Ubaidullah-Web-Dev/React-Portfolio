import React from "react";
import { ReactTyped } from "react-typed";
import { useSiteData } from "../context/SiteDataContext";
import Tilt from "react-parallax-tilt";


function Hero() {
  const { hero } = useSiteData();

  return (
    <section
      className="relative z-10 bg-white dark:bg-black text-black dark:text-white bg-cover bg-no-repeat bg-fixed transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/40 dark:from-black/80 dark:via-black/50 dark:to-transparent transition-all duration-500"></div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative container mx-auto px-6 py-28 md:py-40 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex-1">
          <p className="text-gray-800 dark:text-gray-200 font-extrabold uppercase text-md">
            {hero.greetings}
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gray-800 dark:text-white">{hero.name}</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 dark:text-pink-600">
            <ReactTyped
              strings={hero.typed}
              typeSpeed={70}
              backSpeed={40}
              backDelay={1500}
              loop/>
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-md md:text-lg max-w-xl leading-relaxed mt-4">
            {hero.description}
          </p>
          <a href="https://github.com/MaroofSultan17" target="_blank" rel="noopener noreferrer">
            <button className="relative mt-8 bg-pink-600 dark:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
              <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
              <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
              <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
                {hero.button}
              </span>
            </button>
          </a>
        </div>
        <Tilt
          scale={1.05}
          transitionSpeed={2500}
          tiltMaxAngleX={20}
          tiltMaxAngleY={10}
          className="flex-1 flex lg:pe-20 justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-10 bg-pink-600/30 blur-[100px] rounded-full opacity-60"></div>
            <img
              src= "/Adobe Express - file.png"
              alt="Front-End Developer"
              className="relative border-2 border-dotted border-pink-600 z-10 w-96 sm:w-64 md:w-96 lg:w-[450px] object-contain hover:scale-105 transition-transform duration-700 ease-out rounded-full"
            />
          </div>
        </Tilt>
      </div>
    </section>

  );
}

export default Hero;
