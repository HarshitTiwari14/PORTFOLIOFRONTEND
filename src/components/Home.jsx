import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const imageSlides = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg',
  '/images/img9.jpg',
  '/images/img10.jpg',
];

const quoteSlides = [
  "Discipline is the bridge between goals and accomplishment.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="border-b border-gray-900 p-4 md:p-8 lg:p-12 font-poppins">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight lg:mt-16 px-5 transition-transform duration-300 hover:scale-105 text-white"
            >
              Welcome to my Website
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent px-5 transition-transform duration-300 hover:scale-105"
            >
              Harshit Tiwari
            </motion.span>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-2 py-4 font-normal text-lg md:text-xl lg:text-2xl text-white px-5 transition-transform duration-300 hover:scale-105"
            >
              I am Harshit Tiwari, a boy always ready to take on new tasks. 
              A boy whose dream is to serve as a soldier in the armed forces. 
              A boy who loves to capture and cherish all moments, whether happy or sad. 
              The boy who used to play with a bat and ball, volleyball, and kabaddi is now playing with microcontrollers, 
              sensors, relays, actuators, programming, and data.
            </motion.p>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="px-5"
            >
              <button
                onClick={() => navigate('/skills')}
                className="text-white px-6 py-2 my-3 flex-item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 hover:scale-105"
              >
                Skills
              </button>
            </motion.span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 px-4">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={'/images/Harshit tiwari.jpg'}
              className="rounded-3xl w-3/4 md:w-2/3 lg:w-full transition-transform duration-300 hover:scale-105"
              alt="Harshit Tiwari"
            />
          </div>
        </div>
      </div>

      {/* 🎞️ My Memories Slider */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center mb-4">
          My Memories
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-xl overflow-hidden"
        >
          {imageSlides.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-96 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* 💬 Thought Slider */}
      <motion.div
        className="my-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl text-white font-semibold text-center mb-4">
          Thoughts that Inspire
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto"
        >
          {quoteSlides.map((quote, index) => (
            <SwiperSlide key={index}>
              <div className="text-white text-lg md:text-xl font-medium text-center px-4 py-6 bg-gradient-to-r from-red-400 to-slate-900 rounded-xl">
                “{quote}”
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Home;
