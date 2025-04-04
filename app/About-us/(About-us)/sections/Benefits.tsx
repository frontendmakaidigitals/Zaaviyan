"use client";
import React from "react";
const Benefits = () => {
  const cards = [
    {
      title: "Eco-Friendly Practices",
      desc: "At Zaaviyan, sustainability is not just a trend — it’s a commitment. We integrate eco-conscious practices into every phase of our projects, from material selection to energy-efficient systems. Our goal is to minimize environmental impact while delivering modern, functional spaces that align with global green building standards. By prioritizing sustainable solutions, we not only protect the planet but also create healthier, more efficient environments for our clients.",
      icon: "Media/benefits/leaves.png",
    },
    {
      title: "Bespoke Design",
      desc: "Zaaviyan offers fully customized fit-out services tailored to the unique needs of each client. Our turnkey solutions cover everything from concept design to final execution, ensuring a seamless and hassle-free experience. With a focus on precision, quality craftsmanship, and design excellence, we bring your vision to life while maintaining the highest standards of functionality and aesthetics.",
      icon: "Media/benefits/sewing.png",
    },
    {
      title: "Innovation and Smart Technology",
      desc: "Embracing the future of design and construction, Zaaviyan integrates cutting-edge technologies into our projects to enhance performance, comfort, and convenience. From smart lighting and automation systems to innovative construction techniques, we leverage technology to deliver intelligent, future-ready spaces that align with modern lifestyles and business needs.",
      icon: "Media/benefits/cpu.png",
    },
  ];

  return (
    <div className="w-full h-auto lg:h-[800px]">
      <div className="w-full h-auto py-10 lg:py-0 lg:h-[550px] relative">
        <div className="bg-slate-900/30 w-full h-full absolute top-0 left-0 z-10" />
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={
              "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
        <div className="pt-36 relative z-10">
          <h1 className="text-slate-50 text-3xl lg:text-5xl text-center">
            Together We can change <br /> How Houses are build
          </h1>
          <p className="text-slate-100 text-center text-sm lg:text-md mt-2">
            We always work by the highest standard and business ethics
          </p>
        </div>
        <div className="container z-40 relative lg:absolute mt-10 lg:mt-0 lg:-bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-black text-slate-50 p-8">
                <div className=" flex justify-center">
                  <div className="size-28">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="invert brightness-0"
                    />
                  </div>
                </div>
                <h2 className="text-3xl font-[600] mt-4 capitalize font-Primary ">
                  {card.title}
                </h2>
                <p className="mt-2">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
