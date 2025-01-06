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
      <motion.div variants={containerVariant}>
        <motion.h1 className="my-10 text-4xl text-white px-8 pb-1.5" variants={itemVariant}>
          Projects
        </motion.h1>

        <motion.div className="card my-10 bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header bg">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </motion.div>

        <motion.div className="card bg-gray-800  text-white" variants={itemVariant}>
          <h5 className="card-header ">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariant}>
        <motion.h1 className="my-10 text-4xl px-8  text-white" variants={itemVariant}>
          Experience
        </motion.h1>

        <motion.div className="card my-10 bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header ">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </motion.div>

        <motion.div className="card bg-gray-800 text-white" variants={itemVariant}>
          <h5 className="card-header ">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;