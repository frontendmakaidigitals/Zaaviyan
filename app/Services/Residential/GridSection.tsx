import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const interiorDesignServices = [
    {
      title: "Residential Interior Design",
      description:
        "Your home should be a perfect blend of comfort, style, and personal expression. At Zaaviyan, we specialize in creating custom interiors that reflect your lifestyle and enhance your daily living experience.",
      solutions: [
        "Luxury Villas & Apartments – We design high-end residential spaces with exquisite materials, unique design elements, and a refined aesthetic.",
        "Personalized Home Styling – Every home is different, and our approach ensures that your interiors reflect your personal taste, whether modern, classic, contemporary, or minimalist.",
        "Living Room & Lounge Areas – We curate elegant living spaces that encourage relaxation and social interactions, featuring high-quality furniture, decorative lighting, and artistic elements.",
        "Bedroom Design – Tailoring bedroom interiors to be tranquil retreats, with soft textures, comfortable furniture, and lighting that creates the perfect ambiance.",
        "Kitchen & Bathroom Interiors – Functional yet stylish designs that incorporate modern layouts, high-end finishes, and space-saving solutions.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=3192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Commercial Interior Design",
      description:
        "A well-designed commercial space enhances brand identity, improves efficiency, and creates a lasting impression. Zaaviyan specializes in commercial interiors that are both practical and visually appealing.",
      solutions: [
        "Corporate Office Interiors – We create workspaces that boost productivity and reflect corporate identity through ergonomic furniture, optimized layouts, and brand-inspired aesthetics.",
        "Retail & Showroom Design – Designing interactive and visually engaging spaces that attract customers, highlight products, and improve sales.",
        "Restaurant & Hospitality Interiors – We craft warm, inviting, and stylish interiors for restaurants, cafés, and hotels, ensuring an unforgettable customer experience.",
        "Co-Working Spaces & Startups – Developing flexible, modern, and collaborative work environments that inspire creativity and efficiency.",
      ],
      class: "bg-slate-950 text-slate-50",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Interior Space Planning & Layout Design",
      description:
        "A well-planned space is essential for both functionality and aesthetics. Our space planning services ensure that every square foot is optimized for comfort, efficiency, and purpose.",
      solutions: [
        "Efficient Floor Plans – We create structured layouts that enhance movement and functionality while maintaining visual appeal.",
        "Zoning & Traffic Flow Management – Careful space distribution to ensure easy navigation and smooth interaction within the environment.",
        "Furniture Arrangement & Placement – Strategically positioning furniture to improve comfort and usability without overcrowding the space.",
        "Multifunctional Space Design – Solutions for maximizing compact areas, such as convertible furniture and flexible layouts.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1524190952534-79b1f7d6ad5c?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Concept Development & Visualization",
      description:
        "Before beginning any project, it’s crucial to have a clear vision. We bring ideas to life with detailed concept planning and visual representation, allowing clients to experience the final design before execution.",
      solutions: [
        "Mood Boards & Theme Creation – Crafting a cohesive aesthetic through curated color schemes, textures, and material samples.",
        "3D Renderings & Virtual Walkthroughs – Providing lifelike digital previews of interior spaces, ensuring clarity and confidence before implementation.",
        "Material & Finish Selection – Carefully choosing elements that enhance beauty, durability, and practicality.",
        "Lighting & Color Consultation – Expert guidance on selecting the right tones, lighting styles, and placements for a harmonious environment.",
      ],
      class: "bg-slate-950 text-slate-50",
      img: "https://images.unsplash.com/photo-1635054961796-be9cd02f8797?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Custom Interior Elements",
      description:
        "Every interior should have unique design elements that reflect personality and purpose. Our custom interior solutions allow for complete personalization.",
      solutions: [
        "Bespoke Furniture & Upholstery – Designing and manufacturing one-of-a-kind furniture pieces that complement the space.",
        "Custom Decorative Walls & Paneling – Feature walls, artistic installations, and innovative paneling to create focal points.",
        "Luxury Fixtures & Fittings – Handpicked lighting, hardware, and design accents that elevate the overall aesthetic.",
        "Personalized Home & Office Decor – Selection of exclusive artwork, textiles, and decorative pieces for a refined finishing touch.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Lighting & Ambience Design",
      description:
        "Lighting is a fundamental aspect of interior design, setting the mood and enhancing the space’s functionality.",
      solutions: [
        "Ambient & Task Lighting Solutions – Creating the perfect balance between general, accent, and task lighting.",
        "Chandeliers & Designer Fixtures – Statement lighting pieces that add elegance and character.",
        "Smart Lighting Integration – Automated solutions for dynamic lighting control and energy efficiency.",
        "Natural & Artificial Light Optimization – Using windows, mirrors, and artificial lighting to enhance brightness and create a welcoming atmosphere.",
      ],
      class: "bg-slate-950 text-slate-50",
      img: "https://images.unsplash.com/photo-1527853300662-dfbc10ae8e1e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sustainable & Smart Interiors",
      description:
        "We prioritize eco-conscious and technologically advanced design solutions that promote sustainability and modern living.",
      solutions: [
        "Eco-Friendly Materials & Finishes – Sustainable, non-toxic, and durable materials for environmentally responsible interiors.",
        "Energy-Efficient Design Strategies – Incorporating passive cooling, smart windows, and energy-efficient appliances.",
        "Biophilic Design Elements – Bringing nature indoors with living walls, natural textures, and organic forms.",
        "Smart Home & Office Automation – Integrating technology for enhanced security, climate control, and convenience.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1582345486418-0eeaeecb5dda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

  return (
    <div className="mt-32">
      <h2 className="text-center text-6xl font-heroFont font-[500]">
        Our Speciality
      </h2>

      <div className="grid grid-cols-1 w-full mt-12">
        {interiorDesignServices.map((e, idx) => {
          const imgRef = useRef(null);
          const { scrollYProgress } = useScroll({
            target: imgRef,
            offset: ["start end", "end start"], // Smooth transition
          });

          const y = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Subtle parallax effect

          return (
            <div className="grid grid-cols-2 items-center" key={idx}>
              <div
                className={cn(
                  `p-20`,
                  idx % 2 === 0 ? "order-1" : "order-2",
                  e.class
                )}
              >
                <h3 className="text-5xl mb-4 font-Primary font-[600]">
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
              <div
                ref={imgRef}
                className={cn(
                  "relative overflow-hidden w-full h-full", // Fixed height to keep things aligned
                  idx % 2 === 0 ? "order-2" : "order-1"
                )}
              >
                <motion.img
                  style={{ y, scale: 1.1 }} // Smooth effect without image spilling out
                  className="w-full h-full object-cover"
                  src={e.img}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridSection;
