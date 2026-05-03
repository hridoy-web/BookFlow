"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = () => {
  return (

    <section className="container mx-auto my-8 md:my-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-3xl overflow-hidden shadow-sm"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero bg-linear-to-r from-primary/20 to-secondary/20 min-h-[400px] md:min-h-[550px]">

            <div className="hero-content flex-col lg:flex-row-reverse py-10 px-4 md:px-6 gap-10 lg:gap-24">

              <div className="flex flex-1 justify-center md:justify-end">
                <Image
                  src="/banner.png"
                  alt="BookFlow Banner image"
                  width={750}
                  height={450}
                  className='shadow-xl rounded-3xl hover:scale-105 duration-500 cursor-pointer transition-all'
                  priority
                />
              </div>

              <div className='max-w-md md:max-w-full flex-1 '>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
                  Welcome to <span className="text-primary">BookFlow</span>
                </h1>
                <p className="py-6 text-lg md:text-xl text-gray-600">
                Your ultimate destination for discovering great books. BookFlow makes managing your reading list easier than ever.
                </p>
                <Link href={'/allbooks'} className="flex items-center">
                  <button className="btn btn-lg rounded-full bg-linear-to-r from-violet-500 to-pink-500 text-white border-none transition-all duration-500 hover:scale-95 shadow-xl px-12">
                    Browse Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero bg-linear-to-r from-primary/20 to-secondary/20 min-h-[400px] md:min-h-[550px]">

            <div className="hero-content flex-col lg:flex-row-reverse py-10 px-4 md:px-6 gap-10 lg:gap-24">
              <div className="flex flex-1 justify-center md:justify-end">
                <Image
                  src="/banner.png"
                  alt="Bookflow banner image"
                  width={750}
                  height={450}
                  className='shadow-xl rounded-3xl'
                />
              </div>
              <div className='max-w-md md:max-w-full flex-1'>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center md:text-left leading-tight">
                  Find Your Next <span className="text-primary">Read</span>
                </h1>
                <p className="py-6 text-lg md:text-xl text-gray-600">
                   Explore a vast collection of books across various categories and start your digital reading journey today.
                </p>
                <Link href={'/allbooks'}>
                  <button className="btn btn-lg rounded-full bg-linear-to-r from-violet-500 to-pink-500 text-white border-none shadow-xl hover:scale-95 px-12">
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;