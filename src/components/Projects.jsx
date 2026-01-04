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
                            className={`px-6 py-3 rounded-xl border transition-all duration-300 font-medium ${
                                filter === filterItem.id
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
                            className="group"
                        >
                            <motion.div
                                animate={{
                                    y: hoveredProject === project.id ? -8 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        animate={{
                                            scale: hoveredProject === project.id ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />

                                    {/* Category Badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="absolute top-4 left-4"
                                    >
                                        <span className="px-3 py-1 bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-gray-700">
                                            {project.category}
                                        </span>
                                    </motion.div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredProject === project.id ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex items-end p-6"
                                    >
                                        <div className="space-y-4 w-full">
                                            <div className="flex gap-3">
                                                <motion.a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm gap-2"
                                                >
                                                    <Eye size={16} />
                                                    Live Demo
                                                </motion.a>
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900/80 border border-gray-700 text-white rounded-lg font-medium text-sm gap-2"
                                                >
                                                    <Github size={16} />
                                                    Code
                                                </motion.a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white">
                                            {project.title}
                                        </h3>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 90 }}
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </motion.a>
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2">
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
                                                className="px-3 py-1 bg-gray-900/50 border border-gray-700 rounded-full text-xs font-medium text-gray-300"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Gradient Border Effect */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                    animate={{
                                        opacity: hoveredProject === project.id ? 0.1 : 0,
                                    }}
                                />
                            </motion.div>

                            {/* Floating Icon */}
                            <motion.div
                                className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl z-10 border border-white/10"
                                animate={{
                                    scale: hoveredProject === project.id ? [1, 1.1, 1] : 1,
                                    rotate: hoveredProject === project.id ? [0, 10, -10, 0] : 0,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: hoveredProject === project.id ? Infinity : 0,
                                }}
                            >
                                <span className="text-white text-lg">{project.icon}</span>
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
                        className="inline-flex items-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-medium rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all duration-300 group"
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