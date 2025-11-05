import React from "react";
import Tilt from "react-parallax-tilt";

function LatestPortfolio() {
    return (
        <section className="bg-black text-white pb-20 md:py-28">
            <div className="container mx-auto px-6 text-center">
                <p
                    data-aos="fade-left"
                    data-aos-delay="100"
                    className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-2"
                >
                    Latest Projects
                </p>
                <h2
                    data-aos="fade-left"
                    data-aos-delay="200"
                    className="text-3xl md:text-5xl font-extrabold mb-4"
                >
                    Transforming Ideas into Functional Web Experiences
                </h2>
                <p
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base"
                >
                    A collection of my front-end projects built with creativity, clean code,
                    and a strong focus on smooth user experience and responsive design.
                </p>
                <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    <button className="px-4 py-2 rounded-full bg-pink-600 text-white text-sm font-medium">
                        All
                    </button>
                    <button className="px-4 py-2 rounded-full bg-zinc-900 text-gray-300 hover:bg-pink-600 hover:text-white transition">
                        UI Design
                    </button>
                    <button className="px-4 py-2 rounded-full bg-zinc-900 text-gray-300 hover:bg-pink-600 hover:text-white transition">
                        Web Apps
                    </button>
                    <button className="px-4 py-2 rounded-full bg-zinc-900 text-gray-300 hover:bg-pink-600 hover:text-white transition">
                        Animations
                    </button>
                    <button className="px-4 py-2 rounded-full bg-zinc-900 text-gray-300 hover:bg-pink-600 hover:text-white transition">
                        Responsive
                    </button>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ec4899"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl bg-linear-to-b from-zinc-900 to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500"
                    >
                        <div className="relative group overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="/tab-image-1.png"
                                alt="Portfolio Project"
                                className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-gray-200 text-sm">Web Development</p>
                                <h3 className="font-bold text-lg mb-2">Interactive Landing Page</h3>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ec4899"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl bg-linear-to-b from-zinc-900 to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500"
                    >
                        <div className="relative group overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="/tab-image-2.png"
                                alt="UI Showcase"
                                className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-gray-200 text-sm">UI / UX Design</p>
                                <h3 className="font-bold text-lg mb-2">Creative Dashboard UI</h3>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ec4899"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl bg-linear-to-b from-zinc-900 to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500"
                    >
                        <div className="relative group overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="/tab-image-3.png"
                                alt="Modern Portfolio"
                                className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-gray-200 text-sm">Web App</p>
                                <h3 className="font-bold text-lg mb-2">Modern Portfolio Website</h3>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ec4899"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl bg-linear-to-b from-zinc-900 to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500"
                    >
                        <div className="relative group overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="/tab-image-4.png"
                                alt="Animation Project"
                                className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-gray-200 text-sm">Animations</p>
                                <h3 className="font-bold text-lg mb-2">Smooth UI Interactions</h3>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ec4899"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl bg-linear-to-b from-zinc-900 to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500"
                    >
                        <div className="relative group overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="/tab-image-5.png"
                                alt="Responsive Design"
                                className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-gray-200 text-sm">Responsive Design</p>
                                <h3 className="font-bold text-lg mb-2">Mobile-First Layouts</h3>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#ec4899"
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="rounded-2xl bg-linear-to-b from-zinc-900 to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500"
                    >
                        <div className="relative group overflow-hidden rounded-2xl bg-zinc-900">
                            <img
                                src="/tab-image-6.png"
                                alt="Frontend Showpiece"
                                className="w-full h-max object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-pink-600/90 via-black/70 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-gray-200 text-sm">Front-End Dev</p>
                                <h3 className="font-bold text-lg mb-2">Showcase Web Project</h3>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
}

export default LatestPortfolio;
