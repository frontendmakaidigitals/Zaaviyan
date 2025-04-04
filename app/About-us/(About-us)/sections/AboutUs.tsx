"use client";
import React from "react";
import { Avocado } from "@phosphor-icons/react";
const AboutUs = () => {
  return (
    <div className="my-20 bg-slate-400/10">
      <div className="container w-full  grid grid-cols-1 lg:grid-cols-2 py-20 gap-10 place-items-center">
        <div className="w-full h-[300px] md:h-[450px] lg:h-[550px]">
          <img
            src={`https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            className="border-4 border-white w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-4xl font-Primary font-[600] text-center lg:text-start">
            Who We Are
          </h3>

          <p className="mt-6 text-md lg:text-lg text-center lg:text-start">
            Zaaviyan Contracting is a leading fit-out company that excels in
            delivering high-quality, custom-made interiors across residential,
            commercial, and hospitality sectors. With a strong foundation built
            on innovation, creativity, and a commitment to excellence, we have
            earned a reputation for transforming spaces into functional,
            inspiring environments. At Zaaviyan Contracting, we believe that the spaces we work on
            should do more than look good—they should enhance the lives of those
            who use them. That`s why our approach is rooted in a deep
            understanding of design, craftsmanship, and the unique requirements
            of each client.
          </p>

          <p className="mt-3 text-md lg:text-lg text-center lg:text-start">
            Our team of experienced architects, designers, engineers, and
            project managers work collaboratively to bring each project to life
            — from concept to completion. Whether it's residential, commercial,
            hospitality, or retail, we ensure every detail is executed to
            perfection, on time and within budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
