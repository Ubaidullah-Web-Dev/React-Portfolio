// src/Components/ProjectShowcase.jsx
import React, { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { useSiteData } from "../context/SiteDataContext";

export default function ProjectShowcase() {
    const { projectspage } = useSiteData();

    return (
        <div className="mx-auto bg-white dark:bg-black text-black dark:text-white px-4 py-12">
            <h1 className="text-5xl font-extrabold mt-10 text-center text-pink-600 dark:text-pink-500 mb-4 tracking-tight">
                Projects
            </h1>
            <p className="text-gray-700 dark:text-gray-400 text-center mb-10 text-lg max-w-xl mx-auto">
                See the work i have done!!
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectspage?.map((item, i) => (
                    <ProjectCard key={i} project={item} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project }) {
    const containerRef = useRef();
    const imgRef = useRef();
    const [translateY, setTranslateY] = useState(0);

    const handleMouseEnter = () => {
        const containerHeight = containerRef.current.clientHeight;
        const imgHeight = imgRef.current.clientHeight;

        if (imgHeight <= containerHeight) return;

        const scrollDistance = imgHeight - containerHeight;

        setTranslateY(-scrollDistance);
    };

    const handleMouseLeave = () => {
        setTranslateY(0);
    };

    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            glareColor="#ec4899"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="rounded-2xl bg-gradient-to-b from-gray-100 dark:from-zinc-900 to-white dark:to-black border border-pink-700 p-4 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-500">
            <div
                ref={containerRef}
                className="relative group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 h-96"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img
                    ref={imgRef}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-[3000ms] ease-in-out"
                    style={{ transform: `translateY(${translateY}px)` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <p className="text-gray-200 text-sm">{project.category}</p>
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                </div>
            </div>
        </Tilt>
    );
}
