import emailjs from "@emailjs/browser";
import { useState } from "react";
import { site } from "../../data/content";
import { validateEnv } from "../../utils/env.validation";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const fieldClass =
    "mt-2 w-full border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ state: "idle", message: "" });

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus({ state: "submitting", message: "" });

        if (!validateEnv()) {
            setStatus({
                state: "error",
                message: `Could not send. Email me directly at ${site.email}.`,
            });
            return;
        }

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Robson",
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                state: "success",
                message: "Sent. I will reply to the address you used.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus({
                state: "error",
                message: `Could not send. Email me directly at ${site.email}.`,
            });
        }
    };

    return (
        <section id="contact" className="border-t border-line py-20 sm:py-28">
            <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        Contact
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-4xl">
                        If the work is a fit, write.
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-7 text-muted">
                        Frontend and product engineering roles. Portugal-based, open to Germany,
                        the EU, and remote.
                    </p>
                    <dl className="mt-10 space-y-6">
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                                Email
                            </dt>
                            <dd className="mt-2">
                                <a className="text-ink hover:text-accent" href={`mailto:${site.email}`}>
                                    {site.email}
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                                Resume
                            </dt>
                            <dd className="mt-2">
                                <a
                                    className="text-ink hover:text-accent"
                                    href={site.resume}
                                    download="Robson_Muniz_Resume.pdf"
                                >
                                    Download PDF
                                </a>
                            </dd>
                        </div>
                    </dl>
                </Reveal>

                <Reveal delay={0.06}>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="text-sm text-ink">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                autoComplete="name"
                                required
                                value={formData.name}
                                onChange={onChange}
                                className={fieldClass}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-ink">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={onChange}
                                className={fieldClass}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-ink">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={onChange}
                                className={`${fieldClass} resize-y`}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status.state === "submitting"}
                            className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-6 text-sm font-medium text-canvas transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                        >
                            {status.state === "submitting" ? "Sending…" : "Send message"}
                        </button>
                        {status.message && (
                            <p
                                role="status"
                                className={`text-sm ${
                                    status.state === "success" ? "text-ok" : "text-danger"
                                }`}
                            >
                                {status.message}
                            </p>
                        )}
                    </form>
                </Reveal>
            </Container>
        </section>
    );
};

export default Contact;
