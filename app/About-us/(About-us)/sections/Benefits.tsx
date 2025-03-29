"use client";
import React from "react";
import { LightbulbFilament, Globe, Scales } from "@phosphor-icons/react";
const Benefits = () => {
  const cards = [
    {
      title: "inspiration",
      desc: "We are passionate to work with private customers as well as developers of all sizes. Every project inspires us and builds on our experience, allowing us to manage large scale projects while being loyal to our renowned heritage in smart bespoke villas.",
      icon: <LightbulbFilament />,
    },
    {
      title: "Better World",
      desc: "Our mission at Settle is to continuously improve the quality of human experience in life with our responsible projects and approach to make those happen. Settle turns sustainable dreams into reality with a focus on world-class design, attention to detail and professional execution.",
      icon: <Globe />,
    },
    {
      title: "Business Ethics",
      desc: "Business ethics stand amidst the core of our values. We want to leave our mark on the work that helps the society and our planet prosper. We work through partnership and collaboration to build the trust for better tomorrow. Join us for the exiting journey for towards The Design of Good Living ™.",
      icon: <Scales />,
    },
  ];

  if (false) {
    return (
      <div>
        <h1 className="text-slate-50 text-5xl text-center">
          Together We can change <br /> How Houses are build
        </h1>
        <p className="text-slate-100 text-center text-md">
          We always work by the highest standard and business ethics
        </p>
      </div>
    );
  }
  return (
    <div className="w-full h-[800px]">
      <div className="w-full h-[550px] relative">
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
          <h1 className="text-slate-50 text-5xl text-center">
            Together We can change <br /> How Houses are build
          </h1>
          <p className="text-slate-100 text-center text-md mt-2">
            We always work by the highest standard and business ethics
          </p>
        </div>
        <div className="container z-30 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-black text-slate-50 p-8">
                <div className="text-9xl flex justify-center">{card.icon}</div>
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
