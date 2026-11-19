import { ArrowUpRight, Github, Radio } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { launchForge } from "../../data/content";

const FlagshipRepoShowcase = () => {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto w-full max-w-[720px]"
        >
            <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-[#c9f66b]/[0.08] blur-3xl" />
            <a
                href={launchForge.live}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden rounded-2xl border border-white/10 bg-[#101812] p-2 shadow-[0_32px_100px_rgba(0,0,0,0.5)] ring-1 ring-black/30 transition duration-300 group-hover:border-[#c9f66b]/30 group-hover:shadow-[0_36px_110px_rgba(0,0,0,0.58)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9f66b]"
                aria-label="Open the live LaunchForge application"
            >
                <img
                    src="/projects/launchforge-hero.webp"
                    alt="LaunchForge marketplace preview showing source kits for databases, authentication, and payments"
                    width="1920"
                    height="1080"
                    fetchPriority="high"
                    decoding="async"
                    className="aspect-[16/9] w-full rounded-xl object-cover object-center transition duration-500 group-hover:scale-[1.012]"
                />
                <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#101812]/90 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white shadow-xl backdrop-blur-md transition group-hover:border-[#c9f66b]/50 group-hover:text-[#c9f66b] sm:bottom-7 sm:right-7">
                    <Radio size={13} className="text-[#c9f66b]" /> View live <ArrowUpRight size={13} />
                </span>
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-1">
                <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl border border-[#c9f66b]/20 bg-[#c9f66b]/10 font-semibold text-[#c9f66b]">LF</span>
                    <div>
                        <p className="text-sm font-semibold tracking-[-0.02em] text-ink">LaunchForge</p>
                        <p className="mt-0.5 font-mono text-[10px] text-muted">Portfolio case study · Next.js · TypeScript</p>
                    </div>
                </div>
                <a href={launchForge.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line bg-panel/70 px-3.5 text-xs font-medium text-muted transition hover:border-line-strong hover:text-ink active:scale-[0.98]" aria-label="Open the LaunchForge GitHub repository">
                    <Github size={14} /> Source <ArrowUpRight size={13} />
                </a>
            </div>
        </motion.div>
    );
};

export default FlagshipRepoShowcase;
