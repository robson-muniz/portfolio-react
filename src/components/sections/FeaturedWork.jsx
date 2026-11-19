import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { featuredProject } from "../../data/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import AuthKitShowcase from "./AuthKitShowcase";

const FeaturedWork = () => {
    const project = featuredProject;

    return (
        <section
            className="pb-8 sm:pb-12"
            aria-labelledby="featured-heading"
        >
            <Container>
                {/* Header row */}
                <Reveal>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                            {project.kicker}
                        </p>
                        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                            <span className="size-1.5 rounded-full bg-accent" />
                            {project.status}
                        </span>
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                        <h2
                            id="featured-heading"
                            className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl"
                        >
                            {project.name}
                        </h2>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3">
                            {project.gumroad && (
                                <a
                                    href={project.gumroad}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent px-4 font-mono text-xs font-semibold text-canvas transition hover:brightness-105 active:scale-[0.98]"
                                    aria-label="View SecureAuth Kit on Gumroad"
                                >
                                    <ShoppingBag size={13} aria-hidden="true" />
                                    Gumroad
                                    <ArrowUpRight size={13} aria-hidden="true" />
                                </a>
                            )}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-line px-4 font-mono text-xs text-muted transition-colors hover:border-line-strong hover:text-ink"
                                aria-label="SecureAuth Kit on GitHub (private repository)"
                            >
                                GitHub
                                <ArrowUpRight size={13} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                        {project.summary}
                    </p>
                </Reveal>

                {/* AuthKit Interactive Showcase & Visual Preview */}
                <Reveal delay={0.08} className="mt-12 overflow-hidden rounded-2xl shadow-[0_26px_80px_rgba(0,0,0,0.28)]">
                    <AuthKitShowcase />
                </Reveal>

                {/* Problem / Solution */}
                <div className="mt-14 grid gap-4 lg:grid-cols-2">
                    <Reveal className="rounded-2xl border border-line bg-panel/60 p-6 sm:p-8">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                            01 / The friction
                        </p>
                        <h3 className="mb-4 text-xl">Rebuilding the same surface, project after project</h3>
                        <p className="text-sm leading-7 text-muted sm:text-base">
                            {project.problem}
                        </p>
                    </Reveal>
                    <Reveal delay={0.06} className="rounded-2xl border border-accent/15 bg-accent/[0.035] p-6 sm:p-8">
                        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                            02 / The decision
                        </p>
                        <h3 className="mb-4 text-xl">Extract it once, own the boundary</h3>
                        <p className="text-sm leading-7 text-muted sm:text-base">
                            {project.solution}
                        </p>
                    </Reveal>
                </div>

                {/* Engineering decisions */}
                <Reveal className="mt-14">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-6">
                        Engineering decisions
                    </p>
                    <ol className="grid gap-8 sm:grid-cols-3" aria-label="Key engineering decisions">
                        {project.decisions.map((decision, index) => (
                            <li key={decision.title} className="rounded-xl border border-line bg-panel/50 p-5">
                                <span className="font-mono text-xs text-accent" aria-label={`Decision ${index + 1}`}>
                                    0{index + 1}
                                </span>
                                <h3 className="mt-3 font-serif text-xl">{decision.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-muted">{decision.body}</p>
                            </li>
                        ))}
                    </ol>
                </Reveal>

                {/* Stack */}
                <Reveal className="mt-14">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-5">
                        Stack
                    </p>
                    <ul
                        className="flex flex-wrap gap-2"
                        aria-label="Technologies used in SecureAuth Kit"
                    >
                        {project.engineering.map((item) => (
                            <li
                                key={item}
                                className="rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-[10px] text-muted"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Result */}
                <Reveal className="mt-14 rounded-2xl border border-accent/15 bg-accent/[0.035] p-6 sm:p-8">
                    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                        03 / What it enables
                    </p>
                    <p className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
                        {project.result}
                    </p>
                </Reveal>
            </Container>
        </section>
    );
};

export default FeaturedWork;
