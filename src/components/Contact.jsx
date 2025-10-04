import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: ""
    });
    const [focusedField, setFocusedField] = useState(null);
    const formRef = useRef();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFocus = (fieldName) => {
        setFocusedField(fieldName);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: ""
        });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Robson"
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: "🎉 Message sent successfully! I'll get back to you soon."
            });
            setFormData({ name: "", email: "", message: "" });

            setTimeout(() => {
                setFormStatus(prev => ({ ...prev, message: "" }));
            }, 5000);

        } catch (err) {
            console.error("EmailJS Error:", err);
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: "❌ Failed to send message. Please try again or contact me directly."
            });
        }
    };

    const socials = [
        { name: "GitHub", url: "https://github.com/robson-muniz", icon: "🐙" },
        { name: "LinkedIn", url: "https://linkedin.com/in/robsonmuniz", icon: "💼" },
        { name: "Twitter", url: "https://twitter.com/WebDevMadeEasy", icon: "🐦" },
        { name: "Instagram", url: "https://instagram.com/robsonmuniz", icon: "📸" }
    ];

    const contactItems = [
        {
            icon: "📧",
            title: "Email",
            content: "robsonmuniz.tech@gmail.com",
            gradient: "from-purple-500 to-pink-500",
            borderColor: "purple"
        },
        {
            icon: "📍",
            title: "Location",
            content: "Coimbra, Portugal",
            gradient: "from-cyan-500 to-blue-500",
            borderColor: "cyan"
        },
        {
            icon: "💼",
            title: "Availability",
            content: "Open for new projects",
            gradient: "from-pink-500 to-rose-500",
            borderColor: "pink"
        }
    ];

    return (
        <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/10 rounded-full blur-3xl"
                    variants={floatingVariants}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full blur-3xl"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl"
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            <motion.div
                className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-center relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
                        whileInView={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            backgroundSize: "200% 200%"
                        }}
                    >
                        Let's Connect
                    </motion.h2>

                    <motion.p
                        className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4"
                        variants={itemVariants}
                    >
                        Ready to bring your ideas to life? Let's create something extraordinary together.
                        I'm just a message away from turning your vision into reality.
                    </motion.p>
                </motion.div>

                {/* Contact Content */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 w-full max-w-7xl mx-auto items-center">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-6 sm:space-y-8 order-2 lg:order-1"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="space-y-4 sm:space-y-6"
                            variants={containerVariants}
                        >
                            {contactItems.map((item, index) => {
                                const borderColors = {
                                    purple: "rgba(192, 132, 252, 0.5)",
                                    cyan: "rgba(34, 211, 238, 0.5)",
                                    pink: "rgba(236, 72, 153, 0.5)"
                                };

                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
                                        whileHover={{
                                            scale: 1.02,
                                            x: 10,
                                            borderColor: borderColors[item.borderColor]
                                        }}
                                        variants={itemVariants}
                                    >
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-lg sm:text-xl">{item.icon}</span>
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-semibold text-slate-300 text-sm sm:text-base">{item.title}</h3>
                                            <p className="text-slate-400 text-xs sm:text-sm truncate">{item.content}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={itemVariants}
                            className="pt-6 sm:pt-8"
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-slate-300 mb-3 sm:mb-4 text-center lg:text-left">Follow my journey</h3>
                            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                                {socials.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-base sm:text-lg hover:bg-slate-700/50 transition-all duration-300 hover:border-purple-500/30"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="relative order-1 lg:order-2 mb-8 lg:mb-0"
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 transition-opacity duration-500 hover:opacity-100" />

                        <motion.div
                            className="relative rounded-2xl sm:rounded-3xl border border-slate-700/50 bg-slate-800/20 backdrop-blur-xl shadow-2xl overflow-hidden"
                            whileInView={{
                                boxShadow: [
                                    "0 0 0px rgba(124, 58, 237, 0)",
                                    "0 0 30px rgba(124, 58, 237, 0.3)",
                                    "0 0 0px rgba(124, 58, 237, 0)"
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 transition-opacity duration-500 hover:opacity-20" />

                            <motion.form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 relative z-10"
                                variants={containerVariants}
                            >
                                {/* Name Field */}
                                <motion.div
                                    className="relative"
                                    variants={itemVariants}
                                >
                                    <motion.input
                                        type="text"
                                        name="name"
                                        placeholder=" "
                                        required
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        value={formData.name}
                                        className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/50 border-2 border-slate-600/50 text-white placeholder-transparent focus:outline-none focus:border-purple-500 transition-all duration-300 peer text-sm sm:text-base"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                    <label className="absolute left-3 sm:left-4 top-1 sm:top-2 text-slate-400 text-xs sm:text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-purple-400 pointer-events-none">
                                        Your Name *
                                    </label>
                                </motion.div>

                                {/* Email Field */}
                                <motion.div
                                    className="relative"
                                    variants={itemVariants}
                                >
                                    <motion.input
                                        type="email"
                                        name="email"
                                        placeholder=" "
                                        required
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        value={formData.email}
                                        className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/50 border-2 border-slate-600/50 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 transition-all duration-300 peer text-sm sm:text-base"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                    <label className="absolute left-3 sm:left-4 top-1 sm:top-2 text-slate-400 text-xs sm:text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400 pointer-events-none">
                                        Your Email *
                                    </label>
                                </motion.div>

                                {/* Message Field */}
                                <motion.div
                                    className="relative"
                                    variants={itemVariants}
                                >
                                    <motion.textarea
                                        name="message"
                                        placeholder=" "
                                        required
                                        onChange={handleInputChange}
                                        onFocus={() => handleFocus('message')}
                                        onBlur={handleBlur}
                                        value={formData.message}
                                        className="w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/50 border-2 border-slate-600/50 text-white placeholder-transparent focus:outline-none focus:border-pink-500 transition-all duration-300 resize-none h-24 sm:h-32 peer text-sm sm:text-base"
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                    <label className="absolute left-3 sm:left-4 top-1 sm:top-2 text-slate-400 text-xs sm:text-sm transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-pink-400 pointer-events-none">
                                        Your Message *
                                    </label>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={formStatus.submitting}
                                    whileHover={{
                                        scale: formStatus.submitting ? 1 : 1.05,
                                        boxShadow: formStatus.submitting ? "none" : "0 10px 30px rgba(124, 58, 237, 0.4)"
                                    }}
                                    whileTap={{ scale: formStatus.submitting ? 1 : 0.95 }}
                                    className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl mt-2 sm:mt-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group text-sm sm:text-base"
                                    variants={itemVariants}
                                >
                                    {/* Animated shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                    <span className="relative flex items-center justify-center gap-2">
                                        {formStatus.submitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <span>🚀</span>
                                                Launch Message
                                            </>
                                        )}
                                    </span>
                                </motion.button>

                                {/* Status Message */}
                                {formStatus.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center font-semibold backdrop-blur-sm border text-xs sm:text-sm ${
                                            formStatus.success
                                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                : "bg-red-500/10 text-red-400 border-red-500/20"
                                        }`}
                                        variants={itemVariants}
                                    >
                                        {formStatus.message}
                                    </motion.div>
                                )}
                            </motion.form>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Footer */}
            <motion.footer
                className="relative bg-slate-800/30 backdrop-blur-xl text-slate-400 py-6 sm:py-8 mt-12 sm:mt-20 border-t border-slate-700/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <motion.p
                        className="text-base sm:text-lg mb-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        Crafted with 💜 and endless coffee
                    </motion.p>
                    <p className="text-xs sm:text-sm">
                        &copy; {new Date().getFullYear()} Robson Muniz. All digital rights reserved.
                    </p>
                </div>
            </motion.footer>
        </section>
    );
};

export default Contact;