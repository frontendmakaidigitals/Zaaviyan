"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import gsap from "gsap";
import { StarFour } from "@phosphor-icons/react";
const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Active slide index
  const swiperRef = useRef(null); // Ref to the Swiper instance

  const slider = [
    {
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1532562145520-b8cce2486cd2?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  interface SwiperRef {
    current: {
      swiper: {
        slideTo: (index: number) => void;
        slideNext: () => void;
        slidePrev: () => void;
      };
    } | null;
  }

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    (swiperRef as SwiperRef).current?.swiper.slideTo(index);
  };

  const handlePrevClick = () => {
    (swiperRef as SwiperRef).current?.swiper.slidePrev();
  };

  const handleNextClick = () => {
    (swiperRef as SwiperRef).current?.swiper.slideNext();
  };
  const getDirection = (animationProgress: number) => {
    if (animationProgress === 0) return "NONE";
    return animationProgress > 0 ? "NEXT" : "BACK";
  };

  const setTranslate = (swiper: any, wrapperTranslate: number) => {
    const slides = swiper.slides;
    const durationInSeconds = swiper.params.speed / 1000;

    slides.forEach((slide: any, index: number) => {
      const offset = slide.swiperSlideOffset;
      let x = -offset;
      if (!swiper.params.virtualTranslate) x -= swiper.translate;

      let y = 0;
      if (!swiper.isHorizontal()) {
        y = x;
        x = 0;
      }

      const progress = slide.progress;

      const scale = 1 - 0.05 * progress;
      const opacity = Math.max(1 - Math.abs(progress), 0);

      gsap.to(slide, {
        duration: durationInSeconds,
        scale: scale,
        opacity: opacity,
        x: x,
        y: y,
      });
    });
  };

  return (
    <div className="h-screen relative w-full overflow-hidden bg-gray-100">
      {/* Left Arrow Button */}

      {/* Custom Pagination Dots */}
      <div className="absolute hidden hover:scale-[1.2] transition-all origin-bottom-right duration-300 lg:flex items-center gap-2 bottom-10 z-10 right-10">
        <button
          onClick={handlePrevClick}
          className=" bg-black text-white p-2 rounded-full z-10"
        >
          <ArrowLeft />
        </button>

        {/* Right Arrow Button */}

        <div className="flex  p-3 justify-between items-center gap-2 rounded-full bg-slate-200/60 backdrop-filter backdrop-blur-lg">
          {Array.from({ length: slider.length }).map((_, idx) => (
            <div
              key={idx}
              onClick={() => handleDotClick(idx)} // Trigger slide change on dot click
              className={`bg-black rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeIndex === idx ? "w-8 h-2" : "w-2 h-2"
              }`}
            ></div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className=" bg-black text-white p-2 rounded-full z-10"
        >
          <ArrowRight />
        </button>
      </div>

      <div className="absolute top-1/2 container left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 ">
          <h1 className="text-7xl uppercase text-slate-50 text-center">
          Exceptional <span className="text-lime-400 italic lowercase">(residential)</span>
          <br />
          real <span><StarFour className="inline-block align-middle text-lime-400" weight="fill" /></span> estate broker
          </h1>
      </div>

      {/* Swiper Component */}
      <Swiper
        ref={swiperRef} // Attach the ref to Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        watchSlidesProgress={true}
        virtualTranslate={true}
      
        onProgress={(swiper, progress) => {
          setTranslate(swiper, progress);
        }}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)} // Update the active index on slide change
        className="mySwiper"
        simulateTouch={false} // Disable touch swipe
      >
        {slider.map((elem, idx) => (
          <SwiperSlide key={idx} className="w-full h-full ">
            <div className="w-full h-full overflow-hidden">
              <div className="w-full h-full bg-slate-900/40 absolute top-0 left-0" />
              <img className="w-full h-full object-cover" src={elem.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
