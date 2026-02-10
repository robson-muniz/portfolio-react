'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Eye, ArrowRight, Code } from 'lucide-react';
import projectsData from "../data/projectsData.js";

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [filter, setFilter] = useState("all");

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Apps" },
        { id: "fullstack", label: "Full Stack" },
    ];

    const filteredProjects = projectsData.filter(project =>
        filter === "all" || project.category === filter
    );

    // Color scheme for categories
    const categoryColors = {
        web: "from-blue-500 to-cyan-500",
        fullstack: "from-purple-500 to-pink-500",
        mobile: "from-emerald-500 to-teal-500"
    };

    return (
        <section
            id="projects"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header - Clean and professional */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-4"
                    >
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider uppercase">
                            Portfolio
                        </span>
                        <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-gray-900 dark:text-white">Selected </span>
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A collection of my recent work showcasing clean code, modern design, and effective solutions.
                    </p>
                </motion.div>

                {/* Filters - Minimal design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center gap-2 mb-12"
                >
                    {filters.map((filterItem) => (
                        <motion.button
                            key={filterItem.id}
                            onClick={() => setFilter(filterItem.id)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${filter === filterItem.id
                                ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {filterItem.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid - Clean card design */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => {
                        const categoryColor = categoryColors[project.category] || "from-blue-500 to-cyan-500";

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group"
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">

                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                                        {/* Gradient overlay for better contrast */}
                                        <div className={`absolute inset-0 bg-gradient-to-t ${categoryColor} opacity-5 z-10`} />

                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            animate={{
                                                scale: hoveredProject === project.id ? 1.05 : 1,
                                            }}
                                            transition={{ duration: 0.6 }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = `
                                                    <div class="w-full h-full flex items-center justify-center bg-gradient-to-br ${categoryColor} bg-opacity-10">
                                                        <div class="text-center p-4">
                                                            <div class="text-3xl mb-2">${project.icon}</div>
                                                            <div class="text-gray-900 dark:text-white font-semibold">${project.title}</div>
                                                        </div>
                                                    </div>
                                                `;
                                            }}
                                        />

                                        {/* Category indicator */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className={`px-3 py-1 bg-gradient-to-r ${categoryColor} text-white text-xs font-medium rounded-full`}>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* View button on hover */}
                                        <motion.div
                                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                                            initial={false}
                                            animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                        >
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium flex items-center gap-2"
                                                onClick={() => window.open(project.link, '_blank')}
                                            >
                                                <Eye size={16} />
                                                View Project
                                            </motion.button>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {project.title}
                                            </h3>
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className="text-gray-400 hover:text-blue-500 transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </motion.a>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-1">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack - Clean tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.slice(0, 4).map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                    className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded">
                                                    +{project.tech.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Buttons - Clean design */}
                                        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm gap-2 hover:opacity-90 transition-opacity"
                                            >
                                                <Eye size={16} />
                                                Live Demo
                                            </motion.a>
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                            >
                                                <Github size={16} />
                                                Code
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View More - Minimal CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Want to see more? Check out my complete portfolio on GitHub
                    </p>
                    <motion.a
                        href="https://github.com/robson-muniz"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600"
                    >
                        <Github size={18} />
                        View All Projects
                        <ArrowRight size={16} className="ml-1" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;