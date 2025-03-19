"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/app/App_Chunks/Components/InfiniteScroll";
import { Circle } from "@phosphor-icons/react";
import GridSection from "./GridSection";
import Choose from "./Choose";
import Banner from "./Banner";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="">
      <div className="relative ">
        <div className="w-[500px] absolute right-0 -z-10 bottom-0  h-[400px] bg-slate-100">
          <img
            src={
              "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full max-w-3xl -z-20 bg-gradient-to-b from-[rgba(100,95,89,.4)] from-[30%]  absolute right-0 tpo-0 " />
        <div className="grid h-[730px] relative container place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-full left-0 absolute max-w-xl flex flex-col items-start justify-center">
            <h2 className="text-6xl bg-[#F7F7F7] p-2 font-heroFont">
              Interior{" "}
              <span className="font-secondaryFont">Design & Development</span>{" "}
              Services
            </h2>
            <div>
              <p className="text-lg mt-4 max-w-lg pr-10">
                At Zaaviyan, we create timeless, functional, and luxurious
                interiors that reflect individuality and elegance. Our expertise
                in interior design spans residential, commercial, and
                hospitality spaces, ensuring each project is meticulously
                planned and executed to perfection.
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

          <div className="w-full h-full flex items-center absolute max-w-3xl right-8 -z-10">
            <motion.img
              src={
                "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className={``}
            />
          </div>
        </div>
      </div>

      <GridSection />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
