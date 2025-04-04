"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "./Banner";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const merchandiseService = [
    {
      title: "Electrical Maintenance",
      description:
        "We provide reliable electrical maintenance services to ensure the safety, efficiency, and longevity of your electrical systems.",
      solutions: [
        "Repairs & Troubleshooting – Diagnosing and fixing electrical faults, power failures, and circuit issues to restore functionality.",
        "New Installations & Upgrades – Installing modern electrical fixtures, outlets, and energy-efficient lighting solutions.",
        "Wiring & Rewiring – Ensuring safe and efficient electrical connections throughout your home.",
        "Safety Inspections & Compliance – Conducting professional assessments to identify hazards and ensure adherence to safety standards.",
        "Smart Home Integration – Upgrading your home with automation solutions like smart lighting and remote-controlled devices.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1576446468729-7674e99608f5?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Plumbing Solutions",
      description:
        "We offer comprehensive plumbing services to keep your water systems in top condition, preventing leaks and ensuring smooth operation.",
      solutions: [
        "Leak Detection & Repairs – Identifying and fixing leaks in pipes, faucets, and water lines to prevent water damage.",
        "Water Heater Services – Installation, repair, and maintenance of water heating systems for optimal performance.",
        "Drain Cleaning & Unblocking – Clearing clogged drains, sinks, and sewer lines for uninterrupted water flow.",
        "Bathroom & Kitchen Plumbing – Repairing and installing sinks, toilets, showers, and faucets.",
        "Pipe Replacement & Maintenance – Upgrading old or damaged pipes to improve water pressure and efficiency.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AC & HVAC Services",
      description:
        "Stay comfortable all year round with our air conditioning and HVAC maintenance services.",
      solutions: [
        "AC Servicing & Repairs – Cleaning filters, gas refilling, and fixing AC units to maintain cooling efficiency.",
        "HVAC System Installation – Setting up and maintaining heating, ventilation, and cooling systems.",
        "Duct Cleaning & Air Quality Control – Removing dust, allergens, and pollutants for a healthier indoor environment.",
        "Thermostat Installation & Calibration – Ensuring accurate temperature control and energy efficiency.",
        "Emergency AC Repairs – Quick response to breakdowns and malfunctions to restore cooling comfort.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1724958337802-2ac3cd31baa6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Carpentry & Joinery",
      description:
        "Our skilled carpenters provide custom solutions to enhance your home's aesthetics and functionality.",
      solutions: [
        "Furniture Repairs & Assembly – Fixing broken furniture, assembling new pieces, and restoring wooden fittings.",
        "Doors & Windows Maintenance – Repairing, adjusting, and installing doors, windows, and locks for security and durability.",
        "Custom Woodwork & Joinery – Creating bespoke cabinets, wardrobes, and decorative wood panels.",
        "Flooring Repairs & Refinishing – Restoring wooden flooring, parquet, and laminate surfaces.",
        "Shelving & Storage Solutions – Installing custom-built shelves and storage units for efficient space management.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Painting & Wall Repairs",
      description:
        "Give your home a fresh new look with our professional painting and wall restoration services.",
      solutions: [
        "Interior & Exterior Painting – Using high-quality paints for a smooth, durable, and elegant finish.",
        "Wall Crack & Damp Proofing – Repairing structural cracks, sealing leaks, and applying moisture-resistant coatings.",
        "Wallpaper Installation & Removal – Installing stylish wallpapers and safely removing outdated designs.",
        "Texture & Decorative Finishes – Adding accent walls, textured coatings, and decorative paint techniques.",
        "Ceiling & Moulding Touch-Ups – Restoring and repainting ceilings, cornices, and skirting boards.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=3231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Masonry & Tiling",
      description:
        "Enhance your home’s durability and aesthetics with expert masonry and tiling solutions.",
      solutions: [
        "Tile Replacement & New Installations – Fixing broken tiles or installing new flooring and wall tiles.",
        "Grouting & Sealing Services – Restoring grout lines and sealing surfaces to prevent water damage and mold growth.",
        "Brick & Stonework Maintenance – Repairing outdoor walls, pathways, and decorative stone features.",
        "Bathroom & Kitchen Tiling – Enhancing surfaces with high-quality tiles for durability and easy maintenance.",
        "Driveway & Patio Restoration – Repairing cracks and resurfacing outdoor areas for a polished look.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1529267372240-e9a679a81f43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "General Handyman Services",
      description:
        "From minor fixes to complete home improvements, our handyman services cover all your maintenance needs.",
      solutions: [
        "Fixture Installations – Mounting shelves, TVs, curtain rods, mirrors, and light fixtures securely.",
        "Minor Home Repairs – Fixing small damages, including loose hinges, doorknobs, and squeaky doors.",
        "Furniture Assembly & Adjustments – Setting up new furniture and making adjustments for perfect alignment.",
        "General Home Improvements – Assisting with DIY projects and enhancing living spaces with small upgrades.",
        "Emergency Repairs & Quick Fixes – Providing immediate solutions for unexpected household issues.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1641233456202-53937b71aa91?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2  px-5 lg:pl-0 lg:pr-5 bg-[#F7F7F7]  font-heroFont">
              Expert{" "}
              <span className="font-secondaryFont">Maintenance</span>,
              Hassle-Free Living
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At Zaaviyan, we understand that a well-maintained home is
                essential for comfort, safety, and longevity. Our expert home
                maintenance services cover everything from electrical and
                plumbing solutions to carpentry, painting, and general repairs.
                Whether you need routine upkeep, emergency fixes, or a complete
                home refresh, our skilled team is dedicated to delivering
                high-quality service with precision and efficiency.
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
      <GridSection  data={merchandiseService}/>
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
