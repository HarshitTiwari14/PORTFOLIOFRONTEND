import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillCategories = [
    {
      title: "Hardware",
      description: "Arduino, Raspberry Pi, ESP32, NodeMCU, Sensors, Transducers",
      items: [
        { img: './images/arduino14.png', borderColor: 'border-teal-900', alt: "Arduino" }
      ]
    },
    {
      title: "Software",
      description: "React, Node.js, Express.js, Node-RED",
      items: [
        { img: './images/Images14.png', borderColor: 'border-sky-800', alt: "React" },
        { img: './images/nodejs14.png', borderColor: 'border-green-500', alt: "Node.js" },
        { img: './images/nodered14.png', borderColor: 'border-rose-900', alt: "Node-RED" }
      ]
    },
    {
      title: "Database",
      description: "MongoDB, Microsoft SQL Server, MySQL",
      items: [
        { img: './images/Mongodb14.png', borderColor: 'border-green-800', alt: "MongoDB" },
        { img: './images/sql14.png', borderColor: 'border-amber-200', alt: "SQL" }
      ]
    },
    {
      title: "Data Visualization",
      description: "Power BI, Thinkspeak (Cloud Based Visualization)",
      items: [
        { img: './images/power-bi-icon14.png', borderColor: 'border-amber-500', alt: "Power BI" }
      ]
    }
  ];

  return (
    <motion.div
      className="border-b border-neutral-900 pb-16 px-4 md:px-8 lg:px-16"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className={`mt-16 mb-12 text-center ${isMobile ? 'text-3xl' : 'text-4xl'} text-white`} 
        variants={itemVariant}
      >
        Skills
      </motion.h1>

      {skillCategories.map((category, index) => (
        <motion.div 
          key={index}
          className={`flex flex-col gap-6 mb-16`}
          variants={containerVariant}
        >
          <motion.h2 
            className={`text-2xl md:text-3xl lg:text-4xl font-light text-white px-4`} 
            variants={itemVariant}
          >
            {category.title}
          </motion.h2>
          
          <motion.p 
            className={`text-lg md:text-xl font-light text-white px-4`} 
            variants={itemVariant}
          >
            {category.description}
          </motion.p>
          
          <div className="flex flex-wrap justify-start gap-4 px-4">
            {category.items.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                className={`rounded-2xl border-4 ${item.borderColor} p-2 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center`}
                variants={itemVariant}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={item.img} 
                  className="rounded-lg object-contain w-full h-full" 
                  alt={item.alt} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
