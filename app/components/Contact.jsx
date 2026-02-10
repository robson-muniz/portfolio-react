'use client'

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { Mail, MapPin, Calendar, Send, CheckCircle, AlertCircle, MessageSquare, Clock, Zap } from 'lucide-react';

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
                message: "Message sent successfully! I'll get back to you within 24 hours."
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
                message: "Failed to send message. Please try again or email me directly."
            });
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            content: "robsonmuniz.tech@gmail.com",
            gradient: "from-purple-500 to-pink-500",
            link: "mailto:robsonmuniz.tech@gmail.com"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            content: "Coimbra, Portugal",
            gradient: "from-blue-500 to-cyan-500",
            link: "https://maps.google.com/?q=Coimbra,Portugal"
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Availability",
            content: "Open for new projects",
            gradient: "from-emerald-500 to-teal-500",
            link: "#contact"
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900" />

            {/* Animated grid */}
            <div className="absolute inset-0 grid-pattern opacity-5" />

            {/* Floating orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className="inline-block mb-6"
                        variants={itemVariants}
                    >
                        <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 font-medium">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-5xl font-bold mb-6"
                        variants={itemVariants}
                    >
                        <span className="text-white">Let's </span>
                        <span className="gradient-text">
                            Work Together
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Have a project in mind? Let's discuss how we can bring your ideas to life.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex items-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-xl">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mr-4 flex-shrink-0`}
                                        >
                                            <div className="text-white">
                                                {item.icon}
                                            </div>
                                        </motion.div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-white mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300">
                                                {item.content}
                                            </p>
                                        </div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            whileHover={{ opacity: 1, x: 0 }}
                                            className="text-purple-400"
                                        >
                                            →
                                        </motion.div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Response Time */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl p-6 border border-purple-500/10"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-purple-400" />
                                    Response Time
                                </div>
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: <Zap className="w-4 h-4" />, text: "Typically respond within 24 hours" },
                                    { icon: <Calendar className="w-4 h-4" />, text: "Available Monday to Friday" },
                                    { icon: "🚀", text: "Open for urgent projects" }
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center text-gray-300"
                                    >
                                        <span className="text-purple-400 mr-3">
                                            {item.icon}
                                        </span>
                                        {item.text}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="relative"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden"
                            animate={{
                                boxShadow: [
                                    '0 20px 40px rgba(168, 85, 247, 0.1)',
                                    '0 20px 40px rgba(236, 72, 153, 0.15)',
                                    '0 20px 40px rgba(168, 85, 247, 0.1)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Send me a message
                                </h3>

                                <motion.form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    variants={containerVariants}
                                >
                                    {/* Name Field */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Name *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onFocus={() => handleFocus('name')}
                                                onBlur={handleBlur}
                                                required
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                            />
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                animate={{
                                                    scaleX: focusedField === 'name' ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Email *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => handleFocus('email')}
                                                onBlur={handleBlur}
                                                required
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                animate={{
                                                    scaleX: focusedField === 'email' ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Message Field */}
                                    <motion.div variants={itemVariants}>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Your Message *
                                        </label>
                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                onFocus={() => handleFocus('message')}
                                                onBlur={handleBlur}
                                                required
                                                rows="5"
                                                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                                placeholder="Tell me about your project..."
                                            />
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                animate={{
                                                    scaleX: focusedField === 'message' ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={formStatus.submitting}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative overflow-hidden shine"
                                    >
                                        <span className="relative flex items-center gap-2">
                                            {formStatus.submitting ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </span>
                                    </motion.button>

                                    {/* Status Message */}
                                    {formStatus.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            variants={itemVariants}
                                            className={`p-4 rounded-xl border flex items-start gap-3 ${
                                                formStatus.success
                                                    ? "bg-emerald-900/20 border-emerald-800"
                                                    : "bg-red-900/20 border-red-800"
                                            }`}
                                        >
                                            {formStatus.success ? (
                                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            ) : (
                                                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            )}
                                            <p className={`text-sm ${
                                                formStatus.success
                                                    ? "text-emerald-300"
                                                    : "text-red-300"
                                            }`}>
                                                {formStatus.message}
                                            </p>
                                        </motion.div>
                                    )}
                                </motion.form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;