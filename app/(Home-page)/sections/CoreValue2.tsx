"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/app/lib/utils";

const CoreValue = () => {
  const coreValues = [
    {
      name: "Premium Quality",
      icon: "",
      griding: "",
      bgColor: "bg-blue-300",
      img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-",
      desc: "We uphold the highest standards in craftsmanship, materials, and execution to deliver exceptional results.",
    },
    {
      name: "Excellence & Innovation",
      icon: "",
      griding: "",
      bgColor: "bg-pink-400",
      img: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
      desc: "We push creative boundaries and embrace cutting-edge solutions to craft visionary spaces.",
    },
    {
      name: "Sustainability & CSR",
      icon: "",
      griding: "col-span-2",
      bgColor: "bg-green-400",
      img: "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
      desc: "We integrate eco-friendly practices and ethical responsibility into every project for a better future.",
    },
    {
      name: "Integerity",
      icon: "",
      griding: "",
      bgColor: "bg-orange-500",
      img: "https://images.unsplash.com/photo-1641891847722-7ca2a0df0879?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
      desc: "We operate with transparency, honesty, and a commitment to delivering on our promises.",
    },
    {
      name: "Leadership",
      icon: "",
      griding: "col-span-2",
      bgColor: "bg-sky-300",
      img: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
      desc: "We set industry benchmarks through expertise, professionalism, and a forward-thinking approach.",
    },
    {
      name: "Communication",
      icon: "",
      griding: "",
      bgColor: "bg-yellow-400",
      img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
      desc: "We foster clear, open dialogue to ensure seamless collaboration and client satisfaction.§§",
    },
  ];
  const viewContainer = useRef(null);
  const isInView = useInView(viewContainer, { margin: "-30% 0px -30% 0px" });
  const [index, setIndex] = useState(0);
  return (
    <motion.div ref={viewContainer} className="py-32 relative overflow-hidden">
      <img
        className="w-full h-full object-cover absolute top-1/2 -translate-y-1/2 left-0"
        src={`https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-slate-900/40" />
      <div className="container relative z-10">
        <h1 className="text-6xl text-slate-50 font-[500] font-Primary text-center">
          Our{" "}
          <motion.span
            animate={{
              color: isInView ? "hsl(0, 1, 60)" : "hsl(0, 1, 0)",
            }}
            transition={{ duration: 0.2, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="!text-slate-300"
          >
            Core Values
          </motion.span>
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-6 mt-14 gap-3 place-items-center">
          {coreValues.map((elem, idx) => (
            <motion.button
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 1.5, type: "spring" }}
              viewport={{ once: true }}
              key={idx}
              onClick={() => setIndex(idx)}
              className={cn(
                `size-28 md:size-36 p-4 flex justify-center items-center rounded-full bg-white/40 border border-gray-400/40 backdrop-filter backdrop-blur-lg`,
                `hover:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fde68a]  to-[#fab236] transition-all duration-200`,
                `${index === idx ? "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fde68a]  before:absolute before:left-1/2 before:top-full before:w-[1px] lg:before:h-14 before:bg-slate-50 to-[#fab236]" : ""}`
              )}
            >
              <p className="text-center font-Primary  font-[700] text-sm">
                {elem.name}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <p className="container lg:border-t py-6 text-center text-xs md:text-lg mt-14 relative z-10 text-slate-50">
        {coreValues[index].desc}
      </p>
    </motion.div>
  );
};

export default CoreValue;
