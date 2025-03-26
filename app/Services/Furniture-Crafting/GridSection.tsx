import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
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
        {furnitureCrafting.map((e, idx) => {
          return (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 items-center"
              key={idx}
            >
              <div
                className={cn(
                  `p-10 lg:p-20`,
                  idx % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1",
                  e.class
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
