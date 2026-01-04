import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Palette, Database, Cloud, Zap, Cpu, Smartphone, Server, Layers, Terminal } from 'lucide-react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("frontend");

    const skillCategories = [
        {
            id: "frontend",
            title: "Frontend",
            icon: <Palette className="w-5 h-5" />,
            color: "from-purple-500 to-pink-500",
            skills: [
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Next.js", level: 88 },
                { name: "Tailwind CSS", level: 92 },
            ]
        },
        {
            id: "backend",
            title: "Backend",
            icon: <Server className="w-5 h-5" />,
            color: "from-blue-500 to-cyan-500",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "Python", level: 85 },
                { name: "PostgreSQL", level: 82 },
                { name: "MongoDB", level: 80 },
            ]
        },
        {
            id: "tools",
            title: "Tools & DevOps",
            icon: <Cloud className="w-5 h-5" />,
            color: "from-emerald-500 to-teal-500",
            skills: [
                { name: "Docker", level: 78 },
                { name: "AWS", level: 75 },
                { name: "Git", level: 92 },
                { name: "CI/CD", level: 80 },
            ]
        }
    ];

    const technologies = [
        { name: "React", icon: <Cpu className="w-6 h-6" />, category: "frontend" },
        { name: "TypeScript", icon: <Code className="w-6 h-6" />, category: "frontend" },
        { name: "Next.js", icon: <Layers className="w-6 h-6" />, category: "fullstack" },
        { name: "Node.js", icon: <Server className="w-6 h-6" />, category: "backend" },
        { name: "Python", icon: <Terminal className="w-6 h-6" />, category: "backend" },
        { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, category: "database" },
        { name: "MongoDB", icon: <Database className="w-6 h-6" />, category: "database" },
        { name: "Docker", icon: <Cloud className="w-6 h-6" />, category: "devops" },
        { name: "AWS", icon: <Cloud className="w-6 h-6" />, category: "cloud" },
        { name: "Tailwind", icon: <Palette className="w-6 h-6" />, category: "frontend" },
        { name: "GraphQL", icon: <Code className="w-6 h-6" />, category: "api" },
        { name: "Redis", icon: <Zap className="w-6 h-6" />, category: "cache" },
    ];

    const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

    return (
        <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

            {/* Animated grid */}
            <div className="absolute inset-0 grid-pattern opacity-5" />

            {/* Floating orbs */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />

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
                            <Code className="w-4 h-4 mr-2" />
                            Skills & Expertise
                        </span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="text-white">Technical </span>
                        <span className="gradient-text">
                            Proficiency
                        </span>
                    </h2>

                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable, and high-performance applications.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {skillCategories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl border transition-all duration-300 font-medium ${
                                activeCategory === category.id
                                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                                    : "bg-gray-800/50 backdrop-blur-sm border-gray-700 text-gray-300 hover:border-purple-500/50 hover:text-purple-400"
                            }`}
                        >
                            {category.icon}
                            {category.title}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Skills Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activeCategoryData.color} flex items-center justify-center`}>
                                {activeCategoryData.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">
                                    {activeCategoryData.title}
                                </h3>
                                <p className="text-gray-400">
                                    Expertise level
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {activeCategoryData.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="space-y-2"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-white">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm font-semibold text-purple-400">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                                            className={`h-full rounded-full bg-gradient-to-r ${activeCategoryData.color}`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technology Cloud */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center gap-3 hover:border-purple-500/30 transition-all duration-300 cursor-default shadow-lg"
                                    >
                                        <div className="text-purple-400">
                                            {tech.icon}
                                        </div>
                                        <span className="font-medium text-white">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Experience Stats */}
                        <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl p-6 border border-purple-500/10">
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Development Philosophy
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: "100%", label: "Code Quality", icon: "✓" },
                                    { value: "24/7", label: "Support", icon: "🕒" },
                                    { value: "Agile", label: "Methodology", icon: "⚡" },
                                    { value: "Test-Driven", label: "Development", icon: "🧪" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50"
                                    >
                                        <div className="text-2xl mb-2">{stat.icon}</div>
                                        <div className="text-xl font-bold text-purple-400">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;