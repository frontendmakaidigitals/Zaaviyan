"use client";
import { cn } from "@/app/lib/utils";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CoreValue = () => {
  const coreValues = [
    { name: "Premium Quality", icon: "", griding: "", bgColor: "bg-blue-300" },
    {
      name: "Excellence & Innovation",
      icon: "",
      griding: "",
      bgColor: "bg-pink-400",
    },
    {
      name: "Sustainability & CSR",
      icon: "",
      griding: "col-span-2",
      bgColor: "bg-green-400",
    },
    { name: "Integerity", icon: "", griding: "", bgColor: "bg-orange-500" },
    {
      name: "Leadership",
      icon: "",
      griding: "col-span-2",
      bgColor: "bg-sky-300",
    },
    { name: "Innovation", icon: "", griding: "", bgColor: "bg-yellow-400" },
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
    </motion.div>
  );
};

export default CoreValue;

const CoreValueContainer = ({
  elem,
}: {
  elem: { name: string; icon: string; griding: string; bgColor: string };
}) => {
  return (
    <div
      className={cn(
        `rounded-xl bg-gradient-to-tr from-purple-300 to-pruple-50 p-3 w-full h-[220px] flex items-end relative`,
        elem.griding
      )}
    >
      <p className="text-slate-700 text-sm px-2 py-1 bg-slate-50/70 backdrop-filter backdrop-blur-lg rounded-lg">
        {elem.name}
      </p>
    </div>
  );
};
