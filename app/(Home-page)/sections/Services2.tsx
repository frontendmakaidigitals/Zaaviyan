"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

const Services = () => {
  const viewContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: viewContainer,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect
  const y = useTransform(scrollYProgress, [0, .8], [-150, 150]); // Less movement

  const services = [
    {
      name: "Interior Design",
      desc: "We create functional and stylish interiors customized to your needs.",
      img: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Joinery",
      desc: "Custom-made wooden elements to enhance your space's functionality and beauty.",
      img: "https://images.unsplash.com/photo-1652272160994-c0796747bda3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Carpentry",
      desc: "Durable, finely crafted woodwork for all your structural and aesthetic needs.",
      img: "https://images.unsplash.com/photo-1626081063434-79a2169791b1?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Furniture Crafting",
      desc: "Bespoke furniture designed to suit your style and requirements.",
      img: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fit-out & Refurbishments",
      desc: "Transforming spaces with stylish and practical upgrades.",
      img: "https://images.unsplash.com/photo-1639662436912-b15748f43b61?q=80&w=1803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Visual Merchandising & Shop Display",
      desc: "Engaging displays that attract customers and elevate retail experiences.",
      img: "https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Architecture Design",
      desc: "Innovative, creative designs that combine aesthetics and functionality.",
      img: "https://plus.unsplash.com/premium_photo-1661335323493-d75cdcd6c275?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Retail Turnkey Solutions",
      desc: "Complete retail solutions from design to final setup.",
      img: "https://images.unsplash.com/photo-1580554430120-94cfcb3adf25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Home Maintenance",
      desc: "Keeping your home in top condition with regular maintenance and repairs.",
      img: "https://plus.unsplash.com/premium_photo-1677234146610-aeed39bd0542?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Space Renovation",
      desc: "Revamping spaces to create functional, vibrant environments.",
      img: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <motion.div className="w-full mt-20 bg-[#EFEBE9]">
      <div className="container py-20">
        <h1 className="text-6xl font-[500] text-black font-Primary text-center">
          Services <span className="text-slate-600">we provide</span>
        </h1>

        <div
          ref={viewContainer}
          className="grid gap-y-5 grid-cols-1 w-full mt-20"
        >
          {services.map((elem, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  `grid place-items-center gap-4`,
                  idx % 2 === 0
                    ? "grid-cols-[0.7fr_1.3fr]"
                    : "grid-cols-[1.3fr_.7fr]"
                )}
              >
                <div
                  className={cn(
                    `w-full`,
                    idx % 2 !== 0 ? "order-2" : "order-1"
                  )}
                >
                  <h3 className="text-4xl">{elem.name}</h3>
                  <p>{elem.desc}</p>
                </div>
                <motion.div
                  className={cn(
                    `w-full h-[450px]  overflow-hidden`,
                    idx % 2 !== 0 ? "order-1" : "order-2"
                  )}
                >
                  <motion.img
                    style={{ y, scale:1.3 }}
                    className="w-full h-full object-cover"
                    src={elem.img}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
