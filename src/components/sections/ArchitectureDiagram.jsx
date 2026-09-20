import { featuredProject } from "../../data/content";

const ArchitectureDiagram = () => {
    const nodes = featuredProject.architecture;

    return (
        <figure
            role="img"
            aria-label="SecureAuth Kit architecture: React client connects to Auth Kit, which manages Session, which gates the Protected App"
            className="overflow-hidden border border-line bg-panel"
        >
            <figcaption className="border-b border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Architecture
            </figcaption>

            {/* Desktop: horizontal flow */}
            <div className="hidden sm:flex sm:items-stretch" aria-hidden="true">
                {nodes.map((node, index) => (
                    <div key={node.id} className="flex flex-1 items-stretch">
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div>
                                <span className="font-mono text-[11px] text-accent">
                                    0{index + 1}
                                </span>
                                <h4 className="mt-3 font-serif text-lg text-ink leading-snug">
                                    {node.label}
                                </h4>
                                <p className="mt-2 text-xs leading-5 text-muted">
                                    {node.detail}
                                </p>
                            </div>
                        </div>
                        {index < nodes.length - 1 && (
                            <div className="flex items-center px-1">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="h-px w-6 bg-line-strong" />
                                    <span className="font-mono text-[10px] text-accent-dim leading-none">›</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile: vertical stack */}
            <ol className="sm:hidden divide-y divide-line" aria-label="Architecture steps">
                {nodes.map((node, index) => (
                    <li key={node.id} className="flex items-start gap-4 p-5">
                        <span className="font-mono text-[11px] text-accent shrink-0 mt-0.5">
                            0{index + 1}
                        </span>
                        <div>
                            <h4 className="font-serif text-base text-ink">{node.label}</h4>
                            <p className="mt-1 text-xs leading-5 text-muted">{node.detail}</p>
                        </div>
                        {index < nodes.length - 1 && (
                            <span className="ml-auto font-mono text-accent-dim text-xs shrink-0 mt-0.5" aria-hidden="true">↓</span>
                        )}
                    </li>
                ))}
            </ol>

            {/* SVG connector lines — decorative, desktop only */}
            <div className="hidden sm:block border-t border-line px-6 py-3" aria-hidden="true">
                <svg
                    width="100%"
                    height="2"
                    className="overflow-visible"
                    focusable="false"
                >
                    <title>Flow connector</title>
                    <line
                        x1="0" y1="1" x2="100%" y2="1"
                        stroke="var(--color-line-strong)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                </svg>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    React / Vite · Node.js · PostgreSQL · Argon2 · JWT · HTTP-only cookies
                </p>
            </div>
        </figure>
    );
};

export default ArchitectureDiagram;
