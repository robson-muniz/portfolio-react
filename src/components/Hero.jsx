import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
        { icon: <FaGithub className="text-lg sm:text-xl" />, href: "https://github.com/robson-muniz", label: "GitHub" },
        { icon: <FaLinkedin className="text-lg sm:text-xl" />, href: "https://www.linkedin.com/in/robsonmuniz/", label: "LinkedIn" },
        { icon: <FaXTwitter className="text-lg sm:text-xl" />, href: "https://x.com/WebDevMadeEasy", label: "Twitter" }
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 sm:space-y-6 text-center lg:text-left"
                >
                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm backdrop-blur-sm"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-green-400 rounded-full"
                        />
                        <span>Available for new projects</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
  Robson Muniz
</span>

                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-light"
                    >
                        Creative Developer & Designer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                    >
                        Transforming ideas into exceptional digital experiences. I build intuitive,
                        engaging web applications that merge beautiful design with powerful functionality.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 text-center flex items-center justify-center gap-2"
                        >
                            <span>View My Work</span>
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 sm:px-8 py-3 border-2 border-purple-500/50 rounded-xl text-purple-300 font-semibold hover:bg-purple-500/10 hover:border-purple-500/70 transition-all duration-300 text-center"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex gap-4 pt-6 justify-center lg:justify-start"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 shadow-lg"
                                aria-label={social.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
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
                    className="relative mt-8 lg:mt-0"
                >
                    <motion.div
                        className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl"
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(139, 92, 246, 0.3)',
                                '0 0 40px rgba(139, 92, 246, 0.5)',
                                '0 0 20px rgba(139, 92, 246, 0.3)'
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        whileHover={{ y: -5 }}
                    >
                        {/* Window Controls */}
                        <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-slate-900/80 border-b border-slate-700/50">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                            </div>
                            <span className="ml-4 text-xs sm:text-sm text-slate-400 font-mono">robson-muniz.js</span>
                        </div>

                        {/* Code Content */}
                        <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm max-h-80">
                            <code className="text-slate-300 font-mono leading-relaxed">
                                {codeSnippet}
                            </code>
                        </pre>
                    </motion.div>

                    {/* Floating Card - Hidden on small mobile */}
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl hidden sm:block border border-white/20"
                    >
                        <div className="flex items-center gap-2 sm:gap-3">
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-xl sm:text-2xl"
                            >
                                💻
                            </motion.span>
                            <div className="text-white">
                                <p className="text-xs sm:text-sm font-semibold">Currently Building</p>
                                <p className="text-xs opacity-90">Something Awesome!</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full scale-150"></div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-sm">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-slate-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;