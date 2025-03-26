import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const renovationServices = [
    {
      title: "Complete Renovations",
      description:
        "We reimagine every aspect of your space, ensuring it aligns with both aesthetic desires and functional requirements for a complete transformation.",
      solutions: [
        "Full-Scope Redesign – Comprehensive structural updates and finishing touches.",
        "Custom Solutions – Tailored renovation plans to match your needs and budget.",
        "Quality Assurance – High standards in materials, workmanship, and finishes.",
        "Timely Execution – Adherence to project timelines for efficient completion.",
        "Space Optimization – Intelligent layouts that enhance functionality and flow."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Office Fit-Outs",
      description:
        "Enhance productivity and reflect your company’s identity with expertly designed office spaces that foster creativity and efficiency.",
      solutions: [
        "Customized Layouts – Workspaces designed for optimal workflow and comfort.",
        "Employee Well-Being – Ergonomic and inspiring environments for teams.",
        "Brand Integration – Aligning design elements with your corporate identity.",
        "Tech Integration – Seamless incorporation of technology for efficiency.",
        "Efficient Delivery – Timely completion with minimal disruption."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1578991624414-276ef23a534f?q=80&w=1027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Retail & Commercial Spaces",
      description:
        "Create memorable customer experiences with interior designs that highlight your brand while ensuring functionality and comfort.",
      solutions: [
        "Brand-Centric Design – Interiors that reinforce your brand identity.",
        "Customer-Centric Layouts – Optimized spaces for customer interaction.",
        "Premium Finishes – High-quality materials for durability and aesthetics.",
        "Flexible Designs – Adaptable layouts to meet evolving business needs.",
        "Sustainable Solutions – Eco-friendly materials with modern aesthetics."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1584214344297-5f7648d939df?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Luxury Residences",
      description:
        "Transform your home into a luxurious and comfortable space that perfectly aligns with your personal style and functional needs.",
      solutions: [
        "Bespoke Interior Design – Personalized aesthetics and high-end decor.",
        "High-End Finishes – Premium materials that enhance elegance and durability.",
        "Space Maximization – Smart layouts for a sense of openness and flow.",
        "Attention to Detail – Meticulous craftsmanship in every aspect.",
        "Luxury Integration – Smart home features, ambient lighting, and more."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Project Management",
      description:
        "Ensure seamless renovation execution with expert oversight, transparent communication, and efficient coordination.",
      solutions: [
        "Comprehensive Planning – Phased project execution for smooth progress.",
        "Clear Communication – Regular updates and feedback loops.",
        "Budget Management – Cost-effective solutions without quality compromise.",
        "Vendor Coordination – Efficient scheduling and collaboration with contractors.",
        "Quality Control – Strict checks to maintain high standards."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        {renovationServices.map((e, idx) => {
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
