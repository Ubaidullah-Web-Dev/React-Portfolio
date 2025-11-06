import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section
      className="relative z-10 bg-black text-white bg-cover bg-center bg-fixed lg:bg-size-[auto_105%] bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-image-3.jpg')",
        backgroundPosition: "center",
      }}
    >

      <div data-aos="fade-up" data-aos-delay="100" className="relative container mx-auto px-6 py-28 md:py-40 flex flex-col items-start justify-center">
        <p className="text-white font-extrabold uppercase text-md">Hello</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          I’m <span className="text-white">Ubaidullah</span>
        </h1>

        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600">
          <ReactTyped
            strings={[
              "A Developer.",
              "A Coder.",
              "A Thinker.",
            ]}
            typeSpeed={70}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </h2>

        <p className="text-gray-100 text-md md:text-lg max-w-xl leading-relaxed mt-4">
          Front-end creativity brought to life
          with clean visuals and joyful interactions.
        </p>
        <button
          className="relative mt-8 bg-pink-600 text-white font-semibold px-6 py-3 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
          <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
            View Projects
          </span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
