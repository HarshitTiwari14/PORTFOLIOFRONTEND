import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

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

// ✅ Projects Data (Can also be moved to a JSON file)
const projects = [
  {
    title: "AI & IoT Based Dust Cleaning System for Solar PV Modules",
    description:
      "Developed an intelligent AI & IoT-based dust cleaning system for solar photovoltaic modules to improve efficiency and reduce maintenance...",
    link: "/project1",
  },
  {
    title: "Real-Time Chat App with MERN Stack & Microservices",
    description:
      "Built a production-ready real-time messaging platform leveraging a MERN stack and microservices architecture...",
    link: "/project2",
  },
  {
    title:
      "Random Forest-Powered Classification Framework for Parkinson’s Disease Diagnosis",
    description:
      "Developed a machine learning diagnostic tool for early detection of Parkinson’s Disease using biomedical voice signals...",
    link: "/project3",
  },
];

// ✅ Experience Data
const experiences = [
  {
    company: "NTPC Ltd, CG, IND",
    role: "IT Vocational Trainee",
    description:
      "Worked at NTPC Korba on IT infrastructure maintenance. Gained hands-on experience in network administration, database management, and cybersecurity protocols.",
    link: "/exp1",
  },
];

const Experience = () => {
  const [viewMode, setViewMode] = useState("card"); // "card" or "list"

  return (
    <motion.div
      className="border-b border-neutral-900 pb-16 px-4 md:px-8"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Section Title */}
      <motion.h1
        className="mt-16 mb-8 text-center text-4xl text-white"
        variants={itemVariant}
      >
        Projects & Experience
      </motion.h1>

      {/* ✅ Toggle Buttons for User View Mode */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setViewMode("card")}
          className={`px-4 py-2 rounded ${
            viewMode === "card"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Card View
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`px-4 py-2 rounded ${
            viewMode === "list"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          List View
        </button>
      </div>

      {/* Projects Section */}
      <motion.div variants={containerVariant}>
        <motion.h2 className="mb-8 text-3xl text-white" variants={itemVariant}>
          Projects
        </motion.h2>

        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className={`${
              viewMode === "card"
                ? "bg-gray-800 p-4 rounded-xl shadow-lg mb-8"
                : "border-b border-gray-600 py-4"
            } text-white`}
            variants={itemVariant}
          >
            <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
            <p className="text-sm mb-4">{project.description}</p>
            <Link
              to={project.link}
              className="btn btn-primary mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={containerVariant}>
        <motion.h2 className="mb-8 text-3xl text-white" variants={itemVariant}>
          Experience
        </motion.h2>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className={`${
              viewMode === "card"
                ? "bg-gray-800 p-4 rounded-xl shadow-lg mb-12"
                : "border-b border-gray-600 py-4"
            } text-white`}
            variants={itemVariant}
          >
            <h5 className="text-xl font-semibold mb-2">{exp.company}</h5>
            <p className="text-sm mb-2 italic">{exp.role}</p>
            <p className="text-sm mb-4">{exp.description}</p>
            <Link
              to={exp.link}
              className="btn btn-primary mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
