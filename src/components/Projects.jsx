import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';
import projectsData from "../data/projectsData.js";

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [filter, setFilter] = useState("all");

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Apps" },
        { id: "fullstack", label: "Full Stack" },
        { id: "mobile", label: "Mobile" }
    ];

    const filteredProjects = projectsData.filter(project =>
        filter === "all" || project.category === filter
    );

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

            {/* Animated grid */}
            <div className="absolute inset-0 grid-pattern opacity-5" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 font-medium">
                            💼 Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="text-white">Featured </span>
                        <span className="gradient-text">
                            Projects
                        </span>
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Selected work showcasing innovative solutions and creative implementations.
                    </p>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((filterItem) => (
                        <motion.button
                            key={filterItem.id}
                            onClick={() => setFilter(filterItem.id)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium ${filter === filterItem.id
                                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg"
                                : "bg-gray-800/50 backdrop-blur-sm border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-400"
                                }`}
                        >
                            {filterItem.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group relative"
                        >
                            <motion.div
                                animate={{
                                    y: hoveredProject === project.id ? -8 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full"
                            >
                                {/* Project Image - UPDATED SECTION */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                                    {/* Gradient overlays for better contrast */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-pink-900/30 z-10"
                                        animate={{
                                            opacity: hoveredProject === project.id ? 0.8 : 0.4,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                        animate={{
                                            scale: hoveredProject === project.id ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.8 }}
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = `
                                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                                                    <div class="text-center p-4">
                                                        <div class="text-4xl mb-2">${project.icon}</div>
                                                        <div class="text-white font-semibold">${project.title}</div>
                                                    </div>
                                                </div>
                                            `;
                                        }}
                                    />

                                    {/* Dark overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                                    {/* Additional subtle gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-pink-900/10 z-5" />

                                    {/* Category Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="absolute top-4 left-4 z-20"
                                    >
                                        <span className="px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/10">
                                            {project.category}
                                        </span>
                                    </motion.div>

                                    {/* Tech icons overlay */}
                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2">
                                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                                                className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-xs text-gray-300 border border-white/10"
                                            >
                                                {tech}
                                            </motion.div>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md text-xs text-gray-300 border border-white/10"
                                            >
                                                +{project.tech.length - 3}
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Hover Overlay - Enhanced */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-15"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredProject === project.id ? 0.7 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 90 }}
                                            className="text-gray-400 hover:text-purple-400 transition-colors flex-shrink-0 ml-2"
                                        >
                                            <ExternalLink size={20} />
                                        </motion.a>
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3 min-h-[60px]">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack - Full list */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <motion.span
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className="px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-lg text-xs font-medium text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-6 pt-6 border-t border-gray-700/50">
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gray-700/30 border border-gray-600/50 text-white rounded-xl font-medium text-sm gap-2 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 hover:bg-purple-500/10"
                                        >
                                            <Eye size={18} />
                                            Live Demo
                                        </motion.a>
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gray-700/30 border border-gray-600/50 text-white rounded-xl font-medium text-sm gap-2 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 hover:bg-purple-500/10"
                                        >
                                            <Github size={18} />
                                            Code
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Gradient Border Effect - Enhanced */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl pointer-events-none"
                                    animate={{
                                        boxShadow: hoveredProject === project.id
                                            ? '0 0 40px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)'
                                            : 'none',
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Shine effect on hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                                    initial={{ x: '-100%' }}
                                    animate={{
                                        x: hoveredProject === project.id ? '200%' : '-100%',
                                    }}
                                    transition={{ duration: 0.8 }}
                                />
                            </motion.div>

                            {/* Floating Icon - Enhanced */}
                            <motion.div
                                className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl z-20 border-2 border-white/20"
                                animate={{
                                    scale: hoveredProject === project.id ? [1, 1.2, 1] : 1,
                                    rotate: hoveredProject === project.id ? [0, 15, -15, 0] : 0,
                                    y: hoveredProject === project.id ? [-3, 3, -3] : 0,
                                }}
                                transition={{
                                    duration: hoveredProject === project.id ? 2 : 0.3,
                                    repeat: hoveredProject === project.id ? Infinity : 0,
                                }}
                            >
                                <span className="text-white text-xl">{project.icon}</span>
                                {/* Glow effect around icon */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 blur-sm"
                                    animate={{
                                        opacity: hoveredProject === project.id ? [0.5, 0.8, 0.5] : 0.5,
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="https://github.com/robson-muniz"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 text-white font-medium rounded-xl hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 group"
                    >
                        View All Projects on GitHub
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="ml-3 group-hover:translate-x-1 transition-transform"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;