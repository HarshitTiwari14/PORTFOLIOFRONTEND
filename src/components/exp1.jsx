import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Make sure version supports this
import 'swiper/css';
import 'swiper/css/pagination';

const Exp1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white px-4">
      <div className="max-w-2xl text-justify">

        {/* Image Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mb-6 rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/images/solar-dust-cleaning1.jpg"
              alt="Dust Cleaning 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/solar-dust-cleaning2.jpg"
              alt="Dust Cleaning 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/solar-dust-cleaning3.jpg"
              alt="Dust Cleaning 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Vocational Trainee at NTPC Korba   
        </h1>

        {/* Description */}
        <h2 className="text-xl font-semibold mb-2 underline">Training Overview</h2>
        <p className="text-gray-300">
          As an IT Vocational Trainee at NTPC Korba, I was responsible for understanding and assisting in the maintenance of core IT infrastructure used across the plant. My role involved gaining hands-on experience with network administration, database management, and cybersecurity protocols implemented at NTPC. I worked closely with the IT team to support system diagnostics, troubleshooting of hardware and software issues, and the monitoring of SCADA-based industrial systems. Additionally, I contributed to routine maintenance of the LAN/WAN network, observed data backup and disaster recovery operations, and documented process workflows. This training provided me with valuable exposure to real-time power plant operations, enterprise IT environments, and industrial automation technologies.
        </p>
      </div>
    </div>
  );
};

export default Exp1;
