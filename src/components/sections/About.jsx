import { site } from "../../data/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const About = () => {
    return (
        <section id="about" className="border-y border-line py-20 sm:py-28">
            <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        About
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-4xl">
                        A frontend engineer who ships the rest of the product when the work requires it.
                    </h2>
                </Reveal>

                <Reveal delay={0.06} className="space-y-5 text-base leading-7 text-muted">
                    <p>
                        I am a self-taught frontend developer based in Portugal, working independently
                        since 2021. The center of gravity is React, TypeScript, and Next.js — component
                        architecture, state, forms, and interfaces that stay maintainable after the
                        first version.
                    </p>
                    <p>
                        The recent work is product-shaped, not tutorial-shaped: a Bitcoin marketplace
                        with Prisma and NextAuth, invoicing with Stripe and PDF output, and{" "}
                        {site.product.name}, a Next.js foundation with Stripe checkout and Supabase
                        authentication. I use AI-assisted development as a production tool, not as a
                        substitute for reading the code that ships.
                    </p>
                    <p>
                        I take an idea from interface through data and deployment. That is the
                        professional claim: not a list of employers, a record of applications I
                        designed and built myself.
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
