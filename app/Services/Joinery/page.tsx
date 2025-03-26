"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "./Banner";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const interiorDesignServices = [
    {
      title: "Residential Interior Design",
      description:
        "Your home should be a perfect blend of comfort, style, and personal expression. At Zaaviyan, we specialize in creating custom interiors that reflect your lifestyle and enhance your daily living experience.",
      solutions: [
        "Luxury Villas & Apartments – We design high-end residential spaces with exquisite materials, unique design elements, and a refined aesthetic.",
        "Personalized Home Styling – Every home is different, and our approach ensures that your interiors reflect your personal taste, whether modern, classic, contemporary, or minimalist.",
        "Living Room & Lounge Areas – We curate elegant living spaces that encourage relaxation and social interactions, featuring high-quality furniture, decorative lighting, and artistic elements.",
        "Bedroom Design – Tailoring bedroom interiors to be tranquil retreats, with soft textures, comfortable furniture, and lighting that creates the perfect ambiance.",
        "Kitchen & Bathroom Interiors – Functional yet stylish designs that incorporate modern layouts, high-end finishes, and space-saving solutions.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Commercial Interior Design",
      description:
        "A well-designed commercial space enhances brand identity, improves efficiency, and creates a lasting impression. Zaaviyan specializes in commercial interiors that are both practical and visually appealing.",
      solutions: [
        "Corporate Office Interiors – We create workspaces that boost productivity and reflect corporate identity through ergonomic furniture, optimized layouts, and brand-inspired aesthetics.",
        "Retail & Showroom Design – Designing interactive and visually engaging spaces that attract customers, highlight products, and improve sales.",
        "Restaurant & Hospitality Interiors – We craft warm, inviting, and stylish interiors for restaurants, cafés, and hotels, ensuring an unforgettable customer experience.",
        "Co-Working Spaces & Startups – Developing flexible, modern, and collaborative work environments that inspire creativity and efficiency.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Interior Space Planning & Layout Design",
      description:
        "A well-planned space is essential for both functionality and aesthetics. Our space planning services ensure that every square foot is optimized for comfort, efficiency, and purpose.",
      solutions: [
        "Efficient Floor Plans – We create structured layouts that enhance movement and functionality while maintaining visual appeal.",
        "Zoning & Traffic Flow Management – Careful space distribution to ensure easy navigation and smooth interaction within the environment.",
        "Furniture Arrangement & Placement – Strategically positioning furniture to improve comfort and usability without overcrowding the space.",
        "Multifunctional Space Design – Solutions for maximizing compact areas, such as convertible furniture and flexible layouts.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1524190952534-79b1f7d6ad5c?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Concept Development & Visualization",
      description:
        "Before beginning any project, it’s crucial to have a clear vision. We bring ideas to life with detailed concept planning and visual representation, allowing clients to experience the final design before execution.",
      solutions: [
        "Mood Boards & Theme Creation – Crafting a cohesive aesthetic through curated color schemes, textures, and material samples.",
        "3D Renderings & Virtual Walkthroughs – Providing lifelike digital previews of interior spaces, ensuring clarity and confidence before implementation.",
        "Material & Finish Selection – Carefully choosing elements that enhance beauty, durability, and practicality.",
        "Lighting & Color Consultation – Expert guidance on selecting the right tones, lighting styles, and placements for a harmonious environment.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1635054961796-be9cd02f8797?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Custom Interior Elements",
      description:
        "Every interior should have unique design elements that reflect personality and purpose. Our custom interior solutions allow for complete personalization.",
      solutions: [
        "Bespoke Furniture & Upholstery – Designing and manufacturing one-of-a-kind furniture pieces that complement the space.",
        "Custom Decorative Walls & Paneling – Feature walls, artistic installations, and innovative paneling to create focal points.",
        "Luxury Fixtures & Fittings – Handpicked lighting, hardware, and design accents that elevate the overall aesthetic.",
        "Personalized Home & Office Decor – Selection of exclusive artwork, textiles, and decorative pieces for a refined finishing touch.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lighting & Ambience Design",
      description:
        "Lighting is a fundamental aspect of interior design, setting the mood and enhancing the space’s functionality.",
      solutions: [
        "Ambient & Task Lighting Solutions – Creating the perfect balance between general, accent, and task lighting.",
        "Chandeliers & Designer Fixtures – Statement lighting pieces that add elegance and character.",
        "Smart Lighting Integration – Automated solutions for dynamic lighting control and energy efficiency.",
        "Natural & Artificial Light Optimization – Using windows, mirrors, and artificial lighting to enhance brightness and create a welcoming atmosphere.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1527853300662-dfbc10ae8e1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sustainable & Smart Interiors",
      description:
        "We prioritize eco-conscious and technologically advanced design solutions that promote sustainability and modern living.",
      solutions: [
        "Eco-Friendly Materials & Finishes – Sustainable, non-toxic, and durable materials for environmentally responsible interiors.",
        "Energy-Efficient Design Strategies – Incorporating passive cooling, smart windows, and energy-efficient appliances.",
        "Biophilic Design Elements – Bringing nature indoors with living walls, natural textures, and organic forms.",
        "Smart Home & Office Automation – Integrating technology for enhanced security, climate control, and convenience.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1582345486418-0eeaeecb5dda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Joinery{" "}
              <span className="font-secondaryFont">and</span>{" "}
              Woodcraft
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
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
      <GridSection data={interiorDesignServices} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
