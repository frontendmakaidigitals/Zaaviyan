'use client'
import { cn } from "@/app/lib/utils";
import React from "react";
import { BowlFood, Storefront, HandHeart, BuildingOffice } from "@phosphor-icons/react";



const Icon_color = '#00E676'
const Icon_size = '40'
const Icon_type = 'fill'
const _Industries = [
  {
    name: "F&B",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BowlFood color={Icon_color} weight={Icon_type} size={Icon_size}/>,
  },
  {
    name: "Retail",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <Storefront color={Icon_color} weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Hospitality",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <HandHeart color={Icon_color} weight={Icon_type} size={Icon_size} />,
  },
  {
    name: "Office",
    desc: "Lorem ipsum dolor sit amet, consec adipiscing elit,",
    icon: <BuildingOffice color={Icon_color} weight={Icon_type} size={Icon_size} />,
  },
];
const Industries = () => {
  return (
    <div className="my-14 bg-slate-100 h-[600px] grid grid-cols-1 items-center">
      <div className="container ">
        <h1 className="text-5xl font-[500] font-Primary text-center">
          Industries <span className="text-slate-500">we serve</span>
        </h1>
        <div className="grid mt-6 grid-cols-4 overflow-hidden rounded-xl border border-slate-200">
          {_Industries.map((elem, idx) => (
            <IndustryCard
              key={idx}
              name={elem.name}
              desc={elem.desc}
              index={idx}
              icon={elem.icon}
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
}
const IndustryCard: React.FC<IndustryProps> = ({ name, desc, index, icon }) => {
  return (
    <div
      className={cn(
        `w-full p-5 bg-white border-r border-slate-200`,
        index === 0 && ``,
        index === _Industries.length - 1 && `border-0`
      )}
    >
      <div>{icon}</div>
      <h2 className="text-2xl mt-4">{name}</h2>
      <p className="text-md mt-1">{desc}</p>
    </div>
  );
};
