import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const constructionServices = [
    {
      title: "Residential Construction",
      description:
        "We build high-quality homes that reflect your lifestyle and vision, ensuring a seamless process from foundation to finishing touches.",
      solutions: [
        "Custom Home Construction – Tailored designs to bring your dream home to life.",
        "Structural Integrity – High-quality materials for lasting durability.",
        "Modern & Traditional Designs – Excellence in contemporary and classic styles.",
        "Smart Home Integration – Advanced technology for enhanced living.",
        "Sustainable Practices – Eco-friendly construction and energy-efficient solutions.",
        "Turnkey Solutions – End-to-end management from design to handover."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1593786267440-550458cc882a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Commercial & Industrial Construction",
      description:
        "We create functional, aesthetic, and efficient spaces for businesses, industries, and retail establishments.",
      solutions: [
        "Office Buildings & Workspaces – Designed for productivity and collaboration.",
        "Retail Outlets & Malls – Engaging, customer-centric retail spaces.",
        "Warehouses & Industrial Facilities – Built for efficiency and durability.",
        "Hospitality & Healthcare Facilities – High-quality construction for hotels and hospitals.",
        "Regulatory Compliance – Adherence to all safety and legal standards.",
        "Cost & Time Efficiency – Execution within budget and schedule."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1708791894996-2568a0e002e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Structural Modifications & Extensions",
      description:
        "Expand or reinforce your property with seamless modifications that integrate perfectly with your existing space.",
      solutions: [
        "Space Expansion – Adding extra floors or extending rooms for usability.",
        "Load-Bearing Modifications – Structural changes with safety compliance.",
        "Renovation & Restoration – Modernizing old buildings while preserving integrity.",
        "Energy Efficiency Upgrades – Improved insulation and materials for sustainability.",
        "Seamless Integration – Matching new construction with existing architecture.",
        "Fast & Efficient Execution – Minimal disruption during the modification process."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Fit-Out & Interior Contracting",
      description:
        "Zaaviyan offers expert fit-out solutions to transform interiors into stunning, functional spaces.",
      solutions: [
        "Corporate & Office Fit-Outs – Modern designs for workspaces.",
        "Retail & Hospitality Fit-Outs – Engaging, luxurious interiors.",
        "Residential Interiors – High-end finishes for sophisticated living.",
        "Space Planning & Optimization – Maximizing efficiency and comfort.",
        "Premium Finishes & Materials – Quality flooring, ceilings, and fixtures.",
        "On-Time Completion – Ensuring your space is ready as scheduled."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Project Management & Turnkey Solutions",
      description:
        "From concept to completion, we provide seamless project management and turnkey solutions for exceptional results.",
      solutions: [
        "Comprehensive Planning – Detailed construction roadmaps for smooth execution.",
        "Vendor & Material Coordination – Managing suppliers for quality control.",
        "Budget Optimization – Cost-effective solutions without compromising quality.",
        "Quality Control & Safety Assurance – Adherence to industry regulations.",
        "Timely Handover – Projects delivered on schedule with flawless execution.",
        "Post-Completion Support – Ongoing maintenance and modification assistance."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        {constructionServices.map((e, idx) => {
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
