import { cn } from "@/app/lib/utils";
import React from "react";

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
  return (
    <div className="my-14">
      <div className="container">
        <h1 className="text-5xl font-[500] font-Primary text-center">
          Our <span className="text-slate-500">Core Values</span>
        </h1>
        <div className="grid grid-cols-4 mt-6 gap-3">
          {coreValues.map((elem, idx) => (
            <CoreValueContainer key={idx} elem={elem} />
          ))}
        </div>
      </div>
    </div>
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
        
      <p className="text-slate-700 text-sm px-2 py-1 bg-slate-50/70 backdrop-filter backdrop-blur-lg rounded-lg">{elem.name}</p>
    </div>
  );
};
