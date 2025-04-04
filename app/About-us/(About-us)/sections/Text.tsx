"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { StarFour, CirclesThree, LineSegments } from "@phosphor-icons/react";
const Text = () => {
  const viewContainer = useRef(null);
  const inView = useInView(viewContainer, { once: true });
  const para =
    " Zaaviyan Contracting is a leading fit-out company that excels in delivering high-quality, custom-made interiors across residential, commercial, and hospitality sectors. With a strong foundation built on innovation, creativity, and a commitment to excellence, we have earned a reputation for transforming spaces into functional, inspiring environments.";
  return (
    <div ref={viewContainer} className="my-20 ">
      <h2 className="text-center mb-7 text-3xl lg:text-5xl font-[600] font-Primary text-slate-600">About us</h2>
      <motion.article className="container font-[700] font-Primary text-center text-lg lg:text-2xl flex flex-wrap justify-center">
        {para.split(" ").map((elem, idx) => (
          <span key={idx} className="overflow-hidden inline-block">
            <motion.span
              animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // Move up into view
              transition={{
                duration: 0.4,
                delay: idx * 0.03,
                ease: [0.175, 0.885, 0.32, 1.1],
              }} // Stagger effect
              className="ml-2 inline-flex items-center"
            >
                {idx === 10 && <StarFour weight="fill" className="mr-2 text-amber-400" />}
                {idx === 25 && <CirclesThree weight="fill" className="mr-2 text-amber-400" />}
                {idx === 33 && <LineSegments weight="fill" className="mr-2 text-amber-400" />}
              {elem}
            </motion.span>
          </span>
        ))}
      </motion.article>
    </div>
  );
};

export default Text;
