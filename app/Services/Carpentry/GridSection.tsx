import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const carpentry = [
    {
      title: "Custom Furniture",
      description:
        "Our custom furniture solutions bring style, comfort, and functionality to your home or office. Each piece is carefully crafted to match your preferences, ensuring a unique touch to your interiors.",
      solutions: [
        "Personalized Designs – Bespoke furniture tailored to your style and space.",
        "Furniture Variety – Handcrafted dining tables, coffee tables, bed frames, office desks, and more.",
        "Quality Materials – Premium quality wood with superior finishes.",
        "Design Options – Contemporary, rustic, and traditional designs available.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Joinery & Woodwork",
      description:
        "We offer expert joinery services that enhance the aesthetics and structural integrity of your space. Our precision woodwork ensures durability and timeless beauty.",
      solutions: [
        "Doors & Windows – Custom-built wooden doors and window frames.",
        "Staircases & Partitions – Elegant staircases and wooden partitioning solutions.",
        "Decorative Moldings – Intricate wood paneling and decorative moldings.",
        "Architectural Woodwork – Expert craftsmanship for unique designs.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1586509569974-3af5bbdc4e53?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Interior Wood Solutions",
      description:
        "Transform your interiors with exquisite wooden elements that add warmth and sophistication to any space. From flooring to wall paneling, we provide elegant solutions to elevate your ambiance.",
      solutions: [
        "Flooring Solutions – Wooden flooring options, including solid and engineered wood.",
        "Ceilings & Walls – Elegant wood paneling and ceiling designs.",
        "Accent Features – Stylish wooden accents to enhance aesthetics.",
        "Customization – Woodwork tailored to your specific interior design.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1613685303213-1f646ca61306?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Cabinetry & Storage Solutions",
      description:
        "We design and build custom storage solutions that maximize space while complementing the aesthetics of your interiors. Our cabinetry is functional, stylish, and built to last.",
      solutions: [
        "Wardrobes & Closets – Custom-built wardrobes for organized storage.",
        "Kitchen & Vanity Units – High-quality kitchen cabinets and bathroom vanities.",
        "Smart Storage Designs – Space-saving and multi-functional storage solutions.",
        "Finishing Options – A variety of materials and styles to match your interiors.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1628843201283-2ca32147ad3e?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Outdoor Woodwork",
      description:
        "Enhance your outdoor spaces with our expertly crafted wooden structures. Our durable outdoor woodwork is designed to withstand the elements while adding a touch of elegance.",
      solutions: [
        "Pergolas & Decks – Beautifully crafted pergolas and decking solutions.",
        "Gazebos & Fencing – Custom-designed gazebos and wooden fences.",
        "Outdoor Furniture – Weather-resistant garden furniture and seating solutions.",
        "Custom Designs – Outdoor woodwork built to match your landscaping.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1738293728561-d7057a3ad74f?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Wood Restoration & Repair",
      description:
        "Give your old or damaged woodwork a new lease on life with our professional restoration services. We ensure that every piece retains its beauty and integrity.",
      solutions: [
        "Furniture Restoration – Repair and refurbishing of antique and wooden furniture.",
        "Door & Fixture Repair – Fixing and restoring wooden doors and interior fixtures.",
        "Polishing & Staining – Expert refinishing techniques for a fresh look.",
        "Authenticity Preservation – Restoring woodwork while maintaining its original charm.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1580403444499-062473f715d5?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Commercial Woodwork Solutions",
      description:
        "Our commercial woodwork services are designed to create functional and visually appealing spaces that reflect your brand identity. From offices to retail spaces, we deliver outstanding results.",
      solutions: [
        "Office Interiors – Custom-built furniture and workstations for professional spaces.",
        "Retail Fixtures – Stylish and functional shelving, counters, and display units.",
        "Hospitality Woodwork – Bespoke solutions for hotels, restaurants, and lounges.",
        "Brand-Aligned Designs – Unique wood installations that enhance business identity.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1560846389-956694677531?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        {carpentry.map((e, idx) => {
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
