import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    const skills = [
        { name: "React", level: 95, color: "#61DAFB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "TypeScript", level: 85, color: "#3178C6" },
        { name: "Node.js", level: 88, color: "#339933" },
        { name: "Python", level: 82, color: "#3776AB" },
        { name: "MongoDB", level: 80, color: "#47A248" },
        { name: "CSS/Sass", level: 92, color: "#1572B6" },
        { name: "Docker", level: 75, color: "#2496ED" },
    ];

    const technologies = [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "🔺" },
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "TypeScript", icon: "📘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" },
        { name: "Git", icon: "📱" },
        { name: "Figma", icon: "🎨" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById("skills");
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section
            id="skills"
            className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-900/20 overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(219,39,119,0.1)_0%,transparent_50%)] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="relative z-10 max-w-7xl mx-auto"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Skills & Technologies
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        Constantly learning and evolving with the latest technologies to create exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Skill Bars */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-lg"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-slate-100">
                            Proficiency Levels
                        </h3>

                        <div className="flex flex-col gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                                >
                                    <div className="flex justify-between mb-1 text-slate-200 font-medium">
                                        <span>{skill.name}</span>
                                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ delay: index * 0.1 + 0.8, duration: 1, ease: "easeOut" }}
                                            className="h-full rounded-full"
                                            style={{ background: skill.color }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technology Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 shadow-lg"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-slate-100">
                            Technologies & Tools
                        </h3>

                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.2 } }}
                                    className="flex flex-col items-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/40 cursor-default"
                                >
                                    <span className="text-2xl mb-2">{tech.icon}</span>
                                    <span className="text-sm font-medium text-slate-100 text-center">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills
