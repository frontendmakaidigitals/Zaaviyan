import { cn } from "@/lib/utils";
import React from "react";

const Process = () => {
  const process = [
    { name: "Pre-Design", icons: "media/About-us/prototype.png" },
    { name: "Concept", icons: "media/About-us/concept.png" },
    { name: "Detailed Design", icons: "media/About-us/magnifying-glass.png" },
    { name: "Build Planning", icons: "media/About-us/urban-planning.png" },
    { name: "Construction", icons: "media/About-us/work-in-progress.png" },
  ];
  return (
    <div className=" pb-24">
      <div className="container">
        <h2 className="text-3xl text-center  font-Primary font-[600]">
          Everthing Under One Process
        </h2>
        <p className="text-center mt-2">
          We set the stage, craft ambition, visualize perfection, plan
          meticulously, and construct your dreams, all while exceeding your
          expectations at every step. From vision to reality, our design journey
          entails precision and innovation.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-5  place-items-center mt-12 gap-4 ">
          {process.map((pro, idx) => (
            <div
              className={cn(
                `w-full flex flex-col justify-center items-center`,
                idx !== process.length - 1 && "border-r border-slate-300"
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
