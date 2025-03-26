"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "./Banner";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const joineryServices = [
    {
      title: "Bespoke Furniture & Cabinetry",
      description:
        "Custom-crafted furniture is the key to achieving a cohesive and well-structured interior. Our bespoke furniture and cabinetry solutions are designed to meet both aesthetic and practical needs.",
      solutions: [
        "Luxury Wardrobes & Closets – Fitted and walk-in wardrobes with smart storage, custom shelving, built-in lighting, and soft-close mechanisms.",
        "Custom Kitchen Cabinets – Precision-crafted cabinetry with finishes ranging from high-gloss modern to classic wooden textures.",
        "Bathroom Vanities & Storage Units – Moisture-resistant vanity units with integrated storage, sleek countertops, and high-end hardware.",
        "Media & Entertainment Units – Custom-designed TV units, bookshelves, and storage cabinets that blend seamlessly into your home's design."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3192&auto=format&fit=crop"
    },
    {
      title: "Custom Wood Paneling & Wall Treatments",
      description:
        "Wood paneling adds warmth, character, and sophistication to any interior space. Our tailor-made paneling solutions elevate both traditional and contemporary interiors.",
      solutions: [
        "Decorative Wall Panels – Premium wood panels with intricate carvings, geometric designs, and 3D effects.",
        "Ceiling Paneling & Beams – Rustic wooden beams or sleek modern panels that add depth and texture.",
        "Wainscoting & Molding – Classic and modern wainscoting options for sophistication and wall protection.",
        "Acoustic Wood Paneling – Sound-insulating wood panels perfect for offices, studios, and home theaters."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1563212107-c0cd3b51dc0e?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Wooden Doors & Partitioning Solutions",
      description:
        "Doors and partitions define spaces, improve privacy, and enhance interior style. We craft high-quality, custom wooden doors and partitions to suit any design scheme.",
      solutions: [
        "Interior & Exterior Doors – Solid wood and glass-paneled doors with unique patterns and engravings.",
        "Sliding & Folding Doors – Space-saving solutions with smooth mechanisms for modern interiors.",
        "Wooden Room Dividers & Partitions – Custom dividers for privacy while maintaining an airy feel.",
        "Decorative Carved Doors – Handcrafted doors with intricate detailing inspired by Arabic, Moroccan, and contemporary designs."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1516551633610-2e498bfc3ee8?q=80&w=2957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Reception Counters & Commercial Joinery",
      description:
        "A well-designed commercial space creates a lasting impression. Our custom joinery solutions enhance brand identity while ensuring practicality.",
      solutions: [
        "Reception & Lobby Counters – Elegant and functional reception desks tailored to brand aesthetics.",
        "Retail Display Units & Shelving – Custom wooden shelving, racks, and display stands for organized product showcasing.",
        "Office Desks & Workstations – Ergonomic and stylish office furniture designed for productivity.",
        "Restaurant & Bar Joinery – Custom bar counters, seating booths, wall paneling, and storage units."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1608979827489-2b855e79debe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Staircases & Railings",
      description:
        "A beautifully crafted staircase can be a statement piece. Our custom staircases combine structural integrity, functionality, and elegance.",
      solutions: [
        "Traditional & Modern Staircases – Grand staircases, floating designs, and contemporary geometric styles.",
        "Handrails & Balustrades – Premium wood, metal, or glass handrails ensuring safety and aesthetics.",
        "Under-Stair Storage Solutions – Smartly designed drawers, cabinets, or shelving for maximizing space."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1610694858449-0079cf6a5b96?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Outdoor & Garden Joinery",
      description:
        "Outdoor wooden structures add warmth, charm, and functionality. Our custom solutions withstand weather conditions while maintaining beauty.",
      solutions: [
        "Pergolas & Gazebos – Custom wooden structures for gardens, poolside areas, and patios.",
        "Decking & Flooring – Durable wooden decking solutions resistant to weathering.",
        "Outdoor Seating & Benches – Stylish, comfortable wooden furniture for gardens and public areas.",
        "Fencing & Privacy Screens – Decorative wooden fences that offer both security and aesthetic appeal."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1550948390-6eb7fa773072?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <div className="h-full left-0 absolute w-full md:max-w-md lg:max-w-xl  container flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2 pr-5 bg-[#F7F7F7]  font-heroFont">
              Interior{" "}
              <span className="font-secondaryFont">Design & Development</span>{" "}
              Services
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At Zaaviyan, we specialize in precision-crafted custom joinery
                solutions that bring elegance, functionality, and durability to
                interior spaces. Whether for residential or commercial projects,
                our bespoke joinery services ensure every detail is meticulously
                crafted to complement the overall design aesthetic.
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
      <GridSection data={joineryServices} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
