"use client";
import React, { useState, useRef, useEffect } from "react";
import Marquee from "@/app/App_Chunks/Components/Marquee";
import PopUpForm from "@/app/App_Chunks/Components/PopUpForm";
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
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(true);
  const heroContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroContainer.current) {
        const containerHeight = heroContainer.current.offsetHeight;
        if (window.scrollY > containerHeight) {
          setAnimate(false);
        } else {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={heroContainer}
      className="h-auto pb-16 lg:pb-0 lg:h-[99vh] relative w-full overflow-hidden bg-[#645f59]"
    >
      {/* Left Arrow Button */}
      <PopUpForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Us"
      />
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
            <h1 className="text-5xl font-heroFont font-[600] md:text-7xl lg:text-5xl xl:text-6xl capitalize text-slate-50 text-left">
              Bringing Your{" "}
              <span className="font-secondaryFont font-[500]">Dream</span>{" "}
              <br />{" "}
              <span className="font-secondaryFont font-[500]">Spaces</span> to
              Life
            </h1>
            <p className=" text-slate-100  mt-3 text-md md:text-lg">
              At Zaaviyan Contracting, we craft bespoke interiors that blend
              aesthetics with functionality. As a leading fit-out company, we
              transform residential, commercial, and hospitality spaces into
              inspiring environments. From concept to completion, we bring your
              vision to life with precision, creativity, and a commitment to
              excellence.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="relative mt-5 h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group"
            >
              <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#F59E0B] via-[#D97706] to-[#92400E]">
                <div className="absolute inset-0 bg-[#7C2D12] rounded-lg opacity-90" />
              </div>
              <div className="absolute inset-[2px] bg-[#7C2D12] rounded-lg opacity-95" />
              <div className="absolute inset-[2px] bg-gradient-to-r from-[#7C2D12] via-[#B45309] to-[#7C2D12] rounded-lg opacity-90" />
              <div className="absolute inset-[2px] bg-gradient-to-b from-[#F59E0B]/40 via-[#B45309] to-[#92400E]/30 rounded-lg opacity-80" />
              <div className="absolute inset-[2px] bg-gradient-to-br from-[#FBBF24]/10 via-[#B45309] to-[#7C2D12]/50 rounded-lg" />
              <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(251,191,36,0.15)] rounded-lg" />
              <div className="relative flex items-center justify-center gap-2">
                <span className="text-lg font-normal bg-gradient-to-b from-[#FFEDD5] to-[#FDE68A] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] tracking-tighter">
                  Get a Quote
                </span>
              </div>
              <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#7C2D12]/20 via-[#FBBF24]/10 to-[#7C2D12]/20 group-hover:opacity-100 rounded-lg" />
            </button>
          </div>
        </div>
        <div className="grid lg:order-1 grid-cols-2 shadow-[0_0_60px_#D7CCC8] bg-[#9b9287] overflow-hidden h-[450px] md:h-[700px] lg:h-[99vh]">
          <Marquee isAnimating={animate} vertical>
            {firstRow.map((img, idx) => (
              <div key={idx} className="h-[200px] lg:h-[350px]">
                <img className="w-full h-full object-cover " src={img.img} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse vertical isAnimating={animate}>
            {secondRow.map((img, idx) => (
              <div key={idx} className="h-[200px] lg:h-[350px]">
                <img className="w-full h-full object-cover " src={img.img} />
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
