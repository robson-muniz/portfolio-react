// components/FadeInSection.jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
