import Tilt from "react-parallax-tilt";

function EducationExperience() {
    return (
        <section className="bg-black text-white py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div data-aos="fade-left" data-aos-delay="100" className="text-center mb-16">
                    <p className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-2">
                        Education & Experience
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        Growing Skills Through Code & Creativity
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        A journey of continuous learning — from foundational studies to building unique
                        and performance-driven web experiences.
                    </p>
                </div>

                {/* Education */}
                <div data-aos="fade-right" data-aos-delay="150" className="mb-6 flex items-center gap-2">
                    <h3 className="text-xl font-bold">Education</h3>
                    <div className="h-px w-12 bg-gray-600"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="bg-zinc-900 hover:bg-pink-600/30 transition-colors duration-300 p-6 rounded-2xl border border-gray-700 hover:border-pink-600">
                            <h4 className="font-semibold mb-1">Bachelor in Computer Science</h4>
                            <p className="text-gray-300 text-sm font-semibold mb-2">2019 – 2023</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Built strong fundamentals in programming, web technologies,
                                and problem-solving with hands-on project development.
                            </p>
                        </div>
                    </Tilt>

                    <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="bg-zinc-900 hover:bg-pink-600/30 transition-colors duration-300 p-6 rounded-2xl border border-gray-700 hover:border-pink-600">
                            <h4 className="font-semibold mb-1">Frontend Development Course</h4>
                            <p className="text-gray-300 text-sm font-semibold mb-2">2023 – Present</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Specialized in HTML, CSS, JavaScript, React, Tailwind, and UI best practices,
                                ensuring strong design + development workflow.
                            </p>
                        </div>
                    </Tilt>
                </div>

                {/* Experience */}
                <div data-aos="fade-up" data-aos-delay="150" className="mb-6 mt-16 flex items-center gap-2">
                    <h3 className="text-xl font-bold">Experience</h3>
                    <div className="h-px w-12 bg-gray-600"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
                    <div>
                        <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <div className="mb-10 p-6 bg-zinc-900 rounded-2xl border border-gray-700 hover:border-pink-600 hover:bg-pink-600/30 transition-colors duration-300">
                                <p className="text-pink-600 uppercase font-semibold text-sm mb-1">Internship</p>
                                <h4 className="text-xl font-bold mb-1">Frontend Developer Intern</h4>
                                <p className="text-gray-300 text-sm font-semibold mb-3">Creative Web Agency — 6 Months</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Built responsive UI components, improved website performance,
                                    and collaborated with designers to create clean modern interfaces.
                                </p>
                            </div>
                        </Tilt>

                        <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <div className="p-6 bg-zinc-900 rounded-2xl border border-gray-700 hover:border-pink-600 hover:bg-pink-600/30 transition-colors duration-300">
                                <p className="text-pink-600 uppercase font-semibold text-sm mb-1">Freelance</p>
                                <h4 className="text-xl font-bold mb-1">React Developer</h4>
                                <p className="text-gray-300 text-sm font-semibold mb-3">2023 – Present</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Worked with clients to build landing pages, portfolio websites,
                                    and dashboards with focus on speed, usability & UI polish.
                                </p>
                            </div>
                        </Tilt>
                    </div>

                    {/* Right Side Image */}
                    <div data-aos="fade-up" data-aos-delay="300" className="relative h-full min-h-[400px] flex justify-center items-center">
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            glareEnable={true}
                            glareMaxOpacity={0.25}
                            glareColor="#ec4899"
                            transitionSpeed={1500}
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700 hover:border-pink-600 duration-500"
                        >
                            <div className="relative">
                                <img
                                    src="expert-img.jpg"
                                    alt="Frontend Developer at work"
                                    className="relative w-full h-full object-cover rounded-3xl scale-100 hover:scale-[1.02] transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationExperience;
