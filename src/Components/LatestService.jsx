import React from "react";
import Tilt from "react-parallax-tilt";

function LatestService() {
    return (
        <section className="relative bg-black text-white pt-20 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div data-aos="fade-right" data-aos-delay="100" className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-3">
                        What I Do
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Crafting Creative Front-End<br /> Web Experiences
                    </h2>
                    <p className="text-gray-400">
                        I design and develop responsive, user-friendly interfaces that bring ideas to life
                        through modern, interactive, and visually captivating web solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.3}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="rounded-2xl"
                        >
                            <div className="bg-zinc-900 border hover:bg-pink-600/30 transition-all duration-500 border-gray-700 hover:border-pink-600 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-pink-600 mr-2">01.</span> Modern UI Development
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    I craft visually appealing layouts using clean code, smooth animations,
                                    and a mobile-first approach to ensure an excellent user experience.
                                </p>
                            </div>
                        </Tilt>

                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.3}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="rounded-2xl"
                        >
                            <div className="bg-zinc-900 border hover:bg-pink-600/30 transition-all duration-500 border-gray-700 hover:border-pink-600 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-pink-600 mr-2">02.</span> Responsive Web Design
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Every project I build adapts perfectly to all device sizes — giving users a
                                    smooth and consistent experience on phones, tablets, and desktops.
                                </p>
                            </div>
                        </Tilt>

                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.3}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="rounded-2xl"
                        >
                            <div className="bg-zinc-900 border hover:bg-pink-600/30 transition-all duration-500 border-gray-700 hover:border-pink-600 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2">
                                    <span className="text-pink-600 mr-2">03.</span> Creative Interactions
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    From smooth animations to fun interactions — I make websites feel alive,
                                    memorable, and full of personality.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    <Tilt
                        scale={1.05}
                        transitionSpeed={2500}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="relative flex justify-center items-center"
                    >
                        <div data-aos="fade-up" data-aos-delay="200" className="relative">
                            <div className="absolute -inset-10 bg-pink-600/30 blur-[100px] rounded-full opacity-60"></div>
                            <img
                                src="/latest-services-user-image.png"
                                alt="Front-End Developer"
                                className="relative z-10 w-64 md:w-80 lg:w-96 object-contain hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
}

export default LatestService;
