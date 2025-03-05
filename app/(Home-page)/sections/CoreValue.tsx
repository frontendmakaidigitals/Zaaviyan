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
    <motion.div
      animate={{
        backgroundColor: isInView ? "hsl(0, 100, 100)" : "hsl(0, 100, 0)",
      }}
      transition={{ duration: 0.2, delay: 0.2, ease: [0, 0, 0.2, 1] }}
      ref={viewContainer}
      className="py-14"
    >
      <div className="container">
        <h1 className="text-6xl font-[500] font-Primary text-center">
          Our{" "}
          <motion.span
            animate={{
              color: isInView ? "hsl(0, 1, 60)" : "hsl(0, 1, 0)",
            }}
            transition={{ duration: 0.2, delay: 0.2, ease: [0, 0, 0.2, 1] }}
            className="text-slate-500"
          >
            Core Values
          </motion.span>
        </h1>
        <div className="grid grid-cols-4 mt-14 gap-3">
          {coreValues.map((elem, idx) => (
            <CoreValueContainer key={idx} elem={elem} />
          ))}
        </div>
      </div>

      <p className="container text-sm mt-3">
        *Tailored to each client`s unique vision. Committed to quality and
        precision, we handle every detail from planning to execution, ensuring
        seamless project delivery. At Zaaviyan, excellence isn’t just a goal -
        it`s our standard.
      </p>
    </motion.div>
  );
};

export default CoreValue;

const CoreValueContainer = ({
  elem,
}: {
  elem: {
    name: string;
    icon: string;
    griding: string;
    bgColor: string;
    img: string;
    size: string;
  };
}) => {
  return (
    <div
      className={cn(
        `rounded-xl bg-gradient-to-tr overflow-hidden from-purple-300 to-pruple-50 p-3 w-full h-[270px] flex items-end relative`,
        elem.griding
      )}
    >
      <img
        src={elem.img}
        className={cn(`absolute top-0 left-0 w-full h-full`, elem.size)}
      />
      <p className="text-slate-700 text-md px-2 py-1 bg-slate-50/70 backdrop-filter backdrop-blur-sm rounded-lg">
        {elem.name}
      </p>
    </div>
  );
};
