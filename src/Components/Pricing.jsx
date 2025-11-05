import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Pricing() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
        >
            <div data-aos="fade-up" data-aos-delay="100" className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-pink-500 mb-4 tracking-tight">
                    Our Pricing Plans
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                    Choose the perfect plan that fits your needs and start your journey with us today.
                </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} className="rounded-2xl">
                    <motion.div
                        data-aos="fade-up"
                        data-aos-delay="150"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-zinc-800 border border-gray-700 hover:border-pink-600 hover:bg-pink-600/20 transition-all duration-500 rounded-2xl p-8 text-center shadow-lg backdrop-blur-md"
                    >
                        <h2 className="text-2xl font-bold mb-4">Basic</h2>
                        <p className="text-4xl font-extrabold mb-6 text-pink-500">$19</p>
                        <p className="text-gray-400 mb-8">Perfect for individuals starting out.</p>
                        <button className="relative bg-pink-600 text-white font-semibold px-6 py-2 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                            <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
                            <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
                            <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
                                Choose Plan
                            </span>
                        </button>
                    </motion.div>
                </Tilt>
                <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} className="rounded-2xl">
                    <motion.div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-zinc-800 border border-gray-700 hover:border-pink-600 hover:bg-pink-600/20 transition-all duration-500 rounded-2xl p-8 text-center shadow-lg backdrop-blur-md"
                    >
                        <h2 className="text-2xl font-bold mb-4">Standard</h2>
                        <p className="text-4xl font-extrabold mb-6 text-pink-500">$49</p>
                        <p className="text-gray-400 mb-8">Great for growing freelancers or small teams.</p>
                        <button className="relative bg-pink-600 text-white font-semibold px-6 py-2 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                            <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
                            <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
                            <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
                                Choose Plan
                            </span>
                        </button>
                    </motion.div>
                </Tilt>
                <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} className="rounded-2xl">
                    <motion.div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="bg-zinc-800 border border-gray-700 hover:border-pink-600 hover:bg-pink-600/20 transition-all duration-500 rounded-2xl p-8 text-center shadow-lg backdrop-blur-md"
                    >
                        <h2 className="text-2xl font-bold mb-4">Premium</h2>
                        <p className="text-4xl font-extrabold mb-6 text-pink-500">$99</p>
                        <p className="text-gray-400 mb-8">Best for professionals who need more.</p>
                        <button className="relative bg-pink-600 text-white font-semibold px-6 py-2 rounded-full overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
                            <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
                            <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
                            <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
                                Choose Plan
                            </span>
                        </button>
                    </motion.div>
                </Tilt>
            </div>
        </motion.section>
    );
}

export default Pricing;
