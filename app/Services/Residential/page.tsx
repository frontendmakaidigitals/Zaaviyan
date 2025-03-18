"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { VelocityScroll } from "@/app/App_Chunks/Components/InfiniteScroll";
import { Circle} from "@phosphor-icons/react";
import GridSection from "./GridSection";
import Choose from "./Choose";
import Banner from "./Banner";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverImg, setHoverImg] = useState({ img1: false, img2: false });
  return (
    <main className="">
      <div className="grid h-[850px] container place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full relative h-full flex items-center">
          <motion.img
            onMouseLeave={() =>
              setHoverImg((prev) => ({ ...prev, img1: false }))
            }
            onMouseEnter={() =>
              setHoverImg((prev) => ({ ...prev, img1: true }))
            }
            animate={{
              scale: hoverImg.img1 ? 1.1 : 1,
              opacity: hoverImg.img1 ? 1 : 0.8,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-w-md max-h-[550px] relative z-10"
            src="https://images.unsplash.com/photo-1600493504591-aa1849716b36?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <motion.img
            className="absolute top-32 max-h-[550px] left-32 max-w-md z-0"
            animate={{
              scale: hoverImg.img1 ? 0.9 : 1,
              opacity: hoverImg.img1 ? 0.7 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            src="https://images.unsplash.com/photo-1591931681345-16b532514cde?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="h-full flex flex-col items-start justify-center">
          <h2 className="text-6xl font-heroFont">
            Interior{" "}
            <span className="font-secondaryFont">Design & Development</span>{" "}
            Services
          </h2>
          <p className="text-lg mt-4">
            At Zaaviyan, we create timeless, functional, and luxurious interiors
            that reflect individuality and elegance. Our expertise in interior
            design spans residential, commercial, and hospitality spaces,
            ensuring each project is meticulously planned and executed to
            perfection. From concept development to the final touches, we bring
            your vision to life with a blend of creativity and functionality.
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
      <div className=" bg-orange-200 py-2 relative">
        <div className="absolute top-0 w-full max-w-sm h-full left-0 bg-gradient-to-r from-slate-50 z-10" />
        <div className="absolute top-0 w-full max-w-sm h-full right-0 bg-gradient-to-l from-slate-50 z-10" />
        <VelocityScroll defaultValue={1} numRows={1} className="">
          Resdential Topic <Circle weight="fill" className="inline-block size-3 align-middle" />
        </VelocityScroll>
      </div>
      <GridSection />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;



