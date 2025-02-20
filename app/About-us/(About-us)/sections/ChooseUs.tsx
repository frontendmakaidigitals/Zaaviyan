'use client'
import React, { useRef } from "react";
import {motion, useInView} from 'framer-motion'
const ChooseUs = () => {
  const chooseCards = [
    {
      icon: "/About-icons/Extensive-Expertise.png",
      name: "Extensive Expertise",
      desc: "Years of industry experience ensuring top-notch solutions tailored to your needs.",
    },
    {
      icon: "/About-icons/Facilities.png",
      name: "In-House Facilities",
      desc: "State-of-the-art in-house facilities for complete control over quality and execution.",
    },
    {
      icon: "/About-icons/End-to-End.png",
      name: "End-to-End Services",
      desc: "Comprehensive services covering everything from planning to final execution.",
    },
    {
      icon: "/About-icons/attention-to-detail.png",
      name: "Attention to Detail",
      desc: "A meticulous approach to every project, ensuring precision and excellence.",
    },
  ];
  const viewContainer = useRef(null)
  const inView = useInView(viewContainer, {once:true})
  return  (
    <div  className="my-20">
      <div className="container">
        <h1 ref={viewContainer} className="text-6xl font-[700] font-Primary text-center">
          Why <span className="text-slate-500">choose us</span>
        </h1>

        <div className="grid grid-cols-1 mt-12 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {chooseCards.map((card, idx) => (
            <motion.div animate={{opacity:inView ? 1 : 0, y:inView ? 0:100}} transition={{duration:.6, ease:[0, 0, .2, 1], delay:.15 * idx}} key={idx} className="border-2 border-teal-700 hover:bg-teal-700 group transition-colors duration-300 rounded-xl p-4">
              <div className="size-14">
                <div
                  className="w-full h-full bg-teal-800 group-hover:bg-white mask mask-image "
                  style={{
                    WebkitMaskImage: `url(${card.icon})`,
                    maskImage: `url(${card.icon})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
              </div>
              <h2 className="mt-3 text-xl group-hover:text-white transition-colors duration-300 font-Primary font-[600]">
                {card.name}
              </h2>
              <p className="mt-4 text-md group-hover:text-white transition-colors duration-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
