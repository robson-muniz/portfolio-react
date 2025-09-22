import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <motion.nav className="navbar" initial={{y: -100}} animate={{y: 0}} transition={{duration: 0.6, ease: "ease-out"}}>

        </motion.nav>
    );
};

export default Navbar;