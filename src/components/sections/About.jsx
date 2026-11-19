import { site } from "../../data/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const About = () => {
    return (
        <section id="about" className="border-y border-line bg-panel/35 py-20 sm:py-28">
            <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        About
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-4xl">
                        Senior web development, from interface to production.
                    </h2>
                </Reveal>

                <Reveal delay={0.06} className="space-y-5 text-base leading-7 text-muted">
                    <p>
                        This portfolio is for senior web developer opportunities. I’m based in Portugal
                        and bring 8+ years building web products with React, TypeScript, and Next.js,
                        plus the backend and infrastructure work needed to take them to production.
                    </p>
                    <p>
                        Recent projects include a Bitcoin marketplace, an invoicing product with Stripe
                        and PDF output, and {site.product.name} — a product foundation with checkout
                        and authentication. Each one puts the important boundaries in code: identity,
                        payments, data, and the interface that connects them.
                    </p>
                    <p>
                        I work across product design, implementation, and deployment, keeping the
                        choices understandable for the team that has to extend the product next.
                    </p>
                    <dl className="grid gap-6 pt-4 sm:grid-cols-2">
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                                Languages
                            </dt>
                            <dd className="mt-2 text-ink">{site.languages.join(" · ")}</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                                Focus
                            </dt>
                            <dd className="mt-2 text-ink">Germany / EU / remote</dd>
                        </div>
                    </dl>
                </Reveal>
            </Container>
        </section>
    );
};

export default About;
