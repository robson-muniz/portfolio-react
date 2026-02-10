// components/SectionDivider.jsx
'use client'

import { motion } from 'framer-motion';

const SectionDivider = ({ index }) => {
  const colors = [
    {
      gradient: 'from-purple-600 via-pink-600 to-blue-600',
      icon: '🚀',
      label: 'Projects'
    },
    {
      gradient: 'from-pink-600 via-red-600 to-orange-600',
      icon: '⚡',
      label: 'Skills'
    },
    {
      gradient: 'from-blue-600 via-cyan-600 to-emerald-600',
      icon: '💬',
      label: 'Contact'
    },
    {
      gradient: 'from-emerald-600 via-green-600 to-yellow-600',
      icon: '🌟',
      label: 'Footer'
    }
  ];

  const current = colors[index % colors.length];

  return (
    <div className="relative w-full h-40 overflow-hidden">
      {/* Main wave */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`wave-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="stop-color-purple-600" />
            <stop offset="50%" className="stop-color-pink-600" />
            <stop offset="100%" className="stop-color-blue-600" />
          </linearGradient>
        </defs>
        <path
          d="M0 0L50 20C100 40 200 80 300 93C400 107 500 93 600 80C700 67 800 53 900 53C1000 53 1100 67 1150 73L1200 80V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0V0Z"
          fill={`url(#wave-gradient-${index})`}
          fillOpacity="0.8"
        />
      </svg>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Center icon with label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${current.gradient.split(' ')[0]} ${current.gradient.split(' ')[2]} flex items-center justify-center shadow-2xl border-2 border-white/20 backdrop-blur-lg mb-4`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-3xl">{current.icon}</span>
          </motion.div>

          <motion.span
            className="text-white font-semibold text-sm tracking-wider uppercase"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {current.label}
          </motion.span>
        </motion.div>
      </div>

      {/* Glow effects */}
      <div className={`absolute -inset-8 bg-gradient-to-r ${current.gradient} opacity-20 blur-3xl`} />
    </div>
  );
};

export default SectionDivider;