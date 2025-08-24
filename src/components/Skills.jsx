import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// ✅ Skills Data with Category Colors
const skillsData = [
  {
    title: "Languages",
    description: "Programming languages I use frequently",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    items: ["Python", "Java", "JavaScript"]
  },
  {
    title: "Databases",
    description: "Database systems I’ve worked with",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
    items: ["MongoDB", "MySQL", "Redis"]
  },
  {
    title: "Frameworks & Tools",
    description: "Frameworks and developer tools",
    color: "bg-gradient-to-r from-purple-500 to-pink-600",
    items: ["Flask", "Express.js", "Node.js", "React.js", "Docker", "WordPress", "Git"]
  },
  {
    title: "Cloud / Platforms",
    description: "Cloud and platforms for deployment",
    color: "bg-gradient-to-r from-orange-400 to-yellow-500",
    items: ["Google Cloud Platform", "Node-RED", "Cloudinary"]
  },
  {
    title: "Developer Tools",
    description: "Other tools I use regularly",
    color: "bg-gradient-to-r from-gray-600 to-gray-800",
    items: ["MongoDB Compass", "MySQL Workbench", "Redis CLI"]
  }
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Responsive Detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      className="border-b border-neutral-900 pb-16 px-4 md:px-8 lg:px-16"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Section Title */}
      <motion.h1 
        className={`mt-16 mb-12 text-center ${isMobile ? 'text-3xl' : 'text-4xl'} text-white`} 
        variants={itemVariant}
      >
        Skills
      </motion.h1>

      {/* ✅ Dynamic Rendering of Skills */}
      {skillsData.map((category, index) => (
        <motion.div 
          key={index}
          className="flex flex-col gap-6 mb-12"
          variants={containerVariant}
        >
          {/* Category Title */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-white px-4"
            variants={itemVariant}
          >
            {category.title}
          </motion.h2>

          {/* Category Description */}
          <motion.p 
            className="text-lg md:text-xl font-light text-gray-300 px-4"
            variants={itemVariant}
          >
            {category.description}
          </motion.p>

          {/* Items (Colored Boxes) */}
          <div className="flex flex-wrap gap-3 px-4">
            {category.items.map((skill, idx) => (
              <motion.div
                key={idx}
                className={`${category.color} text-white px-4 py-2 rounded-xl shadow-md text-sm md:text-base font-medium`}
                variants={itemVariant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
