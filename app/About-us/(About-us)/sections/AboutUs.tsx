"use client";
import React from "react";
import { Avocado } from "@phosphor-icons/react";
const AboutUs = () => {
  return (
    <div className="my-20 bg-lime-400/10">
      <div className="container w-full  grid grid-cols-1 lg:grid-cols-2 py-20 gap-6 place-items-center">
        <div className="w-full h-[480px]">
          <img
            src={`https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            className="border-4 border-white w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm relative after:absolute after:-translate-y-1/2 after:top-1/2 after:left-full after:w-20 after:h-[2px] after:translate-x-2 after:bg-teal-600 w-fit">
            Our values
          </p>

          <h2 className="text-5xl font-Primary mt-2 font-[700]">
            <span className="bg-gradient-to-r from-pink-500 via-green-500 to-blue-400 text-transparent bg-clip-text">
              Sustainability
            </span>{" "}
            at the Core of Our Projects
          </h2>
          <div className="mt-4">
            <p className="text-lg">
              At Zaaviyan Contracting, we are dedicated to minimizing our
              environmental impact. We actively seek sustainable design and
              construction practices, ensuring that we use eco-friendly
              materials, reduce waste, and incorporate energy-efficient
              solutions wherever possible. By working with environmentally
              conscious suppliers in our projects, we contribute to Dubai`s
              Sustainable Vision while still providing top-quality fit-out
              services.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-5 between w-full">
              <div className="grid grid-cols-[.3fr_1.7fr] bg-lime-200/60 p-3 rounded-xl gap-2">
                <div className="size-10 rounded-full bg-lime-300 flex justify-center items-center">
                  <Avocado
                    className="text-lime-900"
                    size={"24"}
                    weight="fill"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-[500]">Feature 1</h3>
                  <p className="text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[.3fr_1.7fr] bg-lime-200/60 p-3 rounded-xl gap-2">
                <div className="size-10 rounded-full bg-lime-300 flex justify-center items-center">
                  <Avocado
                    className="text-lime-900"
                    size={"24"}
                    weight="fill"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-[500]">Feature 2</h3>
                  <p className="text-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
