"use client";
import { cn } from "@/app/lib/utils";
import React, { useState } from "react";
import {
  BowlFood,
  Storefront,
  HandHeart,
  BuildingOffice,
} from "@phosphor-icons/react";

const Icon_size = "44";
const Icon_type = "fill";
const _Industries = [
  {
    name: "F&B",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BowlFood   weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Retail",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <Storefront  weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Hospitality",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <HandHeart   weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Office",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: (
      <BuildingOffice   weight={Icon_type} size={Icon_size} />
    ),
  },
  {
    name: "F&B",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BowlFood   weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Retail",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <Storefront  weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Hospitality",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <HandHeart   weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Office",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: (
      <BuildingOffice   weight={Icon_type} size={Icon_size} />
    ),
  },
];

const Industries = () => {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  return (
    <div className="my-14 bg-slate-100 h-[600px] grid grid-cols-1 items-center">
      <div className="container ">
        <h1 className="text-6xl font-[500] font-Primary text-center">
          Industries <span className="text-slate-500">we serve</span>
        </h1>
        <div className="grid mt-16 grid-cols-4 overflow-hidden rounded-xl border border-slate-200">
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
        </div>
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
    <div
      onMouseEnter={() => setHoverIdx(index)}
      onMouseLeave={() => setHoverIdx(null)}
      className={cn(
        `w-full px-7 py-10 transition-colors duration-300 bg-white border-r border-slate-200`,
        index === 0 && ``,
        index === _Industries.length - 1 && `border-0`,
        hoverIdx == index && `bg-[#FFB38E]`,
        index > Industries.length -1 / 2 && 'border-t border-slate-200'
      )}
    >
      <div className={cn(hoverIdx === index && '!text-white', `text-[#FFB38E]`)}>{icon}</div>
      <h2 className="text-2xl mt-4">{name}</h2>
      <p className="text-md mt-1">{desc}</p>
    </div>
  );
};
