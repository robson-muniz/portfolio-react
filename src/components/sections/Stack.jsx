import { stack } from "../../data/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const Stack = () => {
    return (
        <section id="stack" className="py-20 sm:py-28">
            <Container>
                <Reveal className="max-w-2xl">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        Stack
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-4xl">
                        Tools that show up in the repositories, not a wish list.
                    </h2>
                </Reveal>

                <div className="mt-12 grid gap-10 sm:grid-cols-3">
                    {stack.map((group, index) => (
                        <Reveal key={group.title} delay={index * 0.05}>
                            <h3 className="border-b border-line pb-4 font-serif text-xl">
                                {group.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {group.items.map((item) => (
                                    <li key={item} className="text-sm text-muted">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stack;
