import { motion } from "framer-motion";
import {useEffect, useState} from "react";

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "AI SaaS Platform",
            description: "A modern SaaS platform with Next.js and OpenAI integration, featuring real-time AI-powered content generation and analytics.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            tech: ["Next.js", "OpenAI", "TailwindCSS"],
            gradient: "from-blue-500 to-cyan-500",
            link: "#"
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            description: "A comprehensive social media management dashboard with analytics, scheduling, and engagement tracking features.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            tech: ["React", "Node.js", "MongoDB"],
            gradient: "from-purple-500 to-pink-500",
            link: "#"
        },
        {
            id: 3,
            title: "Productivity Timer",
            description: "A sleek productivity timer application with customizable work sessions, statistics tracking, and dark mode support.",
            image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
            tech: ["React", "TypeScript", "TailwindCSS"],
            gradient: "from-orange-500 to-red-500",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900/20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                            💼 Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A collection of my recent work, showcasing innovative solutions and creative implementations.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group relative"
                        >
                            <motion.div
                                animate={{
                                    y: hoveredProject === project.id ? -10 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden h-full"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        animate={{
                                            scale: hoveredProject === project.id ? 1.1 : 1
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                                    {/* Hover Overlay with Link */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        <motion.a
                                            href={project.link}
                                            initial={{ scale: 0.8 }}
                                            animate={{
                                                scale: hoveredProject === project.id ? 1 : 0.8
                                            }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium flex items-center gap-2"
                                        >
                                            View Project
                                            <span className="text-lg">→</span>
                                        </motion.a>
                                    </motion.div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <motion.h3
                                        animate={{
                                            color: hoveredProject === project.id ? '#fff' : '#e2e8f0'
                                        }}
                                        className="text-xl font-bold mb-3"
                                    >
                                        {project.title}
                                    </motion.h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Glow Effect */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 blur-xl -z-10`}
                                    animate={{
                                        opacity: hoveredProject === project.id ? 0.2 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            {/* Corner Accent */}
                            <motion.div
                                className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}
                                animate={{
                                    scale: hoveredProject === project.id ? [1, 1.5, 1] : 1,
                                    opacity: hoveredProject === project.id ? [0.5, 1, 0.5] : 0.5
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: hoveredProject === project.id ? Infinity : 0
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-500/50 rounded-lg text-purple-300 font-medium hover:bg-purple-500/10 transition-all"
                    >
                        View All Projects
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
