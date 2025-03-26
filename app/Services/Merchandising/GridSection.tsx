import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const merchandiseService = [
    {
      title: "Concept Development & Design",
      description:
        "We develop creative and brand-focused visual merchandising concepts that enhance the overall shopping experience. Our designs seamlessly blend aesthetics with functionality to create an engaging and immersive environment.",
      solutions: [
        "Store Theme Development – Crafting unique store themes that align with your brand identity and customer expectations.",
        "Visual Storytelling Strategies – Using colors, layouts, and displays to narrate your brand’s story effectively.",
        "3D Renderings & Mock-ups – Providing realistic 3D visuals to help you envision the final look of your retail space.",
        "Brand-Focused Display Designs – Tailored displays to showcase your products while reinforcing your brand’s message."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Window Displays & Store Layouts",
      description:
        "First impressions are crucial in retail. Our expertly designed window displays and store layouts ensure that customers are drawn in while easily navigating the space.",
      solutions: [
        "Eye-Catching Window Displays – Striking storefront displays that capture attention and increase foot traffic.",
        "Strategic Product Zoning – Positioning products strategically to guide customers and enhance sales potential.",
        "Traffic Flow Optimization – Ensuring smooth movement and a comfortable shopping experience.",
        "Thematic & Seasonal Display Setups – Designing displays that reflect trends, seasons, and special promotions."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Custom Fixtures & Fittings",
      description:
        "We design and manufacture bespoke fixtures and fittings that enhance product visibility while complementing the store’s theme.",
      solutions: [
        "Custom Shelving & Racks – Tailor-made shelving solutions that enhance product display and accessibility.",
        "Product Display Podiums – Elegant podiums that highlight premium and featured products.",
        "Modular & Movable Units – Flexible and adaptable fixtures that allow for easy rearrangement and customization.",
        "Luxury Finishes & Materials – High-quality materials and finishes that elevate the overall store aesthetics."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1619439677623-6f881c7be58f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Seasonal & Promotional Displays",
      description:
        "We create engaging and dynamic promotional displays that highlight seasonal trends, festive campaigns, and limited-time offers.",
      solutions: [
        "Festive & Holiday Displays – Stunning displays that enhance the shopping experience during peak seasons.",
        "Limited-Time Promotional Setups – Custom displays designed to draw attention to exclusive sales and new product launches.",
        "Pop-Up Store Designs – Creative and functional designs for temporary retail spaces and brand activations.",
        "Interactive Display Solutions – Engaging setups that encourage customer interaction and product exploration."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Digital Integration & Interactive Displays",
      description:
        "We incorporate digital and interactive elements into store designs to create innovative and engaging shopping experiences.",
      solutions: [
        "LED Displays & Digital Signage – High-definition screens that showcase promotions, videos, and brand content.",
        "Interactive Product Showcases – Touchscreen displays that allow customers to explore product features effortlessly.",
        "Smart Lighting Effects – Intelligent lighting solutions that enhance visual appeal and product visibility.",
        "Augmented Reality (AR) Displays – Cutting-edge AR technology that provides an immersive shopping experience."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1599762427626-e11d2df73ed6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Installation & Execution",
      description:
        "Our team ensures flawless execution of your store’s transformation, delivering quality craftsmanship with attention to detail.",
      solutions: [
        "Full Installation Services – End-to-end installation of displays, fixtures, and digital integrations.",
        "On-Site Project Management – Professional supervision to ensure timely and efficient execution.",
        "Quality Control & Finishing – High standards of craftsmanship with precision in every detail.",
        "Post-Installation Support – Ongoing assistance to maintain the visual integrity of your store."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1610128833542-9e1d6c6133cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        {merchandiseService.map((e, idx) => {
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
