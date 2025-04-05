"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/app/globals.css";
import GridSection from "@/app/App_Chunks/Components/GridSection";
import Choose from "./Choose";
import Banner from "@/app/App_Chunks/Components/Banner2";
import PopUpForm from "@/app/App_Chunks/Components/PopUpForm";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const merchandiseService = [
    {
      title: "Concept Development & Design",
      description:
        "A successful retail space starts with a strong concept that aligns with your brand’s identity, values, and target audience. Our team works closely with you to develop a vision that enhances customer engagement and maximizes sales potential.",
      solutions: [
        "Brand Storytelling – Designing spaces that reflect and enhance your brand image, ensuring a cohesive customer experience.",
        "Creative Visualization – Developing mood boards, sketches, and 3D renderings to bring the concept to reality.",
        "Customer Experience Focus – Crafting immersive environments that captivate visitors and enhance brand loyalty.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Space Planning & Layout Optimization",
      description:
        "A well-planned layout is crucial for efficient operations and an enhanced shopping experience. Our expert designers analyze the space to create a functional and aesthetically pleasing environment that encourages customer flow and maximizes retail potential.",
      solutions: [
        "Strategic Floor Plans – Structuring layouts to optimize product visibility, accessibility, and movement.",
        "Traffic Flow Optimization – Designing intuitive pathways that guide customers naturally through the space.",
        "Efficiency & Accessibility – Ensuring ergonomic designs that cater to diverse customer needs and provide ease of navigation.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1630699144339-420f59b4747b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Interior Design & Custom Fit-outs",
      description:
        "We craft customized retail interiors that transform spaces into inviting shopping destinations. Our approach combines creativity with functionality, ensuring your retail store is visually striking while supporting seamless operations.",
      solutions: [
        "Custom Fixtures & Displays – Designing and fabricating tailor-made furniture, shelving, and displays to showcase products effectively.",
        "Lighting & Ambience – Implementing strategic lighting techniques to enhance the atmosphere and highlight key merchandise.",
        "Theme-Based Interiors – Developing aesthetic designs that align with your brand’s personality, whether minimalistic, luxurious, or avant-garde.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Procurement & Material Selection",
      description:
        "We carefully select materials and furnishings that balance durability, aesthetics, and sustainability. Our procurement team ensures cost-effective solutions while maintaining the highest quality standards.",
      solutions: [
        "High-Quality Materials – Choosing premium finishes, textures, and materials for a sophisticated look.",
        "Cost-Efficient Solutions – Providing budget-friendly options without compromising on elegance and longevity.",
        "Vendor Coordination – Managing procurement logistics and coordinating with reliable suppliers to guarantee timely delivery.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1580060372014-711bda378d20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Project Management & Execution",
      description:
        "From planning to execution, we oversee the entire project to ensure smooth implementation and timely completion. Our project managers handle every detail, minimizing disruptions and ensuring that the final output aligns with your vision.",
      solutions: [
        "End-to-End Supervision – Coordinating all phases of the project from design to installation.",
        "Time & Budget Management – Keeping the project on schedule and within budget constraints.",
        "Quality Assurance – Conducting strict inspections at every stage to maintain high standards of craftsmanship.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "MEP & Technical Installations",
      description:
        "The functionality of a retail space depends on efficient mechanical, electrical, and plumbing (MEP) systems. We integrate these technical components seamlessly to create a fully operational and compliant space.",
      solutions: [
        "Electrical & Lighting Systems – Installing energy-efficient lighting and electrical components tailored to your store’s needs.",
        "HVAC & Ventilation – Ensuring a comfortable indoor environment through optimized heating, ventilation, and air conditioning systems.",
        "Safety & Compliance – Adhering to industry regulations and implementing fire safety, security, and electrical safety measures.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Branding & Visual Merchandising",
      description:
        "A well-branded retail space leaves a lasting impression and enhances customer engagement. Our visual merchandising strategies help maximize the impact of your products and improve customer interaction.",
      solutions: [
        "In-Store Branding – Incorporating brand elements such as logos, signage, and themed décor for a cohesive look.",
        "Product Placement Strategies – Strategically positioning merchandise to drive sales and improve shopper experience.",
        "Digital Integration – Integrating digital signage, interactive displays, and technology-driven elements for an engaging shopping environment.",
      ],
      class: "bg-slate-50",
      img: "https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Handover & Post-Completion Support",
      description:
        "We ensure your retail space is fully operational before handing it over, providing continued support for a hassle-free transition. Our team conducts quality checks, final walkthroughs, and offers post-completion assistance to ensure your store operates smoothly from day one.",
      solutions: [
        "Final Inspections & Approvals – Verifying that all installations meet quality and safety standards.",
        "Operational Training – Providing guidance on managing the space efficiently and maintaining its aesthetic appeal.",
        "Ongoing Support – Offering after-sales service, maintenance, and updates to keep your store in prime condition.",
      ],
      class: "bg-[rgb(100,95,89)] text-slate-50",
      img: "https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <main className="">
      <PopUpForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Us"
      />
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
            <h2 className="text-3xl md:text-2xl lg:text-5xl py-2  px-3 lg:pl-0 lg:pr-5 bg-[#F7F7F7]  font-heroFont">
              Seamless{" "}
              <span className="font-secondaryFont">Retail Turnkey</span>{" "}
              Solutions
            </h2>
            <div>
              <p className="md:text-[.8rem] xl:text-lg mt-4 w-full md:max-w-xs lg:max-w-sm xl:max-w-md md:pr-8 lg:pr-10">
                At Zaaviyan, we specialize in providing end-to-end Retail
                Turnkey Solutions, ensuring a stress-free experience for
                businesses looking to establish or revamp their retail spaces.
                With our expertise in interior design and project management, we
                transform retail environments into dynamic, customer-centric
                spaces that enhance brand presence and elevate the shopping
                experience.
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
      <GridSection data={merchandiseService} />
      <Choose />
      <Banner />
    </main>
  );
};

export default Page;
