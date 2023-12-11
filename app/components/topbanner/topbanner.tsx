"use client";

import React from "react";
import Image from "next/image";
import stockRec from "../../../public/images/stockRec.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const handleImageClick = () => {
  // Redirecting to the desired URL
  // window.location.href = 'http://localhost:3001';
  window.open("http://localhost:3001","_blank")
  
};


const TopBanner = () => {


  return (
    <div className="container mx-auto text-center sm:text-left p-4">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {["Muhasebe", "Rezervasyon", "Entegrasyon"].map((title, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-4 rounded text-center sm:text-left">
              <h1 className="text-2xl font-bold mb-2">{title}</h1>
              <div className="w-72 h-72 sm:w-60 sm:h-60 md:w-72 md:h-72 relative flex items-center justify-center mb-2">
                <Image
                  src={stockRec}
                  alt={`Ücretsiz ${title}`}
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                  onClick={handleImageClick}
                />
              </div>

              <h2 className="text-xl mb-2">Daha Kolay {title} Deneyimi</h2>
              <div className="text-gray-700">
                Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline
                gelme yolunda...
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopBanner;
