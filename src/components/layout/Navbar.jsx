import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "../../data/content";
import { scrollToId } from "../../lib/scrollToId";
import Container from "../ui/Container";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const menuId = useId();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 12);
            const sections = ["home", "work", "about", "stack", "contact"];
            const position = window.scrollY + 120;
            let current = "home";

            for (const id of sections) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (position >= el.offsetTop && position < el.offsetTop + el.offsetHeight) {
                    current = id;
                }
            }
            setActive(current);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const go = (href) => {
        const id = href.replace("#", "");
        setOpen(false);
        scrollToId(id);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled || open
                    ? "border-b border-line bg-canvas/90 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <Container className="flex h-[72px] items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        go("#home");
                    }}
                    className="group flex items-center gap-2.5 font-sans text-sm font-semibold tracking-[-0.025em] text-ink"
                >
                    <span className="flex size-8 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.08] font-mono text-[10px] text-accent transition-colors group-hover:bg-accent group-hover:text-canvas">RM</span>
                    {site.name}
                </a>

                <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                go(item.href);
                            }}
                            className={`text-sm transition-colors ${
                                active === item.id ? "text-ink" : "text-muted hover:text-ink"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-ink"
                        aria-label="Robson Muniz on LinkedIn"
                    >
                        LinkedIn
                    </a>
                    <a href="#contact" onClick={(event) => { event.preventDefault(); go("#contact"); }} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-accent px-4 text-xs font-semibold text-canvas transition hover:brightness-105 active:scale-[0.98]">
                        Let’s talk
                    </a>
                </nav>

                <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-ink transition hover:border-accent/30 hover:text-accent lg:hidden"
                    aria-expanded={open}
                    aria-controls={menuId}
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </Container>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id={menuId}
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="border-t border-line bg-canvas lg:hidden"
                    >
                        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        go(item.href);
                                    }}
                                    className="flex min-h-12 items-center text-base text-ink"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href={site.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-12 items-center text-base text-ink"
                                aria-label="Robson Muniz on LinkedIn"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    go("#contact");
                                }}
                                className="mt-3 flex min-h-12 items-center justify-center rounded-lg bg-accent px-4 text-sm font-semibold text-canvas"
                            >
                                Let’s talk
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
