import React, { useRef } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const GridSection = () => {
  const merchandiseService = [
    {
      title: "Concept Development & Design",
      description:
        "A successful retail space starts with a strong concept that aligns with your brand’s identity, values, and target audience. Our team works closely with you to develop a vision that enhances customer engagement and maximizes sales potential.",
      solutions: [
        "Brand Storytelling – Designing spaces that reflect and enhance your brand image, ensuring a cohesive customer experience.",
        "Creative Visualization – Developing mood boards, sketches, and 3D renderings to bring the concept to reality.",
        "Customer Experience Focus – Crafting immersive environments that captivate visitors and enhance brand loyalty."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Space Planning & Layout Optimization",
      description:
        "A well-planned layout is crucial for efficient operations and an enhanced shopping experience. Our expert designers analyze the space to create a functional and aesthetically pleasing environment that encourages customer flow and maximizes retail potential.",
      solutions: [
        "Strategic Floor Plans – Structuring layouts to optimize product visibility, accessibility, and movement.",
        "Traffic Flow Optimization – Designing intuitive pathways that guide customers naturally through the space.",
        "Efficiency & Accessibility – Ensuring ergonomic designs that cater to diverse customer needs and provide ease of navigation."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1630699144339-420f59b4747b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Interior Design & Custom Fit-outs",
      description:
        "We craft customized retail interiors that transform spaces into inviting shopping destinations. Our approach combines creativity with functionality, ensuring your retail store is visually striking while supporting seamless operations.",
      solutions: [
        "Custom Fixtures & Displays – Designing and fabricating tailor-made furniture, shelving, and displays to showcase products effectively.",
        "Lighting & Ambience – Implementing strategic lighting techniques to enhance the atmosphere and highlight key merchandise.",
        "Theme-Based Interiors – Developing aesthetic designs that align with your brand’s personality, whether minimalistic, luxurious, or avant-garde."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Procurement & Material Selection",
      description:
        "We carefully select materials and furnishings that balance durability, aesthetics, and sustainability. Our procurement team ensures cost-effective solutions while maintaining the highest quality standards.",
      solutions: [
        "High-Quality Materials – Choosing premium finishes, textures, and materials for a sophisticated look.",
        "Cost-Efficient Solutions – Providing budget-friendly options without compromising on elegance and longevity.",
        "Vendor Coordination – Managing procurement logistics and coordinating with reliable suppliers to guarantee timely delivery."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1580060372014-711bda378d20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Project Management & Execution",
      description:
        "From planning to execution, we oversee the entire project to ensure smooth implementation and timely completion. Our project managers handle every detail, minimizing disruptions and ensuring that the final output aligns with your vision.",
      solutions: [
        "End-to-End Supervision – Coordinating all phases of the project from design to installation.",
        "Time & Budget Management – Keeping the project on schedule and within budget constraints.",
        "Quality Assurance – Conducting strict inspections at every stage to maintain high standards of craftsmanship."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "MEP & Technical Installations",
      description:
        "The functionality of a retail space depends on efficient mechanical, electrical, and plumbing (MEP) systems. We integrate these technical components seamlessly to create a fully operational and compliant space.",
      solutions: [
        "Electrical & Lighting Systems – Installing energy-efficient lighting and electrical components tailored to your store’s needs.",
        "HVAC & Ventilation – Ensuring a comfortable indoor environment through optimized heating, ventilation, and air conditioning systems.",
        "Safety & Compliance – Adhering to industry regulations and implementing fire safety, security, and electrical safety measures."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Branding & Visual Merchandising",
      description:
        "A well-branded retail space leaves a lasting impression and enhances customer engagement. Our visual merchandising strategies help maximize the impact of your products and improve customer interaction.",
      solutions: [
        "In-Store Branding – Incorporating brand elements such as logos, signage, and themed décor for a cohesive look.",
        "Product Placement Strategies – Strategically positioning merchandise to drive sales and improve shopper experience.",
        "Digital Integration – Integrating digital signage, interactive displays, and technology-driven elements for an engaging shopping environment."
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Handover & Post-Completion Support",
      description:
        "We ensure your retail space is fully operational before handing it over, providing continued support for a hassle-free transition. Our team conducts quality checks, final walkthroughs, and offers post-completion assistance to ensure your store operates smoothly from day one.",
      solutions: [
        "Final Inspections & Approvals – Verifying that all installations meet quality and safety standards.",
        "Operational Training – Providing guidance on managing the space efficiently and maintaining its aesthetic appeal.",
        "Ongoing Support – Offering after-sales service, maintenance, and updates to keep your store in prime condition."
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
