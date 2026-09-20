import { ArrowUpRight } from "lucide-react";
import { featuredProject, site, stack } from "../../data/content";
import { scrollToId } from "../../lib/scrollToId";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

// Derive hero tech pills from the Frontend stack group in content.js
const heroTech = stack.find((g) => g.title === "Frontend")?.items ?? [];


const Hero = () => {
    return (
        <section id="home" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
            <Container>
                <Reveal>
                    <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        {site.location} · {site.availability}
                    </p>
                    <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                        {site.name}. I build production web applications in React and TypeScript.
                    </h1>
                    <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                        Frontend engineering with a product bias: interfaces, authentication,
                        payments, and the data layer underneath. Independent work from concept
                        through a deployed application.
                    </p>
                </Reveal>

                <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
                    {heroTech.map((tech) => (
                        <span
                            key={tech}
                            className="border border-line px-3 py-1.5 font-mono text-xs text-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </Reveal>


                <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                        href="#work"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToId("work");
                        }}
                        className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
                    >
                        View selected work
                    </a>
                    <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center gap-2 border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-ink"
                    >
                        GitHub
                        <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToId("contact");
                        }}
                        className="inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium text-muted transition-colors hover:text-ink"
                    >
                        Contact
                    </a>
                </Reveal>

                <Reveal delay={0.18} className="mt-16 border-t border-line pt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                        Currently
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/90 sm:text-base">
                        Featured work is {featuredProject.name} — an authentication kit for product
                        applications. Also shipping {site.product.name}, a Next.js foundation with
                        Stripe and Supabase auth.
                    </p>
                </Reveal>
            </Container>
        </section>
    );
};

export default Hero;
