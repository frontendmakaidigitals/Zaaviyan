import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const joineryServices = [
    {
      title: "Bespoke Furniture & Cabinetry",
      description:
        "Custom-crafted furniture is the key to achieving a cohesive and well-structured interior. Our bespoke furniture and cabinetry solutions are designed to meet both aesthetic and practical needs.",
      solutions: [
        "Luxury Wardrobes & Closets – Fitted and walk-in wardrobes with smart storage, custom shelving, built-in lighting, and soft-close mechanisms.",
        "Custom Kitchen Cabinets – Precision-crafted cabinetry with finishes ranging from high-gloss modern to classic wooden textures.",
        "Bathroom Vanities & Storage Units – Moisture-resistant vanity units with integrated storage, sleek countertops, and high-end hardware.",
        "Media & Entertainment Units – Custom-designed TV units, bookshelves, and storage cabinets that blend seamlessly into your home's design."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3192&auto=format&fit=crop"
    },
    {
      title: "Custom Wood Paneling & Wall Treatments",
      description:
        "Wood paneling adds warmth, character, and sophistication to any interior space. Our tailor-made paneling solutions elevate both traditional and contemporary interiors.",
      solutions: [
        "Decorative Wall Panels – Premium wood panels with intricate carvings, geometric designs, and 3D effects.",
        "Ceiling Paneling & Beams – Rustic wooden beams or sleek modern panels that add depth and texture.",
        "Wainscoting & Molding – Classic and modern wainscoting options for sophistication and wall protection.",
        "Acoustic Wood Paneling – Sound-insulating wood panels perfect for offices, studios, and home theaters."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop"
    },
    {
      title: "Wooden Doors & Partitioning Solutions",
      description:
        "Doors and partitions define spaces, improve privacy, and enhance interior style. We craft high-quality, custom wooden doors and partitions to suit any design scheme.",
      solutions: [
        "Interior & Exterior Doors – Solid wood and glass-paneled doors with unique patterns and engravings.",
        "Sliding & Folding Doors – Space-saving solutions with smooth mechanisms for modern interiors.",
        "Wooden Room Dividers & Partitions – Custom dividers for privacy while maintaining an airy feel.",
        "Decorative Carved Doors – Handcrafted doors with intricate detailing inspired by Arabic, Moroccan, and contemporary designs."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1524190952534-79b1f7d6ad5c?q=80&w=2880&auto=format&fit=crop"
    },
    {
      title: "Reception Counters & Commercial Joinery",
      description:
        "A well-designed commercial space creates a lasting impression. Our custom joinery solutions enhance brand identity while ensuring practicality.",
      solutions: [
        "Reception & Lobby Counters – Elegant and functional reception desks tailored to brand aesthetics.",
        "Retail Display Units & Shelving – Custom wooden shelving, racks, and display stands for organized product showcasing.",
        "Office Desks & Workstations – Ergonomic and stylish office furniture designed for productivity.",
        "Restaurant & Bar Joinery – Custom bar counters, seating booths, wall paneling, and storage units."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1635054961796-be9cd02f8797?q=80&w=3067&auto=format&fit=crop"
    },
    {
      title: "Staircases & Railings",
      description:
        "A beautifully crafted staircase can be a statement piece. Our custom staircases combine structural integrity, functionality, and elegance.",
      solutions: [
        "Traditional & Modern Staircases – Grand staircases, floating designs, and contemporary geometric styles.",
        "Handrails & Balustrades – Premium wood, metal, or glass handrails ensuring safety and aesthetics.",
        "Under-Stair Storage Solutions – Smartly designed drawers, cabinets, or shelving for maximizing space."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "Outdoor & Garden Joinery",
      description:
        "Outdoor wooden structures add warmth, charm, and functionality. Our custom solutions withstand weather conditions while maintaining beauty.",
      solutions: [
        "Pergolas & Gazebos – Custom wooden structures for gardens, poolside areas, and patios.",
        "Decking & Flooring – Durable wooden decking solutions resistant to weathering.",
        "Outdoor Seating & Benches – Stylish, comfortable wooden furniture for gardens and public areas.",
        "Fencing & Privacy Screens – Decorative wooden fences that offer both security and aesthetic appeal."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1582345486418-0eeaeecb5dda?q=80&w=2940&auto=format&fit=crop"
    }
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
        {joineryServices.map((e, idx) => {
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center" key={idx}>
              <div
                className={cn(
                  `p-10 lg:p-20`,
                  idx % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1",                  e.class
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
