"use client";
import React, { useState } from "react";
import PopUpForm from "@/app/App_Chunks/Components/PopUpForm";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[99vh] w-full relative">
      <PopUpForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Us"
      />
      <div className="absolute w-full z-10 top-1/2   -translate-y-1/2">
        <div className="container">
          <h2 className="text-4xl lg:text-6xl text-slate-100 font-[700] font-Primary">
            Crafting Spaces with <br /> Purpose and Precision
          </h2>
          <p className="text-md text-slate-100 mt-3">
            Expertly designing and building spaces that blend functionality with
            precision.
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
                Contact us
              </span>
            </div>
            <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#7C2D12]/20 via-[#FBBF24]/10 to-[#7C2D12]/20 group-hover:opacity-100 rounded-lg" />
          </button>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-slate-950/40" />
      <img
        className="w-full h-full object-cover"
        src={
          "https://images.pexels.com/photos/30767086/pexels-photo-30767086/free-photo-of-iconic-architecture-in-san-francisco-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
      />

      <div className="absolute z-[9] flex justify-end xl:justify-center items-center  bottom-0 left-0 w-full h-[30px]">
        <div className="w-0 h-0 border-l-transparent border-l-[30px] border-b-[30px] border-b-white"></div>
        <div className="w-[40vw] bg-white h-full"></div>
        <div className="w-0 h-0 border-r-[30px] hidden xl:block border-l-transparent  border-r-transparent border-b-[30px] border-b-white"></div>
      </div>
    </div>
  );
};

export default HeroSection;
