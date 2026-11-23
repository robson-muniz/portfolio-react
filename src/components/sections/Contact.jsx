import emailjs from "@emailjs/browser";
import { useState } from "react";
import { site } from "../../data/content";
import { getMissingEnv, validateEnv } from "../../utils/env.validation";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-canvas/70 px-4 py-3.5 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:bg-canvas focus:outline-none";

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
            const missing = getMissingEnv();
            setStatus({
                state: "error",
                message: `Email delivery is missing production settings: ${missing.join(", ")}. Email me directly at ${site.email}.`,
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
                    reply_to: formData.email,
                    to_email: site.email,
                    message: formData.message,
                    to_name: "Robson",
                    // Keep the default EmailJS Contact Us template compatible too.
                    name: formData.name,
                    email: formData.email,
                    title: "Portfolio contact",
                    time: new Date().toLocaleString(),
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus({
                state: "success",
                message: "Sent. I will reply to the address you used.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS contact form request failed:", error);
            const errorDetails = error?.text || error?.message;
            setStatus({
                state: "error",
                message: errorDetails
                    ? `EmailJS error (${error?.status || "request failed"}): ${errorDetails}. Email me directly at ${site.email}.`
                    : `The contact form could not send your message. Email me directly at ${site.email}.`,
            });
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden border-t border-line py-20 sm:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 size-[34rem] rounded-full bg-accent/[0.035] blur-3xl" />
            <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                        Contact
                    </p>
                    <h2 className="mt-4 text-4xl leading-[1.02] sm:text-5xl">
                        Hiring a senior web developer?
                    </h2>
                    <p className="mt-5 max-w-md text-base leading-7 text-muted">
                        I’m looking for my next senior web developer role. I’m based in Portugal and open to opportunities across the EU and remotely. Send a note or download my CV.
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
                    <form onSubmit={onSubmit} className="relative space-y-5 rounded-2xl border border-line bg-panel/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-7">
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
                                rows={5}
                                value={formData.message}
                                onChange={onChange}
                                className={`${fieldClass} resize-y`}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status.state === "submitting"}
                            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-canvas transition hover:brightness-105 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
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
