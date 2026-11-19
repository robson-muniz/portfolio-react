import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Check, Download } from "lucide-react";
import { site } from "../../data/content";
import Container from "../ui/Container";
import FlagshipRepoShowcase from "./FlagshipRepoShowcase";

const Hero = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section id="home" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(ellipse_at_72%_20%,rgba(201,246,107,0.09),transparent_58%)]" />
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
                    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.45 }}>
                        <div className="mb-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
                            Portfolio <span className="text-line-strong">/</span> Open to senior web developer roles
                        </div>
                        <h1 className="max-w-[640px] text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
                            Senior web developer. <span className="text-accent">Ready to ship.</span>
                        </h1>
                        <p className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
                            I’m looking for a senior web developer role where I can own the full product path: React and Next.js interfaces, APIs, PostgreSQL, and payments. 8+ years shipping production web products.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#work" className="group inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-canvas shadow-[0_8px_30px_rgba(201,246,107,0.12)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(201,246,107,0.22)] active:scale-[0.98]">
                                View case studies <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
                            </a>
                            <a href={site.resume} download="Robson_Muniz_Resume.pdf" className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-line bg-panel/50 px-5 text-sm font-medium text-ink transition hover:border-accent/40 hover:bg-panel active:scale-[0.98]">
                                Download CV <Download size={15} />
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                            <span className="inline-flex items-center gap-2"><Check size={13} className="text-accent" /> Frontend to database</span>
                            <span className="inline-flex items-center gap-2"><Check size={13} className="text-accent" /> EU · Remote</span>
                        </div>
                    </motion.div>
                    <FlagshipRepoShowcase />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
