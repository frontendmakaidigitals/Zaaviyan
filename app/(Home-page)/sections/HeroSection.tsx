"use client";
import React from "react";
import Marquee from "@/app/App_Chunks/Components/Marquee";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { GridPattern } from "@/app/App_Chunks/Components/GridPattern";
const HeroSection = () => {
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

  const firstRow = slider.slice(0, slider.length / 2);
  const secondRow = slider.slice(slider.length / 2);

  return (
    <div className="h-auto pb-16 lg:pb-0 lg:h-[99vh] relative w-full overflow-hidden bg-[#645f59]">
      {/* Left Arrow Button */}

      <GridPattern
        width={35}
        height={35}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center">
        <div className="flex justify-center order-1 ">
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl capitalize text-slate-50 text-left">
              Bringing Your Dream <br /> Spaces to Life
            </h1>
            <p className=" text-slate-100  mt-3 text-md md:text-lg">
              At Zaaviyan Contracting, we craft bespoke interiors that blend
              aesthetics with functionality. As a leading fit-out company, we
              transform residential, commercial, and hospitality spaces into
              inspiring environments. From concept to completion, we bring your
              vision to life with precision, creativity, and a commitment to
              excellence.
            </p>
            <button className=" flex items-center mt-3 relative rounded-full">
              <span className="bg-[#FFB38E] py-3 pl-5 pr-3 rounded-full">
                Get a quote
              </span>{" "}
              <span className="bg-[#FFB38E] absolute left-[95%] top-1/2 -translate-y-1/2 p-3 rounded-full">
                <ArrowRight className="text-2xl" />
              </span>
            </button>
          </div>
        </div>
        <div className="grid lg:order-1 grid-cols-2 shadow-[0_0_60px_#D7CCC8] bg-[#9b9287] overflow-hidden h-[450px] md:h-[700px] lg:h-[99vh]">
          <Marquee vertical className="[--duration:20s]">
            {firstRow.map((img, idx) => (
              <img key={idx} src={img.img} />
            ))}
          </Marquee>
          <Marquee reverse vertical className="[--duration:20s]">
            {secondRow.map((img, idx) => (
              <img key={idx} src={img.img} />
            ))}
          </Marquee>
        </div>
      </div>

      <div className="absolute z-20 flex justify-end xl:justify-center items-center  bottom-0 left-0 w-full h-[30px]">
        <div className="w-0 h-0 border-l-transparent border-l-[30px] border-b-[30px] border-b-[#F7F7F7]"></div>
        <div className="w-[40vw] bg-[#F7F7F7] h-full"></div>
        <div className="w-0 h-0 border-r-[30px] hidden xl:block border-l-transparent  border-r-transparent border-b-[30px] border-b-[#F7F7F7]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
