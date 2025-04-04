"use client";
import { cn } from "@/app/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BowlFood,
  Storefront,
  HandHeart,
  Package,
  HouseLine,
  Popcorn,
  Student,
  Hospital,
  Factory,
} from "@phosphor-icons/react";

const Icon_size = "44";
const Icon_type = "fill";
const _Industries = [
  {
    name: "Commercial",
    desc: "Efficient designs that improve space and workflow.",
    icon: <Package weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/commercial.jpg",
  },
  {
    name: "Retail",
    desc: "Custom layouts that highlight products and brand.",
    icon: <Storefront weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/retail industry.jpg",
  },
  {
    name: "Hospitality",
    desc: "Stylish, functional interiors for hotels and resorts.",
    icon: <HandHeart weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/hospitality industry.jpg",
  },
  {
    name: "F&B",
    desc: "Designs that set the right mood for restaurants and cafés.",
    icon: <BowlFood weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/F&B industry.jpg",
  },
  {
    name: "Healthcare",
    desc: "Clean, calming layouts for medical spaces.",
    icon: <Hospital weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/healthcare industry.jpg",
  },
  {
    name: "Residential",
    desc: "Personalized, elegant interiors for every lifestyle.",
    icon: <HouseLine weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/residential industry.jpg",
  },
  {
    name: "Entertainment",
    desc: "Engaging designs with custom lighting and space planning.",
    icon: <Popcorn weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/entertainment industry.jpg",
  },
  {
    name: "Educational Institutions",
    desc: "Modern, comfortable designs that make learning easier.",
    icon: <Student weight={Icon_type} size={Icon_size} />,
    img: "Media/Industry_Images/educational industry.jpg",
  },
];

const Industries = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#EFEBE9] py-20 grid grid-cols-1 items-center">
      <div className="container">
        <h1 className="text-6xl font-meidum text-black font-heroFont text-center">
          Industries <span className="text-slate-500">we serve</span>
        </h1>

        <motion.div
          className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden border border-slate-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {_Industries.map((elem, idx) => (
            <IndustryCard2
              key={idx}
              name={elem.name}
              desc={elem.desc}
              index={idx}
              setHoverIdx={setHoverIdx}
              hoverIdx={hoverIdx}
              img={elem.img}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;

interface IndustryProps {
  name: string;
  desc: string;
  index: number;
  setHoverIdx: React.Dispatch<React.SetStateAction<number | null>>;
  hoverIdx: number | null;
  img: string;
}

const IndustryCard2: React.FC<IndustryProps> = ({
  name,
  desc,
  index,
  setHoverIdx,
  hoverIdx,
  img,
}) => {
  const isHovered = hoverIdx === index; // Avoid redundant comparisons

  return (
    <motion.div
      transition={{ duration: 0.5, ease:[0, 0, .2, 1] }} // Reduce duration
      onMouseEnter={() => setHoverIdx(index)}
      onMouseLeave={() => setHoverIdx(null)}
      className={cn(
        "relative w-full group transform-gpu aspect-square overflow-hidden transition-all duration-300",
        isHovered ? "bg-[#FFB38E]" : "bg-transparent"
      )}
    >
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
          src={img}
          alt={name}
          loading="lazy"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/50 transition-all duration-300" />

      {/* Text Container */}
      <motion.div
        animate={{ y: isHovered ? 0 : 5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4"
      >
        <h2 className="text-2xl text-white font-[500]">{name}</h2>
        {isHovered && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="text-slate-100 text-sm mt-2"
          >
            {desc}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};
