import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const merchandiseService = [
    {
      title: "Commercial Fitouts",
      description:
        "We specialize in designing and constructing functional and visually striking commercial spaces that enhance brand identity and boost productivity.",
      solutions: [
        "Brand-Centric Designs – Tailored designs that reflect your brand’s values and style.",
        "Efficient Layouts – Functional layouts that maximize space efficiency and flow.",
        "Employee-Centric Spaces – Focus on employee well-being, comfort, and productivity.",
        "High-Quality Finishes – Premium materials and finishes for a professional, lasting look.",
        "Timely Project Delivery – On-time completion with minimal disruption to your business."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Residential Design & Fitouts",
      description:
        "We create beautiful, personalized living spaces that align with your lifestyle, ensuring comfort and style at every turn.",
      solutions: [
        "Custom Designs – Tailored to your taste and functional needs.",
        "Space Optimization – Innovative storage solutions to maximize space.",
        "Diverse Style Options – Contemporary and classic designs based on your preferences.",
        "Craftsmanship & Detail – Quality craftsmanship and attention to detail in every element.",
        "Energy Efficiency – Sustainable solutions to save energy and reduce costs."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1494380982332-dfc36fbfece6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Renovations & Refurbishments",
      description:
        "Whether updating a single room or transforming an entire building, we bring new life to old spaces with modern designs and functional improvements.",
      solutions: [
        "Preserving Character – Renovations that respect the existing structure while modernizing.",
        "Optimized Layouts – Improving functionality and flow throughout the space.",
        "Modern Aesthetic – Blending contemporary design with the building’s original charm.",
        "Sustainable Solutions – Using eco-friendly materials and energy-efficient options.",
        "Seamless Integration – Combining new elements harmoniously with the existing architecture."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "New Builds & Developments",
      description:
        "We offer end-to-end services for new construction projects, delivering innovative and sustainable designs that suit your vision and budget.",
      solutions: [
        "Maximized Property Potential – Innovative designs that optimize the land or property.",
        "Comprehensive Planning – Detailed project planning from concept to completion.",
        "Expert Consultation – Ensuring compliance with regulations and building guidelines.",
        "Sustainability Focus – Eco-friendly construction practices and materials.",
        "Durability & Quality – Long-term durability and attention to detail in every build."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1551295022-de5522c94e08?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const SplitterFunc = (sol: string) => {
    const [firstPart, rest] = sol.split(/ – | - /, 2); // Split at the first occurrence of '-'
    return (
      <span className="font-bold">
        {firstPart}
        {rest && <span className="!font-[300]"> - {rest}</span>}
      </span>
    );
  };
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"], // Smooth transition
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Subtle parallax effect
  return (
    <div className="mt-10">
      <h2 className="text-center text-4xl lg:text-6xl font-heroFont font-[500]">
        Our Speciality
      </h2>

      <div className="grid grid-cols-1 w-full mt-12">
        {merchandiseService.map((e, idx) => {
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center" key={idx}>
              <div
                className={cn(
                  `p-10 lg:p-20`,
                  idx % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1",                  e.class
                )}
              >
                <h3 className="text-2xl lg:text-5xl mb-4 font-Primary font-[600]">
                  {e.title}
                </h3>
                <p>{e.description}</p>
                <h4 className="mt-4 text-xl font-Primary font-[600] mb-4">
                  Our {e.title} Solutions
                </h4>
                {e.solutions.map((sol, index) => (
                  <p key={index} className="mb-2 flex items-start gap-3">
                    <span className="mt-1">
                      <CheckFat className="" />
                    </span>{" "}
                    {SplitterFunc(sol)}
                  </p>
                ))}
              </div>
              <ParallaxImage src={e.img} idx={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridSection;

const ParallaxImage = ({ src, idx }: { src: string; idx: number }) => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]); // Subtle parallax effect

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden w-full h-full", // Fixed height to keep things aligned
        idx % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
      )}
    >
      <motion.img
        style={{ y, scale: 1.05 }}
        className="w-full h-full object-cover transition-transform duration-300 ease-out"
        src={src}
      />
    </div>
  );
};
