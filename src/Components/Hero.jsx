import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch("/data/hero.json")
      .then(res => res.json())
      .then(data => setHeroData(data));
  }, []);

  if (!heroData) return null;
  return (
    <section
      className="relative z-10 bg-black text-white bg-cover bg-center bg-fixed lg:bg-size-[auto_105%] bg-no-repeat"
      style={{
        backgroundImage: `url('${heroData.backgroundImage}')`,
        backgroundPosition: "center",
      }}
    >
      <div data-aos="fade-up" data-aos-delay="100" className="relative container mx-auto px-6 py-28 md:py-40 flex flex-col items-start justify-center">
        <p>this is a para</p>
        <p className="text-white font-extrabold uppercase text-md">
          {heroData.greeting}
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          I’m <span className="text-white">{heroData.name}</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600">
          <ReactTyped
            strings={heroData.typedText}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </h2>
        <p className="text-gray-100 text-md md:text-lg max-w-xl leading-relaxed mt-4">
          {heroData.description}
        </p>
        <button
          className="relative mt-8 bg-pink-600 text-white font-semibold px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
          <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
            {heroData.buttonLabel}
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
