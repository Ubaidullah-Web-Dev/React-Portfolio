import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import useSound from "use-sound";

function Contact() {
    const { contactpage } = useSiteData();

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_4hiq1cn",
            "template_qdmwea2",
            {
                from_name: nameRef.current.value,
                reply_to: emailRef.current.value,
                message: messageRef.current.value,
            },
            "p7nwcYQBXrrMyBzXd"
        );
    };
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden transition-colors duration-500"
            >
                <div data-aos="fade-up" data-aos-delay="100" className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold text-pink-600 dark:text-pink-500 mb-4 tracking-tight">
                        {contactpage.title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-400 text-lg max-w-xl mx-auto">
                        {contactpage.description}
                    </p>
                </div>
                <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareEnable
                    glareMaxOpacity={0.25}
                    className="w-full max-w-2xl"
                >
                    <form
                        onSubmit={sendEmail}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className={
                            "bg-white/90 dark:bg-zinc-800/80 " +
                            "border border-gray-300 dark:border-zinc-700 " +
                            "hover:border-pink-600 dark:hover:border-pink-500 " +
                            "transition-all duration-500 rounded-2xl p-8 shadow-2xl backdrop-blur-md space-y-6"
                        }
                    >
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-pink-400">
                                Full Name
                            </label>
                            <input
                                ref={nameRef}
                                type="text"
                                placeholder="Enter your name"
                                className={
                                    "w-full p-3 rounded-lg " +
                                    "bg-white/90 dark:bg-zinc-900/80 " +
                                    "border border-gray-300 dark:border-zinc-700 " +
                                    "focus:outline-none focus:border-pink-500 dark:focus:border-pink-500 " +
                                    "text-black dark:text-white placeholder-gray-500 transition-all duration-300"
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-pink-400">
                                Email Address
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="Enter your email"
                                className={
                                    "w-full p-3 rounded-lg " +
                                    "bg-white/90 dark:bg-zinc-900/80 " +
                                    "border border-gray-300 dark:border-zinc-700 " +
                                    "focus:outline-none focus:border-pink-500 dark:focus:border-pink-500 " +
                                    "text-black dark:text-white placeholder-gray-500 transition-all duration-300"
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-pink-400">
                                Message
                            </label>
                            <textarea
                                ref={messageRef}
                                rows="5"
                                placeholder="Write your message here..."
                                className={
                                    "w-full p-3 rounded-lg " +
                                    "bg-white/90 dark:bg-zinc-900/80 " +
                                    "border border-gray-300 dark:border-zinc-700 " +
                                    "focus:outline-none focus:border-pink-500 dark:focus:border-pink-500 " +
                                    "text-black dark:text-white placeholder-gray-500 transition-all duration-300 resize-none"
                                }
                            ></textarea>
                        </div>
                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                className={
                                    "relative bg-pink-600 text-white px-10 py-3 rounded-full font-semibold overflow-hidden group " +
                                    "transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]"
                                }
                            >
                                <span className="absolute inset-0 bg-pink-700/80 scale-0 rounded-full opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out origin-center group-hover:scale-150"></span>
                                <span className="absolute inset-0 rounded-full border border-pink-400/40 opacity-0 group-hover:animate-ping"></span>
                                <span className="relative z-10 font-semibold tracking-wide group-hover:scale-105 transition-transform duration-300">
                                    Send Message
                                </span>
                            </button>
                        </div>
                    </form>
                </Tilt>
            </motion.section>
        </>
    );
}

export default Contact;
