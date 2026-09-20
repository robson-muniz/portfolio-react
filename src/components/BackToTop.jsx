import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const reduce = useReducedMotion();

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 640);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-6 z-40 inline-flex size-11 items-center justify-center border border-line bg-panel text-ink"
                    aria-label="Back to top"
                >
                    <ChevronUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
