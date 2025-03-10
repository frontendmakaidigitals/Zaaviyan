"use client";
import React, { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
} from "framer-motion";
import { cn } from "@/app/lib/utils";

const Services = () => {
 const viewContainer = useRef(null);
  const isInView = useInView(viewContainer, {once:true});
  const services = [
    {
      name: "Interior Design",
      gradient: "from-[#fef08a] via-[#84cc16] to-[#16a34a]",
    },
    { name: "Joinery", gradient: "from-[#756ab6] via-[#ac87c5] to-[#e0aed0]" },
    {
      name: "Carpentry",
      gradient: "from-[#b91c1c] via-[#ef4444] to-[#fca5a5]",
    },
    {
      name: "Furniture Crafting",
      gradient: "from-[#c2410c] via-[#f97316] to-[#fdba74]",
    },
    {
      name: "Fit-out & Refurbishments",
      gradient: "from-[#6366f1] via-[#a5b4fc] to-[#e0e7ff]",
    },
    {
      name: "Visual Merchandising & Shop Display",
      gradient: " from-[#f59e0b] via-[#f59e0b] to-[#ea580c]",
    },
    {
      name: "Architecture Design",
      gradient: "from-[#818cf8] via-[#6366f1] to-[#2563eb]",
    },
    {
      name: "Retail Turnkey Solutions",
      gradient: "from-[#4ade80] via-[#14b8a6] to-[#0891b2]",
    },
    {
      name: "Home Maintenance",
      gradient: "from-[#f6f6d9] via-[#47e4e0] to-[#5f81e4]",
    },
    {
      name: "Space Renovation",
      gradient: "from-[#ff4d4d] via-[#ff8364] to-[#fdb87d]",
    },
  ];
  const [index, setIndex] = React.useState<number | null>(null);
  return (
    <motion.div
      className="w-full mt-20 bg-[#EFEBE9]"

    >
      <div className="container py-20">
        <h1 className="text-6xl font-[500] text-black font-Primary text-center">
          Services <span className="text-slate-600">we provide</span>
        </h1>

        <div ref={viewContainer}  className="grid grid-cols-1 w-full mt-20">
          {services.map((elem, idx) => (
            <motion.div
              onMouseEnter={() => setIndex(idx)}
              onMouseLeave={() => setIndex(null)}
              key={idx}
              transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
              animate={{
                paddingLeft: idx === index ? "1.2rem" : 0,
                paddingRight: idx === index ? "1.2rem" : 0,
              }}
              className={cn(
                `w-full grid grid-cols-[.8fr_1.1fr_.1fr] items-center px-1 py-5 border-b relative overflow-hidden border-gray-700`
              )}
            >
              <motion.div
                animate={{ y: isInView ? "0%" : "200%" }}
                className=" relative z-10 "
                transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.5 }}
              >
                <p className="text-slate-950 text-2xl font-[600]">
                  <span className="text-slate-600 align-top font-[600] text-lg">
                    {" "}
                    {idx + 1 > 9 ? null : 0}
                    {idx + 1}
                  </span>{" "}
                  {elem.name}
                </p>
              </motion.div>

              <motion.p
                animate={{ y: isInView ? "0%" : "230%" }}
                className="text-slate-950 text-center flex-1"
                transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.5 }}
              >
                Lorem ipsum odor amet, consectetuer adipiscing elit.
              </motion.p>

              {/* Right side: Green circle */}
              <motion.div
                animate={{ y: isInView ? "0%" : "200%" }}
                transition={{ duration: 0.8, ease: [0, 0, 0.2, 1], delay: 0.5 }}
                className="rounded-full relative overflow-hidden z-10 w-[120px] h-14 bg-green-200 flex items-center justify-center"
              >
                <img
                  className="w-full h-full object-cover"
                  src={
                    "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </motion.div>

              {/* Gradient Hover Effect */}
              <AnimatePresence mode={"wait"}>
                {idx === index ? (
                  <motion.div
                    initial={{ y: "100%" }}
                    exit={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                    className={`absolute inset-0 bg-gradient-to-tl ${elem.gradient} opacity-60`}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
