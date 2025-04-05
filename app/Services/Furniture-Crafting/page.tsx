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
  const furnitureCrafting = [
    {
      title: "Bespoke Furniture Crafting",
      description:
        "We create custom-made furniture that is both stylish and functional, personalized to your space and preferences. Our designs blend artistry with durability, ensuring each piece is a statement of luxury and comfort.",
      solutions: [
        "Custom Designs – Unique furniture tailored to your style and space requirements.",
        "Premium Materials – Top-quality wood, metals, glass, and fabrics for long-lasting durability.",
        "Handcrafted Excellence – Intricate craftsmanship ensuring perfect detailing and finishing.",
        "Ergonomic & Functional – Designed for both aesthetics and comfort.",
        "Modern & Classic Styles – Versatile designs suited for contemporary and traditional interiors.",
        "Eco-Friendly Options – Sustainable and responsibly sourced materials.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1497219055242-93359eeed651?q=80&w=2949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Turnkey Fit-Out Solutions",
      description:
        "We offer complete interior fit-out solutions, managing everything from concept to execution. Our goal is to create aesthetically appealing and highly functional spaces with seamless execution.",
      solutions: [
        "End-to-End Service – Handling everything from design, materials, construction, and finishing.",
        "Residential & Commercial Fit-Outs – Expertise in homes, offices, retail stores, and hospitality spaces.",
        "Space Planning & Optimization – Smart solutions to maximize space efficiency.",
        "High-Quality Finishing – Premium craftsmanship ensuring elegant and sophisticated interiors.",
        "Compliance & Safety Standards – Adhering to UAE regulations and best industry practices.",
        "On-Time Project Delivery – Ensuring timely execution without compromising on quality.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop",
    },
    {
      title: "Joinery & Woodworks",
      description:
        "Our custom joinery and woodwork add warmth, elegance, and sophistication to interiors, making them truly unique. We craft wooden elements with superior finishing to enhance the beauty of any space.",
      solutions: [
        "Custom Joinery Solutions – Doors, cabinets, wardrobes, and decorative wood paneling.",
        "Superior Craftsmanship – Meticulously crafted wooden pieces with high precision.",
        "Traditional & Contemporary Designs – Tailored to suit classic and modern aesthetics.",
        "Durable & High-Quality Materials – Use of top-grade wood, veneers, and laminates.",
        "Intricate Carvings & Detailing – Handmade engravings for a luxury finish.",
        "Seamless Installation – Expert handling for a perfect, flawless fit.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Luxury Interior Enhancements",
      description:
        "We offer high-end interior enhancements that blend function and aesthetics, ensuring that every space exudes elegance, luxury, and convenience.",
      solutions: [
        "Custom Wardrobes & Walk-in Closets – Designed to maximize storage while maintaining a luxurious feel.",
        "Kitchen & Vanity Units – Functional yet stylish designs for modern kitchens and bathrooms.",
        "Accent Walls & Feature Elements – Custom-designed statement pieces to elevate interiors.",
        "Smart Storage Solutions – Innovative shelving and cabinetry for better organization.",
        "Lighting Integration – LED and ambient lighting incorporated into furniture designs.",
        "Luxury Material Combinations – Blending wood, glass, marble, and metal for a premium touch.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Renovation & Refurbishment",
      description:
        "We specialize in transforming old and outdated spaces into modern, functional, and visually appealing environments through expert renovation and refurbishment services.",
      solutions: [
        "Space Rejuvenation – Transforming interiors to match contemporary aesthetics.",
        "Structural Enhancements – Upgrading flooring, walls, ceilings, and fixtures.",
        "Complete or Partial Renovation – Custom solutions based on client requirements.",
        "Sustainable Upgrades – Energy-efficient and eco-friendly material options.",
        "Luxury & Smart Additions – Home automation, advanced lighting, and modern aesthetics.",
        "Efficient Project Management – Timely completion with minimal disruption.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1586335925834-44121c1679c6?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Masterful{" "}
              <span className="font-secondaryFont">Furniture Crafting</span> ,
              Built to Last
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                Zaaviyan is a leading interior fit-out and furniture crafting
                company specializing in bespoke designs that transform
                residential, commercial, and hospitality spaces. With an expert
                team of artisans and designers, we deliver high-quality
                craftsmanship that blends luxury, innovation, and functionality.
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
      <GridSection data={furnitureCrafting} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
