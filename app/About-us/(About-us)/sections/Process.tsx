import { cn } from "@/lib/utils";
import React from "react";

const Process = () => {
  const process = [
    { name: "Extensive Expertise", icons: "media/About-us/customer-satisfaction.png" },
    { name: "In-House Facilities ", icons: "media/About-us/house-plan.png" },
    {
      name: "End-to-End Services",
      icons: "media/About-us/strategy.png",
    },
    {
      name: "Attention to Detail",
      icons: "media/About-us/3d-model.png",
    },
    {
      name: "Commitment to Quality",
      icons: "media/About-us/checked.png",
    },
  ];
  return (
    <div className=" pb-24">
      <div className="container">
        <h2 className="text-3xl text-center  font-Primary font-[600]">
          From Concept to Completion, We Deliver Excellence.
        </h2>
        <p className="text-center mt-2">
          We set the stage, craft ambition, visualize perfection, plan
          meticulously, and construct your dreams, all while exceeding your
          expectations at every step. From vision to reality, our design journey
          entails precision and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  place-items-center mt-12 gap-4 ">
          {process.map((pro, idx) => (
            <div
              className={cn(
                `w-full flex flex-col justify-center items-center`,
                idx !== process.length - 1 &&
                  "border-0 lg:border-r border-slate-300"
              )}
              key={idx}
            >
              <div className="w-full max-w-28">
                <img src={pro.icons} />
              </div>
              <p className="mt-4 font-Primary text-lg">
                {idx + 1 + "."} {pro.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
