import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaGithub } from 'react-icons/fa'; // Make sure this is installed: react-icons

const Project2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    { src: '/images/p2img1.png', alt: 'Chat App UI 1' },
    { src: '/images/p2img2.png', alt: 'Chat App UI 2' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
              setIsPlaying(true);
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-black text-white px-4 py-10">
      
      {/* Image Slider with GitHub Icon on Top */}
      <div className="relative w-full max-w-5xl mb-6 rounded-lg overflow-hidden shadow-lg">
        
        {/* GitHub Icon inside image slider */}
        <a
          href="https://github.com/HarshitTiwariAI/ai-iot-dust-cleaning"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20 text-white bg-black/70 p-2 rounded-full hover:text-gray-300 transition"
          title="View Source on GitHub"
        >
          <FaGithub className="text-2xl md:text-3xl" />
        </a>

        {/* Swiper Image Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Real‑Time Chat App with MERN & RabbitMQ Microservices
      </h1>

      {/* Technology Used */}
      <h2 className="text-xl font-semibold mb-2 underline">Technologies Used</h2>
      <p className="mb-6 text-gray-300 text-center max-w-4xl">
        ReactJS, Node.js, Express, MongoDB, RabbitMQ, Socket.IO, Docker, Postman, JWT for security, Cloudinary.
      </p>

      {/* Project Description */}
      <h2 className="text-xl font-semibold mb-2 underline">Project Description</h2>
      <p className="text-gray-300 text-justify max-w-4xl">
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

      {/* Autoplay Video with Controls */}
      <div className="mt-16 w-full max-w-3xl px-4">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg mb-4"
          muted
          loop
          controls
          playsInline
          preload="auto"
          src="/images/p2vid1.webm"
        />
      </div>
    </div>
  );
};

export default Project2;
