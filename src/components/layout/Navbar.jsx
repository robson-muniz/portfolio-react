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
            <Container className="flex h-16 items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        go("#home");
                    }}
                    className="font-serif text-lg tracking-tight text-ink"
                >
                    {site.name}
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
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
                </nav>

                <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
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
                        className="border-t border-line bg-canvas md:hidden"
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
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
