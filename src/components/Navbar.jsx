import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Wrench, Mail, FileText, Download } from 'lucide-react';

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
            const scrollPosition = window.scrollY + 100;

            let currentSection = 'home';

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        currentSection = section;
                    }
                }
            });

            if (currentSection && currentSection !== activeItem) {
                setActiveItem(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeItem]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navItems = [
        {
            id: 'home',
            name: 'Home',
            href: '#home',
            icon: <Home className="w-4 h-4" />
        },
        {
            id: 'projects',
            name: 'Projects',
            href: '#projects',
            icon: <Briefcase className="w-4 h-4" />
        },
        {
            id: 'skills',
            name: 'Skills',
            href: '#skills',
            icon: <Wrench className="w-4 h-4" />
        },
        {
            id: 'contact',
            name: 'Contact',
            href: '#contact',
            icon: <Mail className="w-4 h-4" />
        },
    ];

    const handleResumeDownload = () => {
        // Track download event (optional - for analytics)
        console.log('Resume downloaded at:', new Date().toISOString());

        // If you have Google Analytics:
        // if (window.gtag) {
        //     window.gtag('event', 'download', {
        //         'event_category': 'Resume',
        //         'event_label': 'Robson_Muniz_CV'
        //     });
        // }
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-800'
                    : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center"
                        >
                            <a href="#home" className="flex items-center space-x-3">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <span className="text-white font-bold text-lg relative z-10">RM</span>
                                </motion.div>
                                <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                                    Robson<span className="text-purple-600 dark:text-purple-400">.</span>
                                </span>
                            </a>
                        </motion.div>

                        {/* Desktop Navigation + Resume Button */}
                        <div className="hidden md:flex items-center gap-6">
                            {/* Navigation */}
                            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800/50 p-1.5 rounded-2xl border border-gray-300 dark:border-gray-700 backdrop-blur-sm">
                                {navItems.map((item) => {
                                    const isActive = activeItem === item.id;
                                    const isHovered = hoveredItem === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            onMouseEnter={() => setHoveredItem(item.id)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                            className="relative"
                                        >
                                            <a
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const element = document.getElementById(item.id);
                                                    if (element) {
                                                        const offset = -80;
                                                        const bodyRect = document.body.getBoundingClientRect().top;
                                                        const elementRect = element.getBoundingClientRect().top;
                                                        const elementPosition = elementRect - bodyRect;
                                                        const offsetPosition = elementPosition + offset;

                                                        window.scrollTo({
                                                            top: offsetPosition,
                                                            behavior: 'smooth'
                                                        });
                                                    }
                                                    setActiveItem(item.id);
                                                }}
                                                className={`relative z-10 px-4 py-2 flex items-center gap-2 rounded-xl transition-colors duration-200 ${isActive ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                                                    }`}
                                            >
                                                <motion.span
                                                    animate={{
                                                        rotate: isHovered ? [0, -15, 15, 0] : 0,
                                                        scale: isHovered ? 1.2 : 1,
                                                    }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    className="relative z-10 flex items-center justify-center p-0.5"
                                                >
                                                    {item.icon}
                                                </motion.span>
                                                <span className="relative font-medium text-sm">
                                                    {item.name}
                                                </span>
                                            </a>

                                            {/* Active Background - Sliding Pill */}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-active-pill"
                                                    className="absolute inset-0 bg-purple-100 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl"
                                                    transition={{
                                                        type: "spring",
                                                        bounce: 0.2,
                                                        duration: 0.6
                                                    }}
                                                />
                                            )}

                                            {/* Hover Background - Subtle */}
                                            {isHovered && !isActive && (
                                                <motion.div
                                                    layoutId="navbar-hover-pill"
                                                    className="absolute inset-0 bg-gray-200/50 dark:bg-gray-700/50 rounded-xl"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Resume Download Button */}
                            <motion.a
                                href="/Robson_Muniz_Lebenslauf_Germany.pdf"
                                download="Robson_Muniz_Frontend_Developer_CV.pdf"
                                onClick={handleResumeDownload}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg border border-purple-500/20"
                                aria-label="Download Resume"
                            >
                                <FileText className="w-4 h-4" />
                                <span className="hidden lg:inline">Resume</span>
                                <Download className="w-4 h-4 ml-1" />
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-700"
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden"
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
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white dark:bg-gray-900/95 backdrop-blur-xl z-50 md:hidden shadow-2xl border-l border-gray-300 dark:border-gray-800"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Header */}
                                <div className="flex items-center justify-between p-6 border-b border-gray-300 dark:border-gray-800">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">RM</span>
                                        </div>
                                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                                            Robson<span className="text-purple-600 dark:text-purple-400">.</span>
                                        </span>
                                    </div>
                                    <motion.button
                                        onClick={() => setMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <X size={24} className="text-gray-700 dark:text-gray-300" />
                                    </motion.button>
                                </div>

                                {/* Mobile Navigation Items */}
                                <nav className="flex-1 p-6">
                                    <div className="space-y-2">
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
                                                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${activeItem === item.id
                                                        ? 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800'
                                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                                        }`}
                                                >
                                                    {/* Icon */}
                                                    <motion.div
                                                        className={`p-3 rounded-lg ${activeItem === item.id
                                                            ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'
                                                            : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                                            }`}
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        {item.icon}
                                                    </motion.div>

                                                    {/* Text */}
                                                    <div className="flex-1">
                                                        <span className={`font-medium text-lg ${activeItem === item.id
                                                            ? 'text-purple-700 dark:text-purple-300'
                                                            : 'text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                                                            }`}>
                                                            {item.name}
                                                        </span>
                                                    </div>

                                                    {/* Active Indicator */}
                                                    {activeItem === item.id && (
                                                        <motion.div
                                                            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                                                            animate={{
                                                                scale: [1, 1.5, 1],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity
                                                            }}
                                                        />
                                                    )}

                                                    {/* Arrow */}
                                                    <motion.span
                                                        className={`text-lg ${activeItem === item.id
                                                            ? 'text-purple-600'
                                                            : 'text-gray-400'
                                                            }`}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileHover={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        →
                                                    </motion.span>
                                                </a>
                                            </motion.div>
                                        ))}

                                        {/* Mobile Resume Download Button */}
                                        <motion.div
                                            initial={{ x: 50, opacity: 0, scale: 0.9 }}
                                            animate={{ x: 0, opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: navItems.length * 0.15 + 0.2,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                        >
                                            <a
                                                href="/Robson_Muniz_Lebenslauf_Germany.pdf"
                                                download="Robson_Muniz_Frontend_Developer_CV.pdf"
                                                onClick={() => {
                                                    handleResumeDownload();
                                                    setMobileMenuOpen(false);
                                                }}
                                                className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white group relative overflow-hidden mt-4"
                                            >
                                                {/* Icon */}
                                                <motion.div
                                                    className="p-3 rounded-lg bg-white/20"
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <FileText className="w-5 h-5" />
                                                </motion.div>

                                                {/* Text */}
                                                <div className="flex-1">
                                                    <span className="font-medium text-lg">
                                                        Download Resume
                                                    </span>
                                                    <p className="text-sm text-purple-200">
                                                        PDF (German format)
                                                    </p>
                                                </div>

                                                {/* Download Icon */}
                                                <motion.div
                                                    animate={{ y: [0, -3, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <Download className="w-5 h-5" />
                                                </motion.div>
                                            </a>
                                        </motion.div>
                                    </div>
                                </nav>

                                {/* Mobile Footer */}
                                <div className="p-6 border-t border-gray-300 dark:border-gray-800">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                                        Let's build something amazing together
                                    </p>
                                    <motion.div
                                        className="flex justify-center gap-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    </motion.div>
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