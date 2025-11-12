import React from "react";
import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";

function LatestService() {
    const { service } = useSiteData();

    return (
        <section className="relative bg-white dark:bg-black text-black dark:text-white pt-20 pb-20 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div data-aos="fade-right" data-aos-delay="100" className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-3">
                        {service.caption}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        {service.title.first}<br />{service.title.second}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400">{service.description}</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
                        <Tilt glareEnable={true} glareMaxOpacity={0.3} tiltMaxAngleX={10} tiltMaxAngleY={10} className="rounded-2xl">
                            <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-500 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-pink-600 mr-2">01.</span>{service.left.card1.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">{service.left.card1.description}</p>
                            </div>
                        </Tilt>
                        <Tilt glareEnable={true} glareMaxOpacity={0.3} tiltMaxAngleX={10} tiltMaxAngleY={10} className="rounded-2xl">
                            <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-500 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-pink-600 mr-2">02.</span>{service.left.card2.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">{service.left.card2.description}</p>
                            </div>
                        </Tilt>
                        <Tilt glareEnable={true} glareMaxOpacity={0.3} tiltMaxAngleX={10} tiltMaxAngleY={10} className="rounded-2xl">
                            <div className="bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-500 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-pink-600 mr-2">03.</span>{service.left.card3.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400 text-sm">{service.left.card3.description}</p>
                            </div>
                        </Tilt>
                    </div>
                    <Tilt
                        scale={1.05}
                        transitionSpeed={2500}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="relative flex justify-center items-center">
                        <div data-aos="fade-up" data-aos-delay="200" className="relative">
                            <div className="absolute -inset-10  bg-pink-600/30 blur-[100px] rounded-full opacity-60"></div>
                            <img
                                src="/latest-services-user-image.png"
                                alt="Front-End Developer"
                                className="relative z-10 w-64 md:w-80 lg:w-96 object-contain hover:scale-105 transition-transform duration-700 ease-out"/>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
}

export default LatestService;
