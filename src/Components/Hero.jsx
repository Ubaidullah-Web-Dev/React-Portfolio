import React from "react";
import { ReactTyped } from "react-typed";
import { useSiteData } from "../context/SiteDataContext";

function Hero() {
  const { hero } = useSiteData();

  return (
    <section
      className="relative z-10 bg-white dark:bg-black text-black dark:text-white bg-cover bg-center bg-fixed lg:bg-size-[auto_105%] bg-no-repeat transition-colors duration-500"
      style={{
        backgroundImage: "url('/bg-image-3.jpg')",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-black/40 dark:from-black/80 dark:via-black/50 dark:to-transparent backdrop-blur-[2px] transition-all duration-500"></div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative container mx-auto px-6 py-28 md:py-40 flex flex-col items-start justify-center">
        <p className="text-gray-300 dark:text-gray-200 font-extrabold uppercase text-md">
          {hero.greetings}
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-gray-400 dark:text-white">{hero.name}</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 dark:text-pink-600">
          <ReactTyped
            strings={hero.typed}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </h2>
        <p className="text-gray-400 dark:text-gray-300 text-md md:text-lg max-w-xl leading-relaxed mt-4">
          {hero.description}
        </p>
        <button className="relative mt-8 bg-pink-600 dark:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] dark:hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
          <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
          <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
          <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
            {hero.button}
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
