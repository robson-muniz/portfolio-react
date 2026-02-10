'use client'

import { motion } from "framer-motion";

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center z-50"
        >
            <div className="text-center">
                <motion.div
                    className="relative mb-8"
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full mx-auto"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                >
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Robson Muniz
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Loading portfolio...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;