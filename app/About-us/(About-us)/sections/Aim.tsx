"use client";
import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Crosshair, RoadHorizon } from "@phosphor-icons/react";

const Aim = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effect for the text
  const missionY = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const visionY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);

  const ourVision = {
    name: "Our Vision",
    desc: "To be recognized as the industry leader in fit-out and contracting solutions, delivering innovative, quality-driven, and customer-focused projects that transform spaces into extraordinary environments.",
  };

  const ourMission = {
    name: "Our Mission",
    desc: "Our mission is to provide world-class fit-out services that bring to life the vision of our clients. We are committed to delivering projects on time, within budget, and to the highest possible standards, while maintaining long-term relationships based on trust and collaboration.",
  };
  const viewContainer = useRef(null);
  const inView = useInView(viewContainer, { once: true, margin:'-50% 0px 0px -50%' });

  return (
    <div  className="my-28">
      <div ref={viewContainer} className="container py-14 grid grid-cols-1 lg:grid-cols-2 ">
        {/* Mission Block */}
        <motion.div
          animate={{ y: inView ? 0 : 300 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="border-r pr-4"
        >
          <Crosshair className="text-6xl text-teal-800" weight="fill" />
          <h2 className="text-3xl font-Primary font-semibold mt-3">
            {ourMission.name}
          </h2>
          <p className="text-lg mt-1">{ourMission.desc}</p>
        </motion.div>

        {/* Vision Block */}
        <motion.div
          animate={{ y: inView ? 0 : 300 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay:.2 }}
          
          className="row-start-2 col-start-2 border-l -ml-[1px] pl-4"
        >
          <RoadHorizon className="text-6xl text-teal-800" weight="fill" />
          <h2 className="text-3xl font-Primary font-semibold mt-3">
            {ourVision.name}
          </h2>
          <p className="text-lg mt-1">{ourVision.desc}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Aim;
