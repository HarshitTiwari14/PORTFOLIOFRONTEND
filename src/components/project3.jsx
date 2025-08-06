import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Github } from 'lucide-react'; // Using lucide-react GitHub icon
import 'swiper/css';
import 'swiper/css/pagination';

const Project3 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-2xl w-full text-justify">
        {/* Image Slider with Icon */}
        <div className="relative mb-8 rounded-lg shadow-lg">
          {/* GitHub Icon inside slider */}
          <div className="absolute top-4 right-4 z-10">
            <a
              href="https://github.com/HarshitTiwariAI/ai-iot-dust-cleaning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
              title="View Source on GitHub"
            >
              <Github className="text-3xl md:text-4xl" />
            </a>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-lg"
          >
            <SwiperSlide>
              <img
                src="/images/p3img1.png"
                alt="Dust Cleaning 1"
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/p3img2.png"
                alt="Dust Cleaning 2"
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Random Forest-Powered Classification Framework for Parkinson's Disease Diagnosis from Biomedical Voice Signals
        </h1>

        {/* Technology Used */}
        <h2 className="text-xl font-semibold mb-2 underline">Technologies Used</h2>
        <p className="mb-6 text-gray-300">
          Python, Flask, Random Forest, Dataset, Kaggle, Cloud.
        </p>

        {/* Project Description */}
         <h2 className="text-xl font-semibold mb-2 underline">Project Description</h2>
        <p className="text-gray-300">
          This real-time chat application is built using the MERN stack, enhanced with RabbitMQ-based microservices for decoupled and scalable messaging architecture.
          The frontend (ReactJS) offers an intuitive chat interface with support for multiple users, message status indicators, and real-time communication via Socket.IO.
          <br /><br />
          The backend is structured as microservices, with RabbitMQ acting as a message broker to enable asynchronous communication between services like user authentication,
          chat management, and media handling. JWT is used for secure authentication and access control. Uploaded media (images/videos) are stored on Cloudinary, ensuring
          performance and scalability.
          <br /><br />
          Each service is containerized using Docker, enabling independent scaling and deployment. The system is tested via Postman, ensuring robust APIs and integration.
          This architecture allows for fault tolerance, future scalability (adding groups, notifications, or AI bots), and enterprise-grade reliability—ideal for modern real-time applications.
        </p>
      </div>
    </div>
  );
};

export default Project3;
