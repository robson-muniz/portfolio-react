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
        <div className="flex aspect-[16/10] flex-col justify-between border-b border-line bg-surface p-6">
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
        <article className="group flex h-full flex-col border border-line bg-panel transition-colors duration-300 hover:bg-panel-hover">
            {project.image ? (
                <div className="overflow-hidden border-b border-line">
                    <img
                        src={project.image}
                        alt={`${project.name} interface screenshot`}
                        width={800}
                        height={500}
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            ) : (
                <ProjectCardFallback project={project} />
            )}

            <div className="flex flex-1 flex-col p-6">
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

                <div className="mt-4 space-y-2 border-t border-line pt-4">
                    <p className="text-xs text-muted">
                        <span className="font-mono uppercase tracking-wider text-[10px]">Problem </span>
                        {project.problem}
                    </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
                    {project.tech.map((tech) => (
                        <li
                            key={tech}
                            className="border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
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
                            className="inline-flex min-h-11 items-center gap-1 text-ink transition-colors hover:text-accent"
                            aria-label={`View ${project.name} live`}
                        >
                            Live
                            <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-1 text-muted transition-colors hover:text-ink"
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
                        Applications with a real product shape
                    </h2>
                    <p className="mt-4 text-base leading-7 text-muted">
                        Marketplaces, billing, search, and storefronts — chosen because they
                        show architecture, not because they fill a grid.
                    </p>
                </Reveal>

                <div className="grid gap-6 lg:grid-cols-2">
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
