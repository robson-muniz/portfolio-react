import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: { staggerChildren: 0.1 },
    },
};

const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Heading is separate from grid */}
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                My Projects
            </motion.h2>

            {/* Grid container outside the heading */}
            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {/* Project 1 */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div className="project-card" variants={fadeInUp} whileHover={{ y: -10 }}>
                        <motion.div
                            className="project-image"
                            style={{ backgroundImage: "url('/projects/ai-saas.png')" }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />
                        <h3>AI SaaS Platform</h3>
                        <p>
                            A modern SaaS platform built with Next.js and OpenAI integration,
                            featuring real-time AI-powered content generation and analytics.
                        </p>
                        <div className="project-tech">
                            <span>Next.js</span>
                            <span>OpenAI</span>
                            <span>TailwindCSS</span>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Project 2 */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('/projects/social-media.png')" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <h3>Social Media Dashboard</h3>
                    <p>
                        A comprehensive social media management dashboard with analytics,
                        scheduling, and engagement tracking features.
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>MongoDB</span>
                    </div>
                </motion.div>

                {/* Project 3 */}
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('/projects/stopwatch.png')" }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <h3>Productivity Timer</h3>
                    <p>
                        A sleek productivity timer application with customizable work
                        sessions, statistics tracking, and dark mode support.
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>TailwindCSS</span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Projects;
