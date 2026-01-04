import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight, Sparkles, Code, Zap, Cpu, Server } from 'lucide-react';

const Hero = () => {
    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/robson-muniz", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/robsonmuniz/", label: "LinkedIn" },
        { icon: <FaXTwitter />, href: "https://x.com/WebDevMadeEasy", label: "Twitter" }
    ];

    const techStack = [
        { icon: <Cpu className="w-4 h-4" />, name: "React" },
        { icon: <Code className="w-4 h-4" />, name: "TypeScript" },
        { icon: <Server className="w-4 h-4" />, name: "Node.js" },
        { icon: <Zap className="w-4 h-4" />, name: "Next.js" },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full"
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 bg-emerald-500 rounded-full"
                            />
                            <span className="text-sm font-medium text-purple-400">
                                Available for new projects
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold"
                            >
                                <span className="block text-white">
                                    Hi, I'm Robson
                                </span>
                                <span className="gradient-text">
                                    Full Stack Developer
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-gray-300 leading-relaxed max-w-xl"
                            >
                                I craft exceptional digital experiences using modern technologies.
                                Transforming complex challenges into elegant, scalable solutions.
                            </motion.p>
                        </div>

                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-3"
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ y: -3 }}
                                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 flex items-center gap-2"
                                >
                                    <div className="text-purple-400">
                                        {tech.icon}
                                    </div>
                                    <span className="text-sm font-medium text-gray-300">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden shine"
                            >
                                <span className="relative flex items-center gap-2">
                                    View My Work
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.span>
                                </span>
                            </motion.a>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="pt-8"
                        >
                            <p className="text-sm text-gray-400 mb-4">
                                Follow my journey
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                        className="w-12 h-12 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-300 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden"
                                        aria-label={social.label}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                        <span className="relative z-10">
                                            {social.icon}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Main visual container */}
                        <motion.div
                            className="relative bg-gray-800/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50"
                            animate={{
                                boxShadow: [
                                    '0 20px 40px rgba(168, 85, 247, 0.1)',
                                    '0 20px 40px rgba(236, 72, 153, 0.15)',
                                    '0 20px 40px rgba(168, 85, 247, 0.1)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-x-16 -translate-y-16" />
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full translate-x-16 translate-y-16" />

                            {/* Content */}
                            <div className="relative z-10 p-8">
                                {/* Code snippet */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <span className="text-sm text-gray-400 font-mono">developer.js</span>
                                    </div>
                                    <div className="bg-gray-900/50 rounded-xl p-6 overflow-x-auto border border-gray-700/50">
                                        <code className="text-gray-300 font-mono text-sm">
                                            {`const developer = {
  name: "Robson Muniz",
  role: "Full Stack Developer",
  skills: ["React", "TypeScript", "Node.js"],
  philosophy: "Clean code, scalable solutions",
  status: "Building amazing things 🚀"
};`}
                                        </code>
                                    </div>
                                </div>

                                {/* Feature cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: <Zap className="w-6 h-6" />, title: 'Fast', desc: 'Performance focused', color: 'text-yellow-400' },
                                        { icon: <Sparkles className="w-6 h-6" />, title: 'Modern', desc: 'Clean designs', color: 'text-purple-400' },
                                        { icon: <Server className="w-6 h-6" />, title: 'Scalable', desc: 'Robust architecture', color: 'text-blue-400' },
                                        { icon: <Code className="w-6 h-6" />, title: 'Clean Code', desc: 'Best practices', color: 'text-emerald-400' }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 shadow-lg"
                                        >
                                            <div className={`mb-2 ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="font-semibold text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-xl border border-white/10"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="font-semibold text-sm">Available</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center"
                        >
                            <div className="text-purple-400 text-lg">⚡</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center"
                        >
                            <div className="text-blue-400 text-lg">🎨</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;