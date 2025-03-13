"use client";
import React from "react";
import Marquee from "@/app/App_Chunks/Components/Marquee";
import { ArrowRight } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { GridPattern } from "@/app/App_Chunks/Components/GridPattern";
const HeroSection = () => {
  const slider = [
    {
      img: "https://raw.githubusercontent.com/frontendmakaidigitals/Zaaviyan/refs/heads/main/public/heroSection/herosection1.jpg",
    },
    {
      img: "https://raw.githubusercontent.com/frontendmakaidigitals/Zaaviyan/refs/heads/main/public/heroSection/herosection2.jpg",
    },
    {
      img: "https://raw.githubusercontent.com/frontendmakaidigitals/Zaaviyan/refs/heads/main/public/heroSection/herosection3.jpg",
    },
    {
      img: "heroSection/heroSection4.jpg",
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
              <div key={idx} className="h-[350px]">
                <img  className="w-full h-full object-cover " src={img.img} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse vertical className="[--duration:20s]">
            {secondRow.map((img, idx) => (
              <div key={idx} className="h-[350px]">
                <img  className="w-full h-full object-cover " src={img.img} />
              </div>
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
