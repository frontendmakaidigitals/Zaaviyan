import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
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
      img: "https://images.unsplash.com/photo-1589656966893-3a1df3f52e3d?q=80&w=2880&auto=format&fit=crop"
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
      img: "https://images.unsplash.com/photo-1600349782489-45ac141f4e35?q=80&w=3000&auto=format&fit=crop"
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
      img: "https://images.unsplash.com/photo-1615873968405-9f78294a08ce?q=80&w=3000&auto=format&fit=crop"
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
      img: "https://images.unsplash.com/photo-1533307101234-91c6c2ae3f71?q=80&w=3000&auto=format&fit=crop"
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
      img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2880&auto=format&fit=crop"
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
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3000&auto=format&fit=crop"
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
      img: "https://images.unsplash.com/photo-1594542971113-b51c39a84a2b?q=80&w=2880&auto=format&fit=crop"
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
        {fitout.map((e, idx) => {
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
