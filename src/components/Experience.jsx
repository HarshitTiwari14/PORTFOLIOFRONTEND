import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Experience = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-16 px-4 md:px-8"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="mt-16 mb-12 text-center text-4xl text-white"
        variants={itemVariant}
      >
        Projects & Experience
      </motion.h1>

      {/* Projects Section */}
      <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <motion.h2 className="mb-8 text-3xl text-white" variants={itemVariant}>
          Projects
        </motion.h2>

        <motion.div className="card mb-8 bg-gray-800 text-white p-4 rounded-xl shadow-lg" variants={itemVariant}>
          <h5 className="text-xl font-semibold mb-2">AI & IoT Based Dust Cleaning System for Solar PV Modules</h5>
          <p className="text-sm mb-4">
            Developed an intelligent AI & IoT-based dust cleaning system for solar photovoltaic modules to improve efficiency and reduce maintenance. The system uses an image classification model CNN trained to detect dust accumulation on panels in real time. Environmental data from dust and temperature sensors are analyzed by an ESP32 microcontroller...
          </p>
          <Link to="/project1" className="btn btn-primary mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Read More
          </Link>
        </motion.div>

        <motion.div className="card mb-8 bg-gray-800 text-white p-4 rounded-xl shadow-lg" variants={itemVariant}>
          <h5 className="text-xl font-semibold mb-2">Real‑Time Chat App with MERN Stack & Microservices</h5>
          <p className="text-sm mb-4">
            Built a production-ready real-time messaging platform leveraging a MERN stack and microservices architecture. Integrated RabbitMQ for asynchronous event handling and WebSocket streaming, enabling low-latency, scalable chat services. Designed independent services with Node.js/Express communicating via message queues....
          </p>
          <Link to="/project2" className="btn btn-primary mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Read More
          </Link>
        </motion.div>

        <motion.div className="card mb-12 bg-gray-800 text-white p-4 rounded-xl shadow-lg" variants={itemVariant}>
          <h5 className="text-xl font-semibold mb-2">Random Forest-Powered Classification Framework for Parkinsons Disease Diagnosis from Biomedical Voice Signals</h5>
          <p className="text-sm mb-4">
            Developed a machine learning-based diagnostic tool for early detection of Parkinson’s Disease using biomedical voice signal data. Utilized Random Forest Classifier to classify voice recordings based on vocal features such as jitter, shimmer, and pitch variation. Preprocessed the dataset, performed exploratory data analysis (EDA), and engineered features relevant to vocal degradation...
          </p>
          <Link to="/project3" className="btn btn-primary mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Read More
          </Link>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={containerVariant} initial="hidden" animate="visible">
        <motion.h2 className="mb-8 text-3xl text-white" variants={itemVariant}>
          Experience
        </motion.h2>

        <motion.div className="card mb-12 bg-gray-800 text-white p-4 rounded-xl shadow-lg" variants={itemVariant}>
          <h5 className="text-xl font-semibold mb-2">NTPC Ltd, CG, IND</h5>
          <p className="text-sm mb-4">
            As an IT Vocational Trainee at NTPC Korba, I was responsible for understanding and assisting in the maintenance of core IT infrastructure used across the plant. My role involved gaining hands-on experience with network administration, database management, and cybersecurity protocols implemented at NTPC.          </p>
          <Link to="/exp1" className="btn btn-primary mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Read More
          </Link>
        </motion.div>
      </motion.div>
      </motion.div>
  );
};

export default Experience;
