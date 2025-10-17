import {motion, AnimatePresence} from 'framer-motion';
import {useState, useEffect} from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link or scrolling
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleScrollClose = () => {
            if (mobileMenuOpen) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScrollClose);
        return () => window.removeEventListener('scroll', handleScrollClose);
    }, [mobileMenuOpen]);

    const navItems = [
        {name: 'Home', href: '#home', icon: '🏠'},
        {name: 'Projects', href: '#projects', icon: '💼'},
        {name: 'Skills', href: '#skills', icon: '🛠️'},
        {name: 'Contact', href: '#contact', icon: '📧'},
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-purple-500/10 border-b border-slate-700/30'
                        : 'bg-transparent'
                }`}
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{duration: 0.6, ease: 'easeOut'}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="relative text-2xl font-bold cursor-pointer overflow-hidden group"
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        <a href="#home" className="block">
                            <span
                                className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                RM
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"
                                initial={{opacity: 0, scale: 0.5}}
                                whileHover={{opacity: 1, scale: 1.5}}
                                transition={{duration: 0.3}}
                            />
                        </a>
                    </motion.div>

                    {/* Desktop Nav Items */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={item.name}
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1, duration: 0.5}}
                                onHoverStart={() => setHoveredItem(index)}
                                onHoverEnd={() => setHoveredItem(null)}
                            >
                                <a
                                    href={item.href}
                                    className="relative block px-4 sm:px-6 py-2 text-slate-200 transition-colors duration-200 group"
                                    aria-label={`Navigate to ${item.name}`}
                                >
                                    <motion.div
                                        className="relative z-10 flex items-center gap-3"
                                        animate={{
                                            scale: hoveredItem === index ? 1.05 : 1,
                                            y: hoveredItem === index ? -2 : 0,
                                        }}
                                        transition={{duration: 0.2}}
                                    >
                                        <motion.span
                                            animate={{
                                                rotate: hoveredItem === index ? [0, -10, 10, 0] : 0,
                                                scale: hoveredItem === index ? 1.2 : 0,
                                            }}
                                            transition={{duration: 0.5}}
                                            className="text-sm"
                                        >
                                            {hoveredItem === index && item.icon}
                                        </motion.span>
                                        <span className={`transition-colors duration-200 ${
                                            hoveredItem === index
                                                ? 'text-white font-semibold'
                                                : 'text-slate-300 hover:text-white'
                                        }`}>
                                            {item.name}
                                        </span>
                                    </motion.div>

                                    {/* Animated underline */}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"
                                        initial={{scaleX: 0}}
                                        animate={{
                                            scaleX: hoveredItem === index ? 1 : 0,
                                        }}
                                        transition={{duration: 0.3}}
                                    />
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{scale: 0.95}}
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? 45 : 0,
                                y: mobileMenuOpen ? 6 : 0,
                                backgroundColor: mobileMenuOpen ? '#ffffff' : '#cbd5e1'
                            }}
                            className="w-5 h-0.5 bg-slate-300 mb-1 rounded-full"
                        />
                        <motion.span
                            animate={{
                                opacity: mobileMenuOpen ? 0 : 1,
                                backgroundColor: mobileMenuOpen ? '#ffffff' : '#cbd5e1'
                            }}
                            className="w-5 h-0.5 bg-slate-300 mb-1 rounded-full"
                        />
                        <motion.span
                            animate={{
                                rotate: mobileMenuOpen ? -45 : 0,
                                y: mobileMenuOpen ? -6 : 0,
                                backgroundColor: mobileMenuOpen ? '#ffffff' : '#cbd5e1'
                            }}
                            className="w-5 h-0.5 bg-slate-300 rounded-full"
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className="fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{x: '100%'}}
                            animate={{x: 0}}
                            exit={{x: '100%'}}
                            transition={{type: 'spring', damping: 30, stiffness: 300}}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-50 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="p-6 border-b border-slate-700/50">
                                    <h2 className="text-xl font-bold text-white">Navigation</h2>
                                </div>

                                {/* Menu Items */}
                                <nav className="flex-1 p-6">
                                    <ul className="space-y-4">
                                        {navItems.map((item, index) => (
                                            <motion.li
                                                key={item.name}
                                                initial={{x: 50, opacity: 0}}
                                                animate={{x: 0, opacity: 1}}
                                                transition={{delay: index * 0.1 + 0.2}}
                                            >
                                                <a
                                                    href={item.href}
                                                    className="flex items-center gap-4 p-4 text-lg text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-2xl transition-all duration-200 border border-transparent hover:border-slate-700/50"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <span className="text-xl">{item.icon}</span>
                                                    <span className="font-medium">{item.name}</span>
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Footer */}
                                <div className="p-6 border-t border-slate-700/50">
                                    <p className="text-slate-400 text-sm text-center">
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