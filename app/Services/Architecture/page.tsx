"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";

import Choose from "./Choose";
import Banner from "./Banner";
import GridSection from "@/app/App_Chunks/Components/GridSection";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const merchandiseService = [
    {
      title: "Commercial Fitouts",
      description:
        "We specialize in designing and constructing functional and visually striking commercial spaces that enhance brand identity and boost productivity.",
      solutions: [
        "Brand-Centric Designs – Tailored designs that reflect your brand’s values and style.",
        "Efficient Layouts – Functional layouts that maximize space efficiency and flow.",
        "Employee-Centric Spaces – Focus on employee well-being, comfort, and productivity.",
        "High-Quality Finishes – Premium materials and finishes for a professional, lasting look.",
        "Timely Project Delivery – On-time completion with minimal disruption to your business."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Residential Design & Fitouts",
      description:
        "We create beautiful, personalized living spaces that align with your lifestyle, ensuring comfort and style at every turn.",
      solutions: [
        "Custom Designs – Tailored to your taste and functional needs.",
        "Space Optimization – Innovative storage solutions to maximize space.",
        "Diverse Style Options – Contemporary and classic designs based on your preferences.",
        "Craftsmanship & Detail – Quality craftsmanship and attention to detail in every element.",
        "Energy Efficiency – Sustainable solutions to save energy and reduce costs."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1494380982332-dfc36fbfece6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Renovations & Refurbishments",
      description:
        "Whether updating a single room or transforming an entire building, we bring new life to old spaces with modern designs and functional improvements.",
      solutions: [
        "Preserving Character – Renovations that respect the existing structure while modernizing.",
        "Optimized Layouts – Improving functionality and flow throughout the space.",
        "Modern Aesthetic – Blending contemporary design with the building’s original charm.",
        "Sustainable Solutions – Using eco-friendly materials and energy-efficient options.",
        "Seamless Integration – Combining new elements harmoniously with the existing architecture."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "New Builds & Developments",
      description:
        "We offer end-to-end services for new construction projects, delivering innovative and sustainable designs that suit your vision and budget.",
      solutions: [
        "Maximized Property Potential – Innovative designs that optimize the land or property.",
        "Comprehensive Planning – Detailed project planning from concept to completion.",
        "Expert Consultation – Ensuring compliance with regulations and building guidelines.",
        "Sustainability Focus – Eco-friendly construction practices and materials.",
        "Durability & Quality – Long-term durability and attention to detail in every build."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  return (
    <main className="">
      <div className="relative overflow-hidden">
        <div className=" hidden md:block md:w-[350px] lg:w-[400px] xl:w-[500px] aspect-[3/2] absolute right-0 -z-10 bottom-0 bg-slate-100">
          <motion.img
            animate={{ scale: [1.25, 1], opacity: [0, 1] }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            src={
              "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full max-w-4xl -z-20 bg-gradient-to-b from-[rgba(100,95,89,.4)] from-[30%] to-[#F7F7F7] to-[70%] absolute right-0 top-0 " />
        <div className="grid h-[600px] mt-32 md:mt-0 lg:h-[730px] relative container  place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-full left-0 absolute w-full md:max-w-md lg:max-w-xl xl:max-w-auto container flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2 pr-5 bg-[#F7F7F7]  font-heroFont">
              Innovative
              <span className="font-secondaryFont">
                Architectural Designs
              </span>{" "}
              That Inspire
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At Zaaviyan, we craft architecture that reflects your vision,
                blending functionality with aesthetics. Specializing in
                contracting and fit-outs, we create inspiring, productive
                spaces. Our collaborative approach ensures every design is
                visually striking, practical, and built to last. With a focus on
                innovation and sustainability, we transform ideas into timeless
                architectural masterpieces.
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

          <div className="w-full h-full flex items-center absolute max-w-xs md:max-w-md lg:max-w-xl xl:max-w-3xl bottom-[211px] md:top-0 right-0 md:right-8 -z-10">
            <motion.img
              src={
                "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              animate={{ scale: [1.25, 1], opacity: [0, 1] }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </div>
      </div>
      <GridSection data={merchandiseService} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
