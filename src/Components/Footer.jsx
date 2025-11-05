import React from 'react';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

function Footer() {
    return (
        <footer className="bg-zinc-900 text-gray-400 py-16 md:py-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div data-aos="fade-up" data-aos-delay="200">
                    <div className="flex items-center mb-4">
                        <img src="emojione_star.png" alt="logo" className="w-8 h-8 object-contain" />
                        <span className="text-pink-600 text-3xl font-extrabold">Reeni</span>
                    </div>
                    <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-8">
                        Get Ready <br /> To Create <br /> Great
                    </h2>
                    <div className="relative border-b border-gray-700 pb-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-transparent w-full pr-10 text-white placeholder-gray-500 focus:outline-none"
                        />
                        <button className="absolute right-0 top-0 text-gray-500 hover:text-pink-600 transition-colors">
                            <FiMail className="text-xl" />
                        </button>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                    <h3 className="text-white text-xl font-bold mb-6">Quick Link</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="relative inline-block text-lg text-white/80
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">About Me</a>
                        </li>
                        <li>
                            <a href="#" className="relative inline-block text-lg text-white/80
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">Service</a>
                        </li>
                        <li>
                            <a href="#" className="relative inline-block text-lg text-white/80
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">Contact Me</a>
                        </li>
                        <li>
                            <a href="#" className="relative inline-block text-lg text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <h3 className="text-white font-bold text-left text-xl mb-6">Contact</h3>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center">
                            <FiMail className="text-pink-600 mr-3 text-lg" />
                            <a href="mailto:ubaidullah.web.dev@gmail.com" className="relative inline-block text-lg text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">ubaidullah.web.dev@gmail.com</a>
                        </li>
                        <li className="flex items-start">
                            <FiMapPin className="text-pink-600 mr-3 text-lg mt-1" />
                            <p className='relative inline-block text-lg text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[""] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full'>3891 Ranchview Dr. Richardson</p>
                        </li>
                        <li className="flex items-center">
                            <FiPhone className="text-pink-600 mr-3 text-lg" />
                            <a href="https://wa.me/923287231804" className="relative inline-block text-lg text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">03287231804</a>
                        </li>
                    </ul>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/ubaidullah-sajid-21792a383/"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-pink-600 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaLinkedinIn className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                        <a
                            href="https://github.com/Ubaidullah-Web-Dev?tab=repositories"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-pink-600 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaGithub className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                        <a
                            href="https://wa.me/923287231804"
                            className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-full bg-zinc-800 transition-colors group"
                        >
                            <span
                                className="absolute inset-0 rounded-full bg-pink-600 scale-0 transition-transform duration-500 ease-out origin-center group-hover:scale-100"
                            ></span>
                            <FaWhatsapp className="relative text-gray-400 text-lg transition-colors duration-300 group-hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="350" className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; InverseWeb 2025 | All Rights Reserved</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="relative inline-block text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">Terms & Condition</a>
                    <a href="#" className="relative inline-block text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</a>
                    <a href="#" className="relative inline-block text-white/80 
                                    transition-colors duration-300 
                                    hover:text-red-500
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-0 after:h-0.5 after:bg-red-500 
                                    after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;