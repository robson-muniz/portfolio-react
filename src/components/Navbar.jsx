import { motion } from 'framer-motion';

const Navbar = () => {

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

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.div
                className="logo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Portfolio
            </motion.div>

            <motion.ul
                className="nav-links"
                variants={staggerContainer}
                initial= "initial"
                animate="animate"
            >
                <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="home">Home</a>
                </motion.li>
                <motion.li
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a>Projects</a>
                    </motion.li>
                    <motion.li
                        variants={fadeInUp}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a>Contact</a>
                    </motion.li>
            </motion.ul>
        </motion.nav>
    );
}

export default Navbar;
