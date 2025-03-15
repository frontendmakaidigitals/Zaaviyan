"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
const About = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Move image upward as user scrolls

  return (
    <div className="w-full my-20">
      <div className=" grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        {/* Text Section */}
        <div className="w-full container pr-14 order-1">
          <h2 className="text-6xl font-heroFont font-[700]">
            Zaaviyan: The{" "}
            <span className="bg-gradient-to-r font-secondaryFont from-[#FF4545] via-[#FA812F] to-[#FFB26F] bg-clip-text text-transparent">
              Zenith
            </span>{" "}
            of Excellence
          </h2>
          <p className="mt-7  text-xl leading-relaxed">
            At Zaaviyan Contracting, we are more than just a fit-out company, we
            are creators of exceptional spaces. With a passion for design and
            craftsmanship, we specialize in transforming interiors into
            functional, stylish, and inspiring environments. <br />
            <br /> Our expertise spans residential, commercial, and hospitality
            sectors, where we bring innovative solutions tailored to each
            client’s unique vision. Committed to quality and precision, we
            handle every detail from planning to execution, ensuring seamless
            project delivery. At Zaaviyan, excellence isn’t just a goal - it’s
            our standard.
          </p>
          <button className="relative mt-5 h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
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

        {/* Image with Parallax Effect */}
        <div className="h-[450px] lg:h-[600px] w-full overflow-hidden">
          <motion.img
            className="w-full h-full object-cover"
            src="Media/About us.jpg"
            style={{ y, scale: 1.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
