"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
const About = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Move image upward as user scrolls

  return (
    <div className="w-full my-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-6xl font-Primary font-[700]">
            Some Short but{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 bg-clip-text text-transparent">
              meaningful
            </span>{" "}
            heading
          </h2>
          <p className="mt-7 text-xl leading-relaxed">
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
            src="https://a.storyblok.com/f/257499/934x525/0fe90ca6f1/03-sauro-4026180.jpg/m/1440x0"
            style={{ y, scale: 1.3 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
