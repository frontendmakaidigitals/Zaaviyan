"use client";
import { cn } from "@/app/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CoreValue = () => {
  const coreValues = [
    {
      name: "Premium Quality",
      icon: "",
      griding: "",
      bgColor: "bg-blue-300",
      img: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-",
    },
    {
      name: "Excellence & Innovation",
      icon: "",
      griding: "",
      bgColor: "bg-pink-400",
      img: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
    },
    {
      name: "Sustainability & CSR",
      icon: "",
      griding: "col-span-2",
      bgColor: "bg-green-400",
      img: "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
    },
    {
      name: "Integerity",
      icon: "",
      griding: "",
      bgColor: "bg-orange-500",
      img: "https://images.unsplash.com/photo-1641891847722-7ca2a0df0879?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
    },
    {
      name: "Leadership",
      icon: "",
      griding: "col-span-2",
      bgColor: "bg-sky-300",
      img: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
    },
    {
      name: "Communication",
      icon: "",
      griding: "",
      bgColor: "bg-yellow-400",
      img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "object-cover",
    },
  ];
  const viewContainer = useRef(null);
  const isInView = useInView(viewContainer, { margin: "-30% 0px -30% 0px" });
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
        <div className="grid grid-cols-6 mt-14 gap-1 place-items-center">
          {coreValues.map((elem, idx) => (
            <div
              key={idx}
              className="size-36 p-4 flex justify-center items-center rounded-full bg-white/40 border border-gray-400/40 backdrop-filter backdrop-blur-lg"
            >
              <p className="text-center font-Primary font-[700]">{elem.name}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="container text-sm mt-10 relative z-10 text-slate-50">
        *Tailored to each client`s unique vision. Committed to quality and
        precision, we handle every detail from planning to execution, ensuring
        seamless project delivery. At Zaaviyan, excellence isn’t just a goal -
        it`s our standard.
      </p>
    </motion.div>
  );
};

export default CoreValue;
