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
  const carpentry = [
    {
      title: "Custom Furniture",
      description:
        "Our custom furniture solutions bring style, comfort, and functionality to your home or office. Each piece is carefully crafted to match your preferences, ensuring a unique touch to your interiors.",
      solutions: [
        "Personalized Designs – Bespoke furniture tailored to your style and space.",
        "Furniture Variety – Handcrafted dining tables, coffee tables, bed frames, office desks, and more.",
        "Quality Materials – Premium quality wood with superior finishes.",
        "Design Options – Contemporary, rustic, and traditional designs available.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Joinery & Woodwork",
      description:
        "We offer expert joinery services that enhance the aesthetics and structural integrity of your space. Our precision woodwork ensures durability and timeless beauty.",
      solutions: [
        "Doors & Windows – Custom-built wooden doors and window frames.",
        "Staircases & Partitions – Elegant staircases and wooden partitioning solutions.",
        "Decorative Moldings – Intricate wood paneling and decorative moldings.",
        "Architectural Woodwork – Expert craftsmanship for unique designs.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1586509569974-3af5bbdc4e53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Interior Wood Solutions",
      description:
        "Transform your interiors with exquisite wooden elements that add warmth and sophistication to any space. From flooring to wall paneling, we provide elegant solutions to elevate your ambiance.",
      solutions: [
        "Flooring Solutions – Wooden flooring options, including solid and engineered wood.",
        "Ceilings & Walls – Elegant wood paneling and ceiling designs.",
        "Accent Features – Stylish wooden accents to enhance aesthetics.",
        "Customization – Woodwork tailored to your specific interior design.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1613685303213-1f646ca61306?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cabinetry & Storage Solutions",
      description:
        "We design and build custom storage solutions that maximize space while complementing the aesthetics of your interiors. Our cabinetry is functional, stylish, and built to last.",
      solutions: [
        "Wardrobes & Closets – Custom-built wardrobes for organized storage.",
        "Kitchen & Vanity Units – High-quality kitchen cabinets and bathroom vanities.",
        "Smart Storage Designs – Space-saving and multi-functional storage solutions.",
        "Finishing Options – A variety of materials and styles to match your interiors.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1628843201283-2ca32147ad3e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Outdoor Woodwork",
      description:
        "Enhance your outdoor spaces with our expertly crafted wooden structures. Our durable outdoor woodwork is designed to withstand the elements while adding a touch of elegance.",
      solutions: [
        "Pergolas & Decks – Beautifully crafted pergolas and decking solutions.",
        "Gazebos & Fencing – Custom-designed gazebos and wooden fences.",
        "Outdoor Furniture – Weather-resistant garden furniture and seating solutions.",
        "Custom Designs – Outdoor woodwork built to match your landscaping.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1738293728561-d7057a3ad74f?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Wood Restoration & Repair",
      description:
        "Give your old or damaged woodwork a new lease on life with our professional restoration services. We ensure that every piece retains its beauty and integrity.",
      solutions: [
        "Furniture Restoration – Repair and refurbishing of antique and wooden furniture.",
        "Door & Fixture Repair – Fixing and restoring wooden doors and interior fixtures.",
        "Polishing & Staining – Expert refinishing techniques for a fresh look.",
        "Authenticity Preservation – Restoring woodwork while maintaining its original charm.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1580403444499-062473f715d5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Commercial Woodwork Solutions",
      description:
        "Our commercial woodwork services are designed to create functional and visually appealing spaces that reflect your brand identity. From offices to retail spaces, we deliver outstanding results.",
      solutions: [
        "Office Interiors – Custom-built furniture and workstations for professional spaces.",
        "Retail Fixtures – Stylish and functional shelving, counters, and display units.",
        "Hospitality Woodwork – Bespoke solutions for hotels, restaurants, and lounges.",
        "Brand-Aligned Designs – Unique wood installations that enhance business identity.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1560846389-956694677531?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2 px-5 lg:pl-0 lg:pr-5 bg-[#F7F7F7]  font-heroFont">
              Expert Carpentry,{" "}
              <span className="font-secondaryFont">Crafted to</span> Perfection
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                Zaaviyan Carpentry specializes in bespoke wooden solutions,
                seamlessly blending functionality with elegance. From custom
                furniture to intricate joinery, our skilled craftsmen ensure
                precision, durability, and timeless design to bring your vision
                to life.
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
      <GridSection data={carpentry} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
