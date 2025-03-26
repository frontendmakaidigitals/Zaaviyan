"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "./Banner";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const constructionServices = [
    {
      title: "Residential Construction",
      description:
        "We build high-quality homes that reflect your lifestyle and vision, ensuring a seamless process from foundation to finishing touches.",
      solutions: [
        "Custom Home Construction – Tailored designs to bring your dream home to life.",
        "Structural Integrity – High-quality materials for lasting durability.",
        "Modern & Traditional Designs – Excellence in contemporary and classic styles.",
        "Smart Home Integration – Advanced technology for enhanced living.",
        "Sustainable Practices – Eco-friendly construction and energy-efficient solutions.",
        "Turnkey Solutions – End-to-end management from design to handover.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1593786267440-550458cc882a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Commercial & Industrial Construction",
      description:
        "We create functional, aesthetic, and efficient spaces for businesses, industries, and retail establishments.",
      solutions: [
        "Office Buildings & Workspaces – Designed for productivity and collaboration.",
        "Retail Outlets & Malls – Engaging, customer-centric retail spaces.",
        "Warehouses & Industrial Facilities – Built for efficiency and durability.",
        "Hospitality & Healthcare Facilities – High-quality construction for hotels and hospitals.",
        "Regulatory Compliance – Adherence to all safety and legal standards.",
        "Cost & Time Efficiency – Execution within budget and schedule.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1708791894996-2568a0e002e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Structural Modifications & Extensions",
      description:
        "Expand or reinforce your property with seamless modifications that integrate perfectly with your existing space.",
      solutions: [
        "Space Expansion – Adding extra floors or extending rooms for usability.",
        "Load-Bearing Modifications – Structural changes with safety compliance.",
        "Renovation & Restoration – Modernizing old buildings while preserving integrity.",
        "Energy Efficiency Upgrades – Improved insulation and materials for sustainability.",
        "Seamless Integration – Matching new construction with existing architecture.",
        "Fast & Efficient Execution – Minimal disruption during the modification process.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Fit-Out & Interior Contracting",
      description:
        "Zaaviyan offers expert fit-out solutions to transform interiors into stunning, functional spaces.",
      solutions: [
        "Corporate & Office Fit-Outs – Modern designs for workspaces.",
        "Retail & Hospitality Fit-Outs – Engaging, luxurious interiors.",
        "Residential Interiors – High-end finishes for sophisticated living.",
        "Space Planning & Optimization – Maximizing efficiency and comfort.",
        "Premium Finishes & Materials – Quality flooring, ceilings, and fixtures.",
        "On-Time Completion – Ensuring your space is ready as scheduled.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Project Management & Turnkey Solutions",
      description:
        "From concept to completion, we provide seamless project management and turnkey solutions for exceptional results.",
      solutions: [
        "Comprehensive Planning – Detailed construction roadmaps for smooth execution.",
        "Vendor & Material Coordination – Managing suppliers for quality control.",
        "Budget Optimization – Cost-effective solutions without compromising quality.",
        "Quality Control & Safety Assurance – Adherence to industry regulations.",
        "Timely Handover – Projects delivered on schedule with flawless execution.",
        "Post-Completion Support – Ongoing maintenance and modification assistance.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
              Premium
              <span className="font-secondaryFont">Space Renovations</span>{" "}
              Services
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
      <GridSection data={constructionServices} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
