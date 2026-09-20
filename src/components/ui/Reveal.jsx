import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({ children, className = "", delay = 0, as = "div" }) => {
    const reduce = useReducedMotion();
    const Component = motion[as] ?? motion.div;

    return (
        <Component
            className={className}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </Component>
    );
};

export default Reveal;
