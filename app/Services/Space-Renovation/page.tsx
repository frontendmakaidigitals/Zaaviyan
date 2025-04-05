"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "@/app/App_Chunks/Components/Banner2";
import PopUpForm from "@/app/App_Chunks/Components/PopUpForm";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const renovationServices = [
    {
      title: "Complete Renovations",
      description:
        "We reimagine every aspect of your space, ensuring it aligns with both aesthetic desires and functional requirements for a complete transformation.",
      solutions: [
        "Full-Scope Redesign – Comprehensive structural updates and finishing touches.",
        "Custom Solutions – Tailored renovation plans to match your needs and budget.",
        "Quality Assurance – High standards in materials, workmanship, and finishes.",
        "Timely Execution – Adherence to project timelines for efficient completion.",
        "Space Optimization – Intelligent layouts that enhance functionality and flow.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Office Fit-Outs",
      description:
        "Enhance productivity and reflect your company’s identity with expertly designed office spaces that foster creativity and efficiency.",
      solutions: [
        "Customized Layouts – Workspaces designed for optimal workflow and comfort.",
        "Employee Well-Being – Ergonomic and inspiring environments for teams.",
        "Brand Integration – Aligning design elements with your corporate identity.",
        "Tech Integration – Seamless incorporation of technology for efficiency.",
        "Efficient Delivery – Timely completion with minimal disruption.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?q=80&w=1027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Retail & Commercial Spaces",
      description:
        "Create memorable customer experiences with interior designs that highlight your brand while ensuring functionality and comfort.",
      solutions: [
        "Brand-Centric Design – Interiors that reinforce your brand identity.",
        "Customer-Centric Layouts – Optimized spaces for customer interaction.",
        "Premium Finishes – High-quality materials for durability and aesthetics.",
        "Flexible Designs – Adaptable layouts to meet evolving business needs.",
        "Sustainable Solutions – Eco-friendly materials with modern aesthetics.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1584214344297-5f7648d939df?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Luxury Residences",
      description:
        "Transform your home into a luxurious and comfortable space that perfectly aligns with your personal style and functional needs.",
      solutions: [
        "Bespoke Interior Design – Personalized aesthetics and high-end decor.",
        "High-End Finishes – Premium materials that enhance elegance and durability.",
        "Space Maximization – Smart layouts for a sense of openness and flow.",
        "Attention to Detail – Meticulous craftsmanship in every aspect.",
        "Luxury Integration – Smart home features, ambient lighting, and more.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Project Management",
      description:
        "Ensure seamless renovation execution with expert oversight, transparent communication, and efficient coordination.",
      solutions: [
        "Comprehensive Planning – Phased project execution for smooth progress.",
        "Clear Communication – Regular updates and feedback loops.",
        "Budget Management – Cost-effective solutions without quality compromise.",
        "Vendor Coordination – Efficient scheduling and collaboration with contractors.",
        "Quality Control – Strict checks to maintain high standards.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <main className="">
      <PopUpForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Us"
      />
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
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2  px-5 lg:pl-0 lg:pr-5 bg-[#F7F7F7]  font-heroFont">
              Premium{" "}
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
      <GridSection data={renovationServices} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
