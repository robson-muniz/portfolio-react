'use client'

import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Coffee } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/robson-muniz", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/robsonmuniz/", label: "LinkedIn" },
        { icon: <FaTwitter />, href: "https://x.com/WebDevMadeEasy", label: "Twitter" }
    ];

    return (
        <footer className="bg-gray-900/30 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <div className="flex items-center justify-center md:justify-start mb-4">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3"
                            >
                                <span className="text-white font-bold text-lg">RM</span>
                            </motion.div>
                            <span className="text-xl font-bold text-white">
                                Robson<span className="text-primary">.</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Crafting digital experiences that make a difference
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-primary hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                                aria-label={social.label}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <span className="relative z-10">
                                    {social.icon}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 pt-8 border-t border-gray-800 text-center"
                >
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-1 flex-wrap">
                        © {new Date().getFullYear()} Robson Muniz. All rights reserved.
                        <span className="flex items-center gap-1 ml-1">
                            Made with
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <FaHeart className="text-red-500 mx-1" />
                            </motion.span>
                            and
                            <motion.span
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Coffee className="text-amber-600 ml-1" />
                            </motion.span>
                        </span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;