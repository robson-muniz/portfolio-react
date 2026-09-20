import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { featuredProject } from "../../data/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import ArchitectureDiagram from "./ArchitectureDiagram";

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
                        <span className="inline-flex items-center gap-1.5 border border-line px-3 py-1 font-mono text-xs text-muted">
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
                                    className="inline-flex min-h-10 items-center gap-2 bg-accent px-5 font-mono text-xs font-medium text-canvas transition-opacity hover:opacity-90"
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
                                className="inline-flex min-h-10 items-center gap-1.5 border border-line px-5 font-mono text-xs text-muted transition-colors hover:border-line-strong hover:text-ink"
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

                {/* Architecture diagram */}
                <Reveal delay={0.08} className="mt-12">
                    <ArchitectureDiagram />
                </Reveal>

                {/* Problem / Solution */}
                <div className="mt-14 grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
                            The problem
                        </p>
                        <h3 className="text-xl mb-4">Rebuilding the same surface, project after project</h3>
                        <p className="text-sm leading-7 text-muted sm:text-base">
                            {project.problem}
                        </p>
                    </Reveal>
                    <Reveal delay={0.06}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
                            The solution
                        </p>
                        <h3 className="text-xl mb-4">Extract it once, own the boundary</h3>
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
                            <li key={decision.title} className="border-t border-line pt-6">
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
                                className="border border-line px-3 py-1.5 font-mono text-xs text-muted"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                {/* Result */}
                <Reveal className="mt-14 border-t border-line pt-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-4">
                        Result
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
