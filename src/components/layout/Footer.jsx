import { ArrowUpRight } from "lucide-react";
import { site } from "../../data/content";
import Container from "../ui/Container";

const Footer = () => {
    return (
        <footer className="border-t border-line py-10">
            <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted">
                    © {new Date().getFullYear()} {site.name} · {site.location}
                </p>

                <nav className="flex items-center gap-6" aria-label="Social links">
                    <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                        aria-label="Robson Muniz on GitHub"
                    >
                        GitHub
                        <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                    <a
                        href={site.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                        aria-label="Robson Muniz on LinkedIn"
                    >
                        LinkedIn
                        <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                    <a
                        href={site.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-ink"
                        aria-label="Robson Muniz on X (Twitter)"
                    >
                        X
                        <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                </nav>
            </Container>
        </footer>
    );
};

export default Footer;
