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

const Experience = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-8"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="my-20 text-center text-4xl text-white" variants={itemVariant}>
        Projects & Experience
      </motion.h1>

      {/* Projects Section */}
      <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <motion.h1 className="my-10 text-4xl text-white px-8 pb-1.5" variants={itemVariant}>
          Projects
        </motion.h1>

        <motion.div className="card my-10 bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header">IoT-Driven Dust Cleaning System for Solar PV Modules</h5>
          <div className="card-body">
            <h5 className="card-title">
              IoT, solar PV modules, dust cleaning, automated system, smart sensors, real-time monitoring, photovoltaic efficiency, maintenance optimization, environmental sustainability, energy harvesting.
            </h5>
            <a href="#" className="btn btn-primary" aria-label="Read more about IoT-Driven Dust Cleaning System">
              Read Here
            </a>
          </div>
        </motion.div>

        <motion.div className="card bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header">IoT Based ECG Monitor and ECG Graph Analysis</h5>
          <div className="card-body">
            <h5 className="card-title">
              IoT, ECG Monitor, ECG Graph Analysis, Ubidots Integration, Real-Time Monitoring, Health Tech, IoT Healthcare, Data Visualization, Remote Monitoring, IoT Medical Device, ECG Signal Processing, Cloud Analytics, IoT Dashboard, Heart Health Tracker.
            </h5>
            <a href="#" className="btn btn-primary" aria-label="Read more about IoT Based ECG Monitor">
              Read Here
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <motion.h1 className="my-10 text-4xl px-8 text-white" variants={itemVariant}>
          Experience
        </motion.h1>

        <motion.div className="card my-10 bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary" aria-label="Go to more information">
              Go somewhere
            </a>
          </div>
        </motion.div>

        <motion.div className="card bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary" aria-label="Go to more information">
              Go somewhere
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;