import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaGithub } from 'react-icons/fa';

// ✅ ImageSlider Component
const ImageSlider = () => {
  const images = [
    { src: '/images/pimg1.jpg', alt: 'Dust Cleaning 1' },
    { src: '/images/pimg2.jpg', alt: 'Dust Cleaning 2' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// ✅ Main Project Component
const Project1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-3xl w-full text-justify relative">

        {/* Top GitHub Icon */}
        <div className="absolute top-4 right-4 z-10">
          <a
            href="https://github.com/HarshitTiwariAI/ai-iot-dust-cleaning"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            title="View Source on GitHub"
          >
            <FaGithub className="text-3xl md:text-4xl" />
          </a>
        </div>

        {/* Image Slider Section */}
        <ImageSlider />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          AI & IoT Based Dust Cleaning System
        </h1>

        {/* Technology Used */}
        <h2 className="text-xl font-semibold mb-2 underline">Technologies Used</h2>
        <p className="mb-6 text-gray-300">
          IoT, ESP32 Microcontroller, AI (CNN with TensorFlow), VGG16, Image Classification, Sensors (Dust, Temperature),
          Real-time Monitoring, Relay Modules, Water Pump, Node-RED.
        </p>

        {/* Project Description */}
        <h2 className="text-xl font-semibold mb-2 underline">Project Description</h2>
        <p className="text-gray-300 mb-2">
          This project integrates smart IoT sensors and AI logic for automatic dust cleaning in solar PV modules.
          It employs a convolutional neural network (CNN) for classifying panel cleanliness using real-time images.
          Based on sensor readings and image classification, a water pump is triggered to clean the panel.
          This helps improve solar efficiency, reduce human maintenance, and support sustainable energy practices.
        </p>

        <p className="text-gray-300 mb-2">
          The system is divided into six connected layers. This layered architecture begins with the Sensing/Data Collection Layer,
          where sensors capture temperature, light intensity, voltage, current, and panel images. The raw data is passed to the
          Data Preprocessing and Inference Layer, where it is cleaned and analyzed using models like CNN (VGG-16) to detect dust
          or overheating. Based on results, the Control Signals Layer triggers actions such as activating a water pump via relay.
          Processed data and control outcomes are transmitted through the Communication Layer using protocols like MQTT.
          The data is then stored and displayed in the Data Storage & Visualization Layer for real-time system monitoring.
          Finally, the Application Layer provides a user interface for manual control and monitoring.
        </p>

        <p className="text-gray-300 mb-2">
          The communication layer uses the MQTT protocol for real-time data transfer between the ESP32 and an IoT cloud platform.
          A local dashboard provides a user-friendly interface to monitor system performance and historical data.
          It also allows manual control and schedule adjustments. The application layer supports remote monitoring via web or
          mobile apps and sends real-time alerts for any abnormal activity.
        </p>

        <p className="text-gray-300 mb-6">
          The system operates on power from both a PV module and a 9V battery to ensure continuous operation. A submersible water
          pump, controlled via relay through the ESP32, sprays water to clean dust from the panel. With real-time processing,
          sensor data integration, and robust communication, this IoT-based system boosts PV efficiency and reduces maintenance
          needs—ideal for deployment in dusty or remote environments.
        </p>

        <p className="text-gray-300">
          The IoT-based dust cleaning system prototype costs ₹680. However, the system provides significant long-term energy and cost
          savings. With 8 hours of daily sunlight, it saves approximately 15.06 watts daily—equaling 0.12048 kWh per day or
          3.6144 kWh per month. At ₹8 per kWh electricity rate, this results in monthly savings of ₹28.91. Therefore, the estimated
          payback period is about 23 months (~1.9 years), making this an economically viable and sustainable solution.
        </p>

      </div>
    </div>
  );
};

export default Project1;
