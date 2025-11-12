import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";

function EducationExperience() {
    const { eduandexp } = useSiteData();

    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-20 md:py-28 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div
                    data-aos="fade-left"
                    data-aos-delay="100"
                    className="text-center mb-16">
                    <p className="text-pink-600 uppercase font-semibold tracking-widest text-sm mb-2">
                        {eduandexp.caption}
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        {eduandexp.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        {eduandexp.description}
                    </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="150" className="mb-6 flex items-center gap-2">
                    <h3 className="text-xl font-bold">Education</h3>
                    <div className="h-px w-12 bg-gray-400 dark:bg-gray-600"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-20">
                    <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="bg-gray-100 dark:bg-zinc-900 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-colors duration-300 p-6 rounded-2xl border border-gray-300 dark:border-gray-700 hover:border-pink-600">
                            <h4 className="font-semibold mb-1">{eduandexp.education.card1.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2">
                                {eduandexp.education.card1.time}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                                {eduandexp.education.card1.description}
                            </p>
                        </div>
                    </Tilt>
                    <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="bg-gray-100 dark:bg-zinc-900  transition-colors duration-300 p-6 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                            <h4 className="font-semibold mb-1">{eduandexp.education.card2.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-2">
                                {eduandexp.education.card2.time}
                            </p>
                            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                                {eduandexp.education.card2.description}
                            </p>
                        </div>
                    </Tilt>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="150"
                    className="mb-6 mt-16 flex items-center gap-2"
                >
                    <h3 className="text-xl font-bold">Experience</h3>
                    <div className="h-px w-12 bg-gray-400 dark:bg-gray-600"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
                    <div>
                        <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <div className="mb-10 p-6 bg-gray-100 dark:bg-zinc-900 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-colors duration-300">
                                <p className="text-pink-600 uppercase font-semibold text-sm mb-1">
                                    {eduandexp.experience.card1.caption}
                                </p>
                                <h4 className="text-xl font-bold mb-1">
                                    {eduandexp.experience.card1.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-3">
                                    {eduandexp.experience.card1.time}
                                </p>
                                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                                    {eduandexp.experience.card1.description}
                                </p>
                            </div>
                        </Tilt>
                        <Tilt glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                            <div className="p-6 bg-gray-100 dark:bg-zinc-900 rounded-2xl border border-gray-300 dark:border-gray-700 hover:bg-pink-600/20 dark:hover:bg-pink-500/20 hover:border-pink-500 dark:hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-colors duration-300">
                                <p className="text-pink-600 uppercase font-semibold text-sm mb-1">
                                    {eduandexp.experience.card2.caption}
                                </p>
                                <h4 className="text-xl font-bold mb-1">
                                    {eduandexp.experience.card2.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm font-semibold mb-3">
                                    {eduandexp.experience.card2.time}
                                </p>
                                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                                    {eduandexp.experience.card2.description}
                                </p>
                            </div>
                        </Tilt>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="relative h-full min-h-[400px] flex justify-center items-center">
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            glareEnable={true}
                            glareMaxOpacity={0.25}
                            glareColor="#ec4899"
                            transitionSpeed={1500}
                            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-700 hover:border-pink-600 duration-500">
                            <div className="relative">
                                <img
                                    src="expert-img.jpg"
                                    alt="Frontend Developer at work"
                                    className="relative w-full h-full object-cover rounded-3xl scale-100 hover:scale-[1.02] transition-transform duration-700 ease-out" />
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
