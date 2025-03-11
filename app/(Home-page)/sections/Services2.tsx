"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/app/lib/utils";

const Services = () => {
  const viewContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: viewContainer,
    offset: ["start end", "end start"],
  });

  // Subtle parallax effect
  const y = useTransform(scrollYProgress, [0, .8], [-150, 150]); // Less movement

  const services = [
    {
      name: "Interior Design",
      desc: " Our Interior Design & Development services focus on creating aesthetically pleasing, functional spaces that reflect your personal style and business identity. From concept to completion, we ensure a seamless and personalized design experience.",
      img: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Joinery",
      desc: " We offer bespoke joinery solutions, crafting custom woodwork that enhances the functionality and aesthetics of any space. Our team uses the finest materials to create beautiful and durable pieces for your home or business.",
      img: "https://images.unsplash.com/photo-1652272160994-c0796747bda3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Carpentry",
      desc: "Our expert carpentry services specialize in the creation and installation of high-quality wood structures, ensuring precision and craftsmanship in every project. Whether it's custom cabinetry or structural work, we bring your vision to life with care and attention to detail.",
      img: "https://images.unsplash.com/photo-1626081063434-79a2169791b1?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Furniture Crafting",
      desc: "We design and build custom furniture that perfectly complements your space, combining artistry with functionality. From concept to creation, each piece is uniquely crafted to suit your style and requirements.",
      img: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Fit-out & Refurbishments",
      desc: "Our fit-out and refurbishment services breathe new life into your space, transforming it into a more functional and aesthetically pleasing environment. We work efficiently to ensure minimal disruption while delivering high-quality, tailored solutions.",
      img: "https://images.unsplash.com/photo-1639662436912-b15748f43b61?q=80&w=1803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Visual Merchandising & Shop Display",
      desc: " Our visual merchandising and shop display services help create an inviting, engaging retail environment that attracts customers and enhances product visibility. We use innovative design techniques to showcase your products in the most compelling way.",
      img: "https://plus.unsplash.com/premium_photo-1664202526744-516d0dd22932?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Architecture Design",
      desc: "Our architecture design services focus on creating innovative, sustainable, and functional spaces that meet your needs and exceed your expectations. We combine aesthetic appeal with practicality to design structures that are both beautiful and livable.",
      img: "https://plus.unsplash.com/premium_photo-1661335323493-d75cdcd6c275?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Retail Turnkey Solutions",
      desc: "We provide end-to-end retail turnkey solutions that cover everything from design and construction to installation and finishing touches. Our approach ensures your retail space is ready for business, on time and within budget.",
      img: "https://images.unsplash.com/photo-1580554430120-94cfcb3adf25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Home Maintenance",
      desc: "Our home maintenance services keep your property in top condition, offering everything from routine upkeep to emergency repairs. We ensure your home remains safe, functional, and well-maintained year-round.",
      img: "https://plus.unsplash.com/premium_photo-1677234146610-aeed39bd0542?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Space Renovation",
      desc: " Our space renovation services transform your existing space into something fresh and functional, adapting it to your evolving needs. Whether it's a simple upgrade or a full remodel, we create spaces that are both stylish and practical.",
      img: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <motion.div className="w-full mt-20 bg-[#EFEBE9]">
      <div className="container py-20">
        <h1 className="text-6xl font-[500] text-black font-Primary text-center">
          Services <span className="text-slate-600">we provide</span>
        </h1>

        <div
          ref={viewContainer}
          className="grid gap-y-5 grid-cols-1 w-full mt-20"
        >
          {services.map((elem, idx) => {
            return (
              <div
                key={idx}
                className={cn(
                  `grid place-items-center gap-4`,
                  idx % 2 === 0
                    ? "grid-cols-1 lg:grid-cols-[0.7fr_1.3fr]"
                    : "grid-cols-1 lg:grid-cols-[1.3fr_.7fr]"
                )}
              >
                <div
                  className={cn(
                    `w-full`,
                    idx % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"
                  )}
                >
                  <h3 className="text-4xl">{elem.name}</h3>
                  <p>{elem.desc}</p>
                </div>
                <motion.div
                  className={cn(
                    `w-full h-[450px]  overflow-hidden`,
                    idx % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
                  )}
                >
                  <motion.img
                    style={{ y, scale:1.5 }}
                    className="w-full h-full object-cover"
                    src={elem.img}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
