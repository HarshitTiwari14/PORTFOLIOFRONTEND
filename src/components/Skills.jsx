import React from 'react';
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
  return (
    <motion.div
      className="border-b border-neutral-900 pb-6"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="my-20 text-center text-4xl text-white" variants={itemVariant}>
        Skills
      </motion.h1>

      {/* Hardware Section */}
      <motion.div className="flex flex-wrap items-center justify-start gap-4" variants={containerVariant}>
        <motion.h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8" variants={itemVariant}>
          Hardware
        </motion.h2>
        <motion.p className="text-2xl py-4 font-light text-white" variants={itemVariant}>
          Arduino, Raspberry Pi, ESP32, NodeMCU, Sensors, Transducers
        </motion.p>
        <motion.div
          className="rounded-2xl border-4 border-teal-900 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/arduino14.png'} className="rounded-lg" alt="Arduino" />
        </motion.div>
      </motion.div>

      {/* Software Section */}
      <motion.div className="flex flex-wrap items-center justify-start gap-4" variants={containerVariant}>
        <motion.h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8" variants={itemVariant}>
          Software
        </motion.h2>
        <motion.p className="text-2xl py-4 font-light text-white" variants={itemVariant}>
          React, Node.js, Express.js, Node-RED
        </motion.p>
        <motion.div
          className="rounded-2xl border-4 border-sky-800 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/Images14.png'} className="rounded-lg" alt="React" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-green-500 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/nodejs14.png'} className="rounded-lg" alt="Node.js" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-rose-900 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/nodered14.png'} className="rounded-lg" alt="Node-RED" />
        </motion.div>
      </motion.div>

      {/* Database Section */}
      <motion.div className="flex flex-wrap items-center justify-start gap-4" variants={containerVariant}>
        <motion.h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8" variants={itemVariant}>
          Database
        </motion.h2>
        <motion.p className="text-2xl py-4 font-light text-white" variants={itemVariant}>
          MongoDB, Microsoft SQL Server, MySQL
        </motion.p>
        <motion.div
          className="rounded-2xl border-4 border-green-800 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/Mongodb14.png'} className="rounded-lg" alt="MongoDB" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-amber-200 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/sql14.png'} className="rounded-lg" alt="SQL" />
        </motion.div>
      </motion.div>

      {/* Data Visualization Section */}
      <motion.div className="flex flex-wrap items-center justify-start gap-4" variants={containerVariant}>
        <motion.h2 className="my-2 max-w-xl text-4xl py-6 font-light text-white px-8" variants={itemVariant}>
          Data Visualization
        </motion.h2>
        <motion.p className="text-2xl py-4 font-light text-white" variants={itemVariant}>
          Power BI, Thinkspeak (Cloud Based Visualization)
        </motion.p>
        <motion.div
          className="rounded-2xl border-4 border-amber-500 p-4 mx-2 my-4"
          variants={itemVariant}
        >
          <img src={'./images/power-bi-icon14.png'} className="rounded-lg" alt="Power BI" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;