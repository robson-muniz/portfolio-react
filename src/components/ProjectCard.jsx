// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Monitor, Smartphone, Globe } from 'lucide-react';

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject }) => {
  const categoryColors = {
    web: { gradient: "from-blue-500 to-cyan-500", icon: <Globe className="w-4 h-4" /> },
    fullstack: { gradient: "from-purple-500 to-pink-500", icon: <Monitor className="w-4 h-4" /> },
    mobile: { gradient: "from-emerald-500 to-teal-500", icon: <Smartphone className="w-4 h-4" /> }
  };

  const category = categoryColors[project.category] || categoryColors.web;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group"
    >
      {/* Device Mockup Container */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">

        {/* Device Frame - Laptop */}
        <div className="relative mx-auto max-w-3xl">
          {/* Laptop Top */}
          <div className="relative bg-gray-800 rounded-t-2xl pt-2 px-4 pb-0 mx-auto w-full">
            {/* Camera */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full" />

            {/* Screen */}
            <div className="relative bg-gray-900 rounded-t-lg overflow-hidden border border-gray-700 h-48">
              {/* Project Screenshot */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain"
                animate={{
                  scale: hoveredProject === project.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.6 }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                                        <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${category.gradient} bg-opacity-10">
                                            <div class="text-3xl mb-2">${project.icon}</div>
                                            <div class="text-gray-900 dark:text-white font-semibold text-center px-4">${project.title}</div>
                                        </div>
                                    `;
                }}
              />

              {/* Hover overlay for screenshot */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-4 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium text-sm flex items-center gap-2 shadow-lg"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <Eye size={14} />
                  Open Project
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Laptop Bottom */}
          <div className="bg-gray-800 rounded-b-2xl h-4 mx-auto w-11/12 relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full" />
          </div>
        </div>

        {/* Content below device */}
        <div className="mt-6">
          {/* Title and Category */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`p-1.5 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                  {category.icon}
                </span>
                <span className={`text-xs font-medium bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {project.category.toUpperCase()}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="text-gray-400 hover:text-blue-500 transition-colors p-1"
            >
              <ExternalLink size={18} />
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack - Horizontal scroll for many tags */}
          <div className="mb-6 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm gap-2 hover:opacity-90 transition-opacity shadow-md"
            >
              <Eye size={16} />
              Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600"
            >
              <Github size={16} />
              View Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;