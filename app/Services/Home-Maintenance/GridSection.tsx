import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const merchandiseService = [
    {
      title: "Electrical Maintenance",
      description:
        "We provide reliable electrical maintenance services to ensure the safety, efficiency, and longevity of your electrical systems.",
      solutions: [
        "Repairs & Troubleshooting – Diagnosing and fixing electrical faults, power failures, and circuit issues to restore functionality.",
        "New Installations & Upgrades – Installing modern electrical fixtures, outlets, and energy-efficient lighting solutions.",
        "Wiring & Rewiring – Ensuring safe and efficient electrical connections throughout your home.",
        "Safety Inspections & Compliance – Conducting professional assessments to identify hazards and ensure adherence to safety standards.",
        "Smart Home Integration – Upgrading your home with automation solutions like smart lighting and remote-controlled devices.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1565060054075-27933121c75e?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Plumbing Solutions",
      description:
        "We offer comprehensive plumbing services to keep your water systems in top condition, preventing leaks and ensuring smooth operation.",
      solutions: [
        "Leak Detection & Repairs – Identifying and fixing leaks in pipes, faucets, and water lines to prevent water damage.",
        "Water Heater Services – Installation, repair, and maintenance of water heating systems for optimal performance.",
        "Drain Cleaning & Unblocking – Clearing clogged drains, sinks, and sewer lines for uninterrupted water flow.",
        "Bathroom & Kitchen Plumbing – Repairing and installing sinks, toilets, showers, and faucets.",
        "Pipe Replacement & Maintenance – Upgrading old or damaged pipes to improve water pressure and efficiency.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1591085686350-7986a4aa8c18?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "AC & HVAC Services",
      description:
        "Stay comfortable all year round with our air conditioning and HVAC maintenance services.",
      solutions: [
        "AC Servicing & Repairs – Cleaning filters, gas refilling, and fixing AC units to maintain cooling efficiency.",
        "HVAC System Installation – Setting up and maintaining heating, ventilation, and cooling systems.",
        "Duct Cleaning & Air Quality Control – Removing dust, allergens, and pollutants for a healthier indoor environment.",
        "Thermostat Installation & Calibration – Ensuring accurate temperature control and energy efficiency.",
        "Emergency AC Repairs – Quick response to breakdowns and malfunctions to restore cooling comfort.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1596558450265-e05d3c8df4b0?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Carpentry & Joinery",
      description:
        "Our skilled carpenters provide custom solutions to enhance your home's aesthetics and functionality.",
      solutions: [
        "Furniture Repairs & Assembly – Fixing broken furniture, assembling new pieces, and restoring wooden fittings.",
        "Doors & Windows Maintenance – Repairing, adjusting, and installing doors, windows, and locks for security and durability.",
        "Custom Woodwork & Joinery – Creating bespoke cabinets, wardrobes, and decorative wood panels.",
        "Flooring Repairs & Refinishing – Restoring wooden flooring, parquet, and laminate surfaces.",
        "Shelving & Storage Solutions – Installing custom-built shelves and storage units for efficient space management.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Painting & Wall Repairs",
      description:
        "Give your home a fresh new look with our professional painting and wall restoration services.",
      solutions: [
        "Interior & Exterior Painting – Using high-quality paints for a smooth, durable, and elegant finish.",
        "Wall Crack & Damp Proofing – Repairing structural cracks, sealing leaks, and applying moisture-resistant coatings.",
        "Wallpaper Installation & Removal – Installing stylish wallpapers and safely removing outdated designs.",
        "Texture & Decorative Finishes – Adding accent walls, textured coatings, and decorative paint techniques.",
        "Ceiling & Moulding Touch-Ups – Restoring and repainting ceilings, cornices, and skirting boards.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1614631271744-6922f60b7d88?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "Masonry & Tiling",
      description:
        "Enhance your home’s durability and aesthetics with expert masonry and tiling solutions.",
      solutions: [
        "Tile Replacement & New Installations – Fixing broken tiles or installing new flooring and wall tiles.",
        "Grouting & Sealing Services – Restoring grout lines and sealing surfaces to prevent water damage and mold growth.",
        "Brick & Stonework Maintenance – Repairing outdoor walls, pathways, and decorative stone features.",
        "Bathroom & Kitchen Tiling – Enhancing surfaces with high-quality tiles for durability and easy maintenance.",
        "Driveway & Patio Restoration – Repairing cracks and resurfacing outdoor areas for a polished look.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1615873968403-cd45b5ae7914?q=80&w=3000&auto=format&fit=crop",
    },
    {
      title: "General Handyman Services",
      description:
        "From minor fixes to complete home improvements, our handyman services cover all your maintenance needs.",
      solutions: [
        "Fixture Installations – Mounting shelves, TVs, curtain rods, mirrors, and light fixtures securely.",
        "Minor Home Repairs – Fixing small damages, including loose hinges, doorknobs, and squeaky doors.",
        "Furniture Assembly & Adjustments – Setting up new furniture and making adjustments for perfect alignment.",
        "General Home Improvements – Assisting with DIY projects and enhancing living spaces with small upgrades.",
        "Emergency Repairs & Quick Fixes – Providing immediate solutions for unexpected household issues.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1527549993586-dff825b37782?q=80&w=3000&auto=format&fit=crop",
    },
  ];

  const SplitterFunc = (sol: string) => {
    const [firstPart, rest] = sol.split(/ – | - /, 2); // Split at the first occurrence of '-'
    return (
      <span className="font-bold">
        {firstPart}
        {rest && <span className="!font-[300]"> - {rest}</span>}
      </span>
    );
  };
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"], // Smooth transition
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Subtle parallax effect
  return (
    <div className="mt-10">
      <h2 className="text-center text-4xl lg:text-6xl font-heroFont font-[500]">
        Our Speciality
      </h2>

      <div className="grid grid-cols-1 w-full mt-12">
        {merchandiseService.map((e, idx) => {
          return (
            <div
              className="grid grid-cols-1 lg:grid-cols-2 items-center"
              key={idx}
            >
              <div
                className={cn(
                  `p-10 lg:p-20`,
                  idx % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1",
                  e.class
                )}
              >
                <h3 className="text-2xl lg:text-5xl mb-4 font-Primary font-[600]">
                  {e.title}
                </h3>
                <p>{e.description}</p>
                <h4 className="mt-4 text-xl font-Primary font-[600] mb-4">
                  Our {e.title} Solutions
                </h4>
                {e.solutions.map((sol, index) => (
                  <p key={index} className="mb-2 flex items-start gap-3">
                    <span className="mt-1">
                      <CheckFat className="" />
                    </span>{" "}
                    {SplitterFunc(sol)}
                  </p>
                ))}
              </div>
              <ParallaxImage src={e.img} idx={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridSection;

const ParallaxImage = ({ src, idx }: { src: string; idx: number }) => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]); // Subtle parallax effect

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden w-full h-full", // Fixed height to keep things aligned
        idx % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
      )}
    >
      <motion.img
        style={{ y, scale: 1.05 }}
        className="w-full h-full object-cover transition-transform duration-300 ease-out"
        src={src}
      />
    </div>
  );
};
