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

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {stack.map((group, index) => (
                        <Reveal key={group.title} delay={index * 0.05}>
                            <div className="h-full rounded-2xl border border-line bg-panel/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:bg-panel sm:p-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">0{index + 1} / toolkit</p>
                            <h3 className="mt-4 border-b border-line pb-4 text-lg">
                                {group.title}
                            </h3>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <li key={item} className="rounded-md border border-line bg-canvas/50 px-2.5 py-1.5 font-mono text-[10px] text-muted">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stack;
