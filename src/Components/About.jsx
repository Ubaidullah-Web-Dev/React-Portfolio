import React from "react";
import Tilt from "react-parallax-tilt";
import { FaLock, FaPenNib, FaBullhorn } from "react-icons/fa";
import { useSiteData } from "../context/SiteDataContext";



function About() {
    const { about } = useSiteData();


    return (
        <section className="relative bg-black text-white pt-20 overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div data-aos="fade-up" data-aos-delay="100" className="relative flex flex-col space-y-6">
                    <div className="absolute -top-10 -left-20 w-72 h-72 bg-pink-700 rounded-full blur-[150px] opacity-70"></div>

                    <Tilt glareEnable={true} glareMaxOpacity={0.3} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="relative bg-linear-to-b from-pink-700/40 to-black/60 border border-gray-700 hover:border-pink-600 hover:bg-pink-600/30 transition-colors duration-300 rounded-2xl p-10 text-center shadow-lg backdrop-blur-md">
                            <h1 className="text-6xl font-extrabold mb-3">{about.left.card1.title}</h1>
                            <p className="text-2xl font-bold leading-snug">
                                {about.left.card1.description.first}<br />{about.left.card1.description.second}
                            </p>
                        </div>
                    </Tilt>

                    <Tilt glareEnable={true} glareMaxOpacity={0.3} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="relative bg-linear-to-b from-pink-700/20 to-black/60 border border-gray-700 hover:border-pink-600 hover:bg-pink-600/30 transition-colors duration-300 rounded-2xl p-6 flex items-center space-x-5 shadow-lg backdrop-blur-md">
                            <div className="w-14 h-14 rounded-full border border-pink-600 flex items-center justify-center">
                                <FaLock className="text-pink-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{about.left.card2.title}</h3>
                                <p className="text-gray-400 text-sm">{about.left.card2.description}</p>
                            </div>
                        </div>
                    </Tilt>
                </div>

                <div data-aos="fade-up" data-aos-delay="100" className="relative space-y-6 text-center md:text-left">
                    <div>
                        <p className="text-pink-600 font-semibold uppercase tracking-widest">
                            {about.right.caption}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
                            {about.right.title.first}<br />{about.right.title.second}
                        </h2>
                        <p className="text-gray-400 max-w-lg">{about.right.description}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="flex-1">
                            <div className="bg-zinc-900 border hover:bg-pink-600/30 transition-colors duration-300 border-gray-700 hover:border-pink-600 rounded-2xl p-6">
                                <div className="bg-pink-600 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                                    <FaPenNib />
                                </div>
                                <h4 className="font-bold text-lg">{about.right.card1.title}</h4>
                                <p className="text-gray-400 text-sm mt-2">{about.right.card1.description}</p>
                            </div>
                        </Tilt>

                        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="flex-1">
                            <div className="bg-zinc-900 border hover:bg-pink-600/30 transition-colors duration-300 border-gray-700 hover:border-pink-600 rounded-2xl p-6">
                                <div className="bg-pink-600 w-10 h-10 flex items-center justify-center rounded-full mb-3">
                                    <FaBullhorn />
                                </div>
                                <h4 className="font-bold text-lg">{about.right.card2.title}</h4>
                                <p className="text-gray-400 text-sm mt-2 pb-5">{about.right.card2.description}</p>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
