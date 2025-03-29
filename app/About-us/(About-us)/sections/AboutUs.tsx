"use client";
import React from "react";
import { Avocado } from "@phosphor-icons/react";
const AboutUs = () => {
  return (
    <div className="my-20 bg-slate-400/10">
      <div className="container w-full  grid grid-cols-1 lg:grid-cols-2 py-20 gap-10 place-items-center">
        <div className="w-full h-[530px]">
          <img
            src={`https://images.unsplash.com/photo-1462826303086-329426d1aef5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            className="border-4 border-white w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-4xl font-Primary font-[600]">Who We Are</h3>

          <p className="mt-6 text-lg">
            Welcome to Settle, where creativity and craftsmanship meet to
            redefine spaces and elevate experiences. We are more than just
            architects and designers; we are storytellers who breathe life into
            spaces, fulfilling each project with a unique narrative. Our team of
            seasoned architects and design experts brings together a blend of
            innovation, expertise, and a deep understanding of our clients’
            aspirations.
          </p>

          <p className="mt-5 text-lg">
            Our mission is to leave lasting impressions that mirror our client’s
            unique desires, all while improving sustainability and innovation.
            We also aim to establish fresh benchmarks in architectural and
            interior design, converting spaces into dynamic and inspirational
            settings. We are visionary about becoming a globally acclaimed
            architectural and interior design company, celebrated for our
            unwavering dedication to artistic excellence and lifestyle
            experiences. Our vision is to shape not just spaces but experiences
            while harmonizing luxury and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
