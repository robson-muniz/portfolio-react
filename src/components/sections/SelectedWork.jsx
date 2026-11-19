import { ArrowUpRight } from "lucide-react";
import { selectedWork } from "../../data/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

// Category → short description for fallback cards without screenshots
const CATEGORY_COLORS = {
    Marketplace: "crypto-commerce",
    Product: "reactlaunch",
    SaaS: "ai-invoice",
    Application: "github-finder",
    Interface: "shopstyle",
};

const ProjectCardFallback = ({ project }) => {
    // Render a code-style terminal preview for projects without screenshots
    const techLine = project.tech.slice(0, 3).join(" · ");
    return (
        <div className="flex aspect-[16/10] flex-col justify-between border-b border-line bg-surface p-6 sm:p-8">
            <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {project.category}
                </span>
                <span className="font-mono text-[10px] text-muted">
                    {project.id}
                </span>
            </div>
            <div>
                <p className="font-mono text-xs text-muted mb-1">
                    <span className="text-accent-dim">$</span> stack
                </p>
                <p className="font-mono text-xs text-ink/70 leading-5">
                    {techLine}
                </p>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/80 shadow-[0_18px_60px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-panel hover:shadow-[0_26px_72px_rgba(0,0,0,0.3)]">
            {project.image ? (
                <div className="overflow-hidden border-b border-line bg-surface">
                    <img
                        src={project.image}
                        alt={`${project.name} interface screenshot`}
                        width={800}
                        height={500}
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ) : (
                <ProjectCardFallback project={project} />
            )}

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                            {project.category}
                        </p>
                        <h3 className="mt-2 text-2xl">{project.name}</h3>
                    </div>
                    {project.status && (
                        <span className="shrink-0 font-mono text-[11px] text-muted mt-1">
                            {project.status}
                        </span>
                    )}
                </div>

                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

                <div className="mt-5 grid gap-4 border-t border-line pt-4">
                    <p className="text-[13px] leading-6 text-muted">
                        <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-accent">The friction</span>
                        {project.problem}
                    </p>
                    {project.engineering && <p className="text-[13px] leading-6 text-muted">
                        <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-accent">The decision</span>
                        {project.engineering}
                    </p>}
                    {project.result && <p className="rounded-xl border border-accent/10 bg-accent/[0.035] px-3.5 py-3 text-[13px] leading-6 text-ink/85">
                        <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-accent">What it changes</span>
                        {project.result}
                    </p>}
                </div>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
                    {project.tech.map((tech) => (
                        <li
                            key={tech}
                            className="rounded-md border border-line bg-canvas/35 px-2.5 py-1 font-mono text-[10px] text-muted"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent px-3.5 text-xs font-semibold text-canvas transition hover:brightness-105 active:scale-[0.98]"
                            aria-label={`View ${project.name} live`}
                        >
                            View live
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-3.5 text-xs font-medium text-muted transition hover:border-line-strong hover:text-ink active:scale-[0.98]"
                            aria-label={`${project.name} source code on GitHub`}
                        >
                            GitHub
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

const SelectedWork = () => {
    return (
        <section className="py-20 sm:py-28" aria-labelledby="selected-heading">
            <Container>
                <Reveal className="mb-12 max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        Selected work
                    </p>
                    <h2 id="selected-heading" className="mt-4 text-3xl sm:text-4xl">
                        Software with the hard parts wired in.
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted">
                        Product foundations, payments, and workflows. Each project shows the problem, the engineering decision, and what that decision enables.
                    </p>
                </Reveal>

                <div className="grid gap-5 lg:grid-cols-2">
                    {selectedWork.map((project, index) => (
                        <Reveal key={project.id} delay={index * 0.05}>
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SelectedWork;
