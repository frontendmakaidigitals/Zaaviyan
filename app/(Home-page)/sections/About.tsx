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
          <h2 className="text-6xl font-Primary font-[700]">
            Some Short but{" "}
            <span className="bg-gradient-to-r from-[#FF4545] via-[#FA812F] to-[#FFB26F] bg-clip-text text-transparent">
              meaningful
            </span>{" "}
            heading
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
          <button className=" flex items-center mt-5 relative rounded-full">
            <span className="bg-[#FFB38E] py-3 pl-5 pr-3 rounded-full">
              Learn more
            </span>{" "}
            <span className="bg-[#FFB38E] absolute left-[95%] top-1/2 -translate-y-1/2 p-3 rounded-full">
              <ArrowRight className="text-2xl" />
            </span>
          </button>
        </div>

        {/* Image with Parallax Effect */}
        <div className="aspect-square w-full overflow-hidden">
          <motion.img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1551215110-b4e2522d9b74?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ y, scale: 1.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
