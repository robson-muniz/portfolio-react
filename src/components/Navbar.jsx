import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeItem, setActiveItem] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active nav item based on scroll position
            const sections = ['home', 'projects', 'skills', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveItem(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navItems = [
        { id: 'home', name: 'Home', href: '#home', icon: '🏠' },
        { id: 'projects', name: 'Projects', href: '#projects', icon: '💼' },
        { id: 'skills', name: 'Skills', href: '#skills', icon: '🛠️' },
        { id: 'contact', name: 'Contact', href: '#contact', icon: '📧' },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-800'
                        : 'bg-transparent'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo with animation */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <a href="#home" className="flex items-center space-x-3">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                                >
                                    <span className="text-white font-bold text-lg">RM</span>
                                </motion.div>
                                <span className="text-xl font-bold text-white">
                                    Robson<span className="text-purple-400">.</span>
                                </span>
                            </a>
                        </motion.div>

                        {/* Desktop Navigation with better spacing */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navItems.indexOf(item) * 0.1, duration: 0.5 }}
                                    onHoverStart={() => setHoveredItem(item.id)}
                                    onHoverEnd={() => setHoveredItem(null)}
                                    className="relative"
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setActiveItem(item.id)}
                                        className="relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                                    >
                                        <motion.div
                                            className="relative z-10 flex items-center space-x-2"
                                            animate={{
                                                scale: hoveredItem === item.id ? 1.05 : 1,
                                                y: hoveredItem === item.id ? -2 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.span
                                                animate={{
                                                    rotate: hoveredItem === item.id ? [0, -10, 10, 0] : 0,
                                                    scale: hoveredItem === item.id ? 1.2 : 1,
                                                    opacity: hoveredItem === item.id ? 1 : (activeItem === item.id ? 1 : 0.7),
                                                }}
                                                transition={{ duration: 0.5 }}
                                                className="text-sm"
                                            >
                                                {item.icon}
                                            </motion.span>
                                            <span className={`font-medium transition-all duration-300 ${
                                                activeItem === item.id
                                                    ? 'text-purple-400'
                                                    : hoveredItem === item.id
                                                        ? 'text-white'
                                                        : 'text-gray-300'
                                            }`}>
                                                {item.name}
                                            </span>
                                        </motion.div>

                                        {/* Active indicator - subtle background */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: activeItem === item.id ? 0.5 : 0,
                                                scale: activeItem === item.id ? 1 : 0.8,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Animated underline with better timing */}
                                        <motion.div
                                            className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2"
                                            initial={{ width: 0, x: '-50%' }}
                                            animate={{
                                                width: hoveredItem === item.id ? '80%' : (activeItem === item.id ? '60%' : 0),
                                            }}
                                            transition={{
                                                duration: hoveredItem === item.id ? 0.3 : 0.2,
                                                ease: "easeOut"
                                            }}
                                        />
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={{
                                    rotate: mobileMenuOpen ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu with improved animations */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 300,
                                mass: 0.8
                            }}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-gray-900 z-50 md:hidden shadow-2xl border-l border-gray-800"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">RM</span>
                                        </div>
                                        <span className="text-xl font-bold text-white">
                                            Robson<span className="text-purple-400">.</span>
                                        </span>
                                    </div>
                                    <motion.button
                                        onClick={() => setMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg hover:bg-gray-800"
                                    >
                                        <X size={24} className="text-gray-300" />
                                    </motion.button>
                                </div>

                                <nav className="flex-1 p-6">
                                    <div className="space-y-3">
                                        {navItems.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ x: 50, opacity: 0, scale: 0.9 }}
                                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: index * 0.15 + 0.2,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                <a
                                                    href={item.href}
                                                    onClick={() => {
                                                        setActiveItem(item.id);
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800 transition-colors group relative overflow-hidden"
                                                >
                                                    {/* Background effect */}
                                                    <motion.div
                                                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
                                                        initial={false}
                                                        transition={{ duration: 0.3 }}
                                                    />

                                                    <motion.span
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.6 }}
                                                        className="text-lg relative z-10"
                                                    >
                                                        {item.icon}
                                                    </motion.span>
                                                    <span className="font-medium text-white group-hover:text-purple-400 relative z-10">
                                                        {item.name}
                                                    </span>
                                                    <motion.span
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileHover={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="text-purple-400 ml-auto relative z-10"
                                                    >
                                                        →
                                                    </motion.span>

                                                    {/* Active indicator */}
                                                    <motion.div
                                                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full"
                                                        initial={{ scaleY: 0 }}
                                                        animate={{
                                                            scaleY: activeItem === item.id ? 1 : 0,
                                                            originY: 0
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>
                                </nav>

                                <div className="p-6 border-t border-gray-800">
                                    <p className="text-sm text-gray-400 text-center">
                                        Let's build something amazing
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;