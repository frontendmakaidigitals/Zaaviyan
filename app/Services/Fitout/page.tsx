"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "./Banner";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fitout = [
    {
      title: "Office Fit-outs",
      description:
        "We understand the importance of a well-designed office that supports both functionality and aesthetic appeal. Whether you need a complete office transformation or a simple refresh, our office fit-out services include:",
      solutions: [
        "Space Planning – Optimizing layout to promote efficient workflows, communication, and comfort.",
        "Partitioning & Wall Treatments – Installing partitions, acoustic solutions, and finishes that align with your vision while maintaining privacy and noise control.",
        "Furniture & Fixtures – Customizing office furniture that matches your brand identity and ensures comfort for employees.",
        "Lighting Design – Integrating innovative lighting solutions that create a productive, energy-efficient work environment.",
        "M&E (Mechanical & Electrical) Systems – Upgrading electrical systems, data cabling, air conditioning, and lighting to meet your operational needs."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Retail Fit-outs",
      description:
        "For retail spaces, we create immersive shopping experiences that reflect your brand and attract customers. Our retail fit-out services include:",
      solutions: [
        "Brand Alignment – Customizing the design and layout to reflect your brand values and customer expectations.",
        "Visual Merchandising – Strategically placing displays, shelves, and racks to maximize product visibility and enhance the shopping experience.",
        "Custom Design Features – Designing bespoke elements such as signage, displays, and counters that make your store stand out.",
        "Lighting & Ambience – Using advanced lighting techniques to highlight products, create a welcoming environment, and set the right tone for your brand.",
        "Compliance & Safety – Ensuring all retail fit-outs comply with local regulations and safety standards."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1584472376859-889e77a8ccac?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Residential Fit-outs",
      description:
        "Transforming homes is at the heart of our residential fit-out services. Whether it’s a single room or an entire property, we offer:",
      solutions: [
        "Interior Design – Working with you to design spaces that reflect your lifestyle, preferences, and needs.",
        "Bespoke Furniture – Creating custom furniture pieces to optimize space and ensure functionality without compromising on style.",
        "Finishing Touches – Providing premium finishes including flooring, wall treatments, and accessories to elevate your home’s design.",
        "Smart Home Solutions – Integrating cutting-edge technology to enhance convenience, energy efficiency, and security.",
        "Renovations & Extensions – Expanding or renovating existing spaces to increase functionality and improve aesthetics."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/flagged/photo-1556438758-872c68902f60?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Hospitality Fit-outs",
      description:
        "For hotels, restaurants, and cafes, we create environments that make a lasting impression on guests. Our hospitality fit-out services cover:",
      solutions: [
        "Concept Development – Collaborating with you to create a design concept that aligns with your brand and guest expectations.",
        "Interior Design – Designing functional and stylish layouts for guest rooms, dining areas, lounges, and recreational spaces.",
        "Custom Furniture & Fixtures – Designing and sourcing high-quality furniture, fittings, and finishes that complement your theme and brand.",
        "Lighting & Ambience – Installing tailored lighting schemes that create the desired mood and atmosphere throughout the venue.",
        "Sustainability – Incorporating sustainable materials and energy-efficient solutions to reduce environmental impact."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Property Renovations & Refurbishments",
      description:
        "Revamping your property to reflect modern trends and improve functionality is a key part of our refurbishment services. We offer:",
      solutions: [
        "Complete Property Overhaul – Updating the interior and exterior of buildings to improve aesthetic appeal and market value.",
        "Structural Work – Undertaking essential structural improvements, including wall alterations, roofing, and foundation enhancements.",
        "Restoration & Preservation – Restoring historical buildings while maintaining their unique characteristics and charm.",
        "Interior Upgrades – Refurbishing bathrooms, kitchens, and living spaces with modern finishes, materials, and fittings.",
        "Sustainable Solutions – Using eco-friendly materials and practices to minimize environmental impact and increase energy efficiency."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Space Planning & Design",
      description:
        "Maximize the potential of your space with our expert space planning services. We work closely with clients to ensure that every square foot is utilized effectively, from layout design to storage solutions.",
      solutions: [
        "3D Visualizations & Renderings – Offering detailed visual representations to help you better understand how your space will look and function after the fit-out.",
        "Optimized Layouts – Designing layouts that support your business goals, comfort, and convenience while optimizing the flow of people and goods.",
        "Storage Solutions – Creating smart storage options that keep spaces organized and functional.",
        "Accessibility & Ergonomics – Ensuring the design accommodates all users, promoting comfort and accessibility for every individual."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1625585598750-3535fe40efb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Mechanical & Electrical Systems (M&E)",
      description:
        "Efficient M&E systems are essential to the smooth operation of any building. Our M&E services include:",
      solutions: [
        "Electrical Installations – Upgrading or installing lighting, power systems, and data cabling tailored to your needs.",
        "HVAC Systems – Installing and maintaining heating, ventilation, and air conditioning systems to ensure a comfortable indoor climate.",
        "Plumbing – Handling plumbing installations, upgrades, and maintenance for bathrooms, kitchens, and other facilities.",
        "Energy Efficiency – Implementing energy-saving solutions such as LED lighting, energy-efficient HVAC systems, and smart building technology."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1608574839637-2f7d0290d01d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  return (
    <main className="">
      <div className="relative overflow-hidden">
        <div className=" hidden md:block md:w-[350px] lg:w-[400px] xl:w-[500px] aspect-[3/2] absolute right-0 -z-10 bottom-0 bg-slate-100">
          <motion.img
            animate={{ scale: [1.25, 1], opacity: [0, 1] }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            src={
              "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-full max-w-4xl -z-20 bg-gradient-to-b from-[rgba(100,95,89,.4)] from-[30%] to-[#F7F7F7] to-[70%] absolute right-0 top-0 " />
        <div className="grid h-[600px] mt-32 md:mt-0 lg:h-[730px] relative container  place-items-center grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="h-full left-0 absolute w-full md:max-w-md lg:max-w-xl xl:max-w-auto container flex flex-col items-start justify-center">
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2  px-5 lg:pl-0 lg:pr-5 bg-[#F7F7F7]  font-heroFont">
              Precision{" "}
              <span className="font-secondaryFont">
                Fitouts & Refurbishments
              </span>{" "}
              for Elevated Spaces
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At Zaaviyan, we offer comprehensive fit-out and refurbishment
                solutions designed to meet the diverse needs of our clients. Our
                services are focused on delivering innovative, high-quality
                results with a commitment to precision and customer
                satisfaction.
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="relative mt-5 h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group"
              >
                <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#F59E0B] via-[#D97706] to-[#92400E]">
                  <div className="absolute inset-0 bg-[#7C2D12] rounded-lg opacity-90" />
                </div>
                <div className="absolute inset-[2px] bg-[#7C2D12] rounded-lg opacity-95" />
                <div className="absolute inset-[2px] bg-gradient-to-r from-[#7C2D12] via-[#B45309] to-[#7C2D12] rounded-lg opacity-90" />
                <div className="absolute inset-[2px] bg-gradient-to-b from-[#F59E0B]/40 via-[#B45309] to-[#92400E]/30 rounded-lg opacity-80" />
                <div className="absolute inset-[2px] bg-gradient-to-br from-[#FBBF24]/10 via-[#B45309] to-[#7C2D12]/50 rounded-lg" />
                <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(251,191,36,0.15)] rounded-lg" />
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-lg font-normal bg-gradient-to-b from-[#FFEDD5] to-[#FDE68A] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(251,191,36,0.4)] tracking-tighter">
                    Contact us
                  </span>
                </div>
                <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#7C2D12]/20 via-[#FBBF24]/10 to-[#7C2D12]/20 group-hover:opacity-100 rounded-lg" />
              </button>
            </div>
          </div>

          <div className="w-full h-full flex items-center absolute max-w-xs md:max-w-md lg:max-w-xl xl:max-w-3xl bottom-[211px] md:top-0 right-0 md:right-8 -z-10">
            <motion.img
              src={
                "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              animate={{ scale: [1.25, 1], opacity: [0, 1] }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </div>
        </div>
      </div>
      <GridSection data={fitout} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
