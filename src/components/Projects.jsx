import{motion} from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Projects = () => {
    return <motion.section
        id='projects'
        className="projects"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
    >
        <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView='animate'
            viewport={{once: true}}
        >My Projects

            <motion.div
                className='project-grid'
                variants={staggerContainer}
                initial="initial"
                whileInView='animate'
                viewport={{once: true}}
            >
                <motion.div
                    className='project-card'
                    variants={fadeInUp}
                    whileHover={{y: -10, transition: { duration: 0.2 }}}
                >

                    <motion.div>
                        <h3>AI SaaS Platform</h3>
                    </motion.div>

                </motion.div>

            </motion.div>

        </motion.h2>

    </motion.section>
};

export default Projects;