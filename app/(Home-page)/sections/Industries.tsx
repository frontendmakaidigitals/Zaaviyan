"use client";
import { cn } from "@/app/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BowlFood, Storefront, HandHeart, BuildingOffice } from "@phosphor-icons/react";

const Icon_size = "44";
const Icon_type = "fill";
const _Industries = [
  {
    name: "F&B",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BowlFood weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Retail",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <Storefront weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Hospitality",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <HandHeart weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Office",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BuildingOffice weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "F&B",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BowlFood weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Retail",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <Storefront weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Hospitality",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <HandHeart weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Office",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BuildingOffice weight={Icon_type} size={Icon_size} />,
  },
];

const Industries = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <div className="bg-[#EFEBE9] py-20 grid grid-cols-1 items-center">
      <div className="container">
        <h1 className="text-6xl font-[500] font-Primary text-center">
          Industries <span className="text-slate-500">we serve</span>
        </h1>

        <motion.div
          className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-xl border border-slate-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
        >
          {_Industries.map((elem, idx) => (
            <IndustryCard
              key={idx}
              name={elem.name}
              desc={elem.desc}
              index={idx}
              icon={elem.icon}
              setHoverIdx={setHoverIdx}
              hoverIdx={hoverIdx}
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
  icon: React.ReactNode;
  setHoverIdx: React.Dispatch<React.SetStateAction<number | null>>;
  hoverIdx: number | null;
}

const IndustryCard: React.FC<IndustryProps> = ({
  name,
  desc,
  index,
  icon,
  setHoverIdx,
  hoverIdx,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHoverIdx(index)}
      onMouseLeave={() => setHoverIdx(null)}
      className={cn(
        `w-full px-7 py-10 transition-colors duration-300 bg-white border-r border-slate-200`,
        index === 0 && ``,
        index === _Industries.length - 1 && `border-0`,
        hoverIdx === index && `bg-[#FFB38E]`,
        index > _Industries.length / 2 && "border-t border-slate-200"
      )}
    >
      <div className={cn(hoverIdx === index && "!text-white", `text-[#FFB38E]`)}>{icon}</div>
      <h2 className="text-2xl mt-4">{name}</h2>
      <p className="text-md mt-1">{desc}</p>
    </motion.div>
  );
};
