import {motion} from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Enhanced Hero Component
const Hero = () => {
    const codeSnippet = `const robsonMuniz = {
  name: "Robson Muniz",
  location: "📍 Coimbra, Portugal",
  role: "Full Stack Developer",
  passion: "Building digital experiences",
  available: true,
  skills: ["React", "Node.js", "TypeScript"],
  motto: "Code with purpose ✨"
};`;

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/robson-muniz", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/robsonmuniz/", label: "LinkedIn" },
        { icon: <FaXTwitter />, href: "https://x.com/WebDevMadeEasy", label: "Twitter" }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                    >
                        <span className="animate-pulse">●</span>
                        <span>Available for new projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl lg:text-7xl font-bold"
                    >
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Robson Muniz
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl lg:text-3xl text-slate-300 font-light"
                    >
                        Creative Developer & Designer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-400 text-lg leading-relaxed max-w-xl"
                    >
                        Transforming ideas into exceptional digital experiences. I build intuitive,
                        engaging web applications that merge beautiful design with powerful functionality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contacts"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border-2 border-purple-500/50 rounded-lg text-purple-300 font-medium hover:bg-purple-500/10 transition-all"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex gap-4 pt-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Code Display */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                >
                    <motion.div
                        className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl"
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(139, 92, 246, 0.3)',
                                '0 0 40px rgba(139, 92, 246, 0.5)',
                                '0 0 20px rgba(139, 92, 246, 0.3)'
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        {/* Window Controls */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-700/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="ml-4 text-xs text-slate-400">robson-muniz.js</span>
                        </div>

                        {/* Code Content */}
                        <pre className="p-6 overflow-x-auto text-sm">
                            <code className="text-slate-300 font-mono">
                                {codeSnippet}
                            </code>
                        </pre>
                    </motion.div>

                    {/* Floating Card */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">💻</span>
                            <div className="text-white">
                                <p className="text-sm font-medium">Currently Building</p>
                                <p className="text-xs opacity-90">Something Awesome!</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;