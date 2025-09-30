import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home', icon: '🏠' },
        { name: 'Projects', href: '#projects', icon: '💼' },
        { name: 'Contact', href: '#contact', icon: '📧' }, // ✅ fixed to match your section
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10'
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="relative text-2xl font-bold cursor-pointer overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        RM
                    </span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ opacity: 1, scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Nav Items */}
                <ul className="flex items-center gap-2">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onHoverStart={() => setHoveredItem(index)}
                            onHoverEnd={() => setHoveredItem(null)}
                        >
                            <a
                                href={item.href}
                                className="relative block px-6 py-2 text-slate-200 transition-colors duration-200 group"
                            >
                                <motion.div
                                    className="relative z-10 flex items-center gap-2"
                                    animate={{
                                        scale: hoveredItem === index ? 1.05 : 1,
                                        y: hoveredItem === index ? -2 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.span
                                        animate={{
                                            rotate:
                                                hoveredItem === index
                                                    ? [0, -10, 10, 0]
                                                    : 0,
                                            scale: hoveredItem === index ? 1.2 : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="text-sm"
                                    >
                                        {hoveredItem === index && item.icon}
                                    </motion.span>
                                    <span
                                        className={
                                            hoveredItem === index
                                                ? 'text-white font-medium'
                                                : ''
                                        }
                                    >
                                        {item.name}
                                    </span>
                                </motion.div>

                                {/* Animated underline */}
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                                    initial={{ scaleX: 0 }}
                                    animate={{
                                        scaleX: hoveredItem === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredItem === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Background highlight */}
                                <motion.div
                                    className="absolute inset-0 bg-slate-800/50 rounded-lg -z-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: hoveredItem === index ? 1 : 0,
                                        scale: hoveredItem === index ? 1 : 0.8,
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
