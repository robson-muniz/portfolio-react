import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) return undefined;

        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            touchMultiplier: 1.4,
        });

        let frame = 0;
        const raf = (time) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return children;
};

export default SmoothScroll;
