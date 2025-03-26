import React from "react";

const Choose = () => {
  const data = [
    {
      icon: "/Interior-Media/icons/guru.png",
      name: "Turnkey Expertise ",
    },
    {
      icon: "/Interior-Media/icons/personalized.png",
      name: "Industry Experience",
    },
    {
      icon: "/Interior-Media/icons/vector.png",
      name: "Quality & Innovation",
    },
    {
      icon: "/Interior-Media/icons/high-quality.png",
      name: "Timely Delivery",
    },
  ];
  return (
    <div className="mt-20">
      <div className="container">
        <h2 className="font-[400] font-heroFont text-center text-5xl">
          Why Choose <span className="font-[600]">Zaaviyan?</span>
        </h2>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
          {data.map((e, idx) => (
            <div
              key={idx}
              className="w-full transition-all duration-300 bg-orange-100 hover:bg-orange-200 flex  items-center gap-5 rounded-lg px-5 py-4"
            >
              <div className="size-10 ">
                <img src={e.icon} className="w-full h-full object-contain" />
              </div>
              <p className="font-[400] font-Primary text-xl">{e.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
