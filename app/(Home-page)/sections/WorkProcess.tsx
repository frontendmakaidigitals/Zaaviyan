"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const process = [
    {
      processName: "Initial Consultation",
      img: "https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg",
      description:
        "We begin by sitting down with you to gain a deep understanding of your goals, preferences, and any specific requirements for the project. This phase involves discussing your vision, whether it’s for a commercial or residential space, and utilizing practical solutions that best suit your needs. Our goal is to ensure we capture every detail of your expectations to provide a clear direction moving forward.",
      grid: "grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]",
      order: "order-1 lg:order-first",
    },
    {
      processName: "Design and Planning",
      img: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg",
      description:
        "Our design team works closely with you to craft detailed blueprints and layouts that focus on optimizing space usage, functionality, and visual appeal. We take into consideration both your aesthetic preferences and the practical demands of the space, ensuring that the design is both beautiful and functional. Every decision, from material selection to arrangement, is made to create an environment that enhances the user experience and supports your business or personal goals.",
      grid: "grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] ",
      order: "order-2 lg:order-last",
    },
    {
      processName: "Project Management",
      img: "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg",
      description:
        "A dedicated project manager is assigned to your project to ensure everything runs smoothly from start to finish. They’ll oversee the timeline, manage the budget, and coordinate with contractors, suppliers, and other stakeholders to ensure deadlines are met and any challenges are swiftly addressed. Our project manager acts as your main point of contact, keeping you informed and ensuring the entire process stays on track.",
      grid: "grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]",
      order: "order-1 lg:order-first",
    },
    {
      processName: "Construction and Fit-Out",
      img: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?q=80",
      description:
        "Our expert team of craftsmen will execute all construction tasks, from partitioning and structural modifications to flooring installation and custom furniture assembly. We prioritize quality at every step, using the best materials and techniques to ensure durability and an impeccable finish. The attention to detail ensures that the space is not only functional but also designed to the highest standards.",
      grid: "grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] ",
      order: "order-2 lg:order-last",
    },
    {
      processName: "Final Inspection and Handover",
      img: "https://media.licdn.com/dms/image/C4D12AQEkXdFE-RfY0g/article-cover_image-shrink_720_1280/0/1589820515311",
      description:
        "Once the fit-out is complete, a thorough final inspection is conducted to ensure every detail aligns with your specifications and expectations. Any final adjustments or touch-ups are made at this stage to perfect the space. After this inspection, we hand over the space to you, confident that it’s fully functional, aesthetically pleasing, and ready for immediate use.",
      grid: "grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]",
      order: "order-1 lg:order-first",
    },
  ];

  return (
    <div className="my-12">
      <div className="container">
        <h1 className="text-6xl font-[500] font-Primary text-center">
          Our <span className="text-slate-500">Work Process</span>
        </h1>
        <div className="grid grid-cols-1 gap-y-20 mt-20">
          {process.map((elem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay:idx * .1 }}
            >
              <Process elem={elem} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;

interface ProcessProps {
  processName: string;
  img: string;
  description: string;
  grid: string;
  order: string;
}

const Process = ({ elem, index }: { elem: ProcessProps; index: number }) => {
  return (
    <div className={cn(`w-full relative  grid gap-6`, elem.grid)}> 
     

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
        className={cn(
          `w-full h-full flex flex-col justify-between relative border-l-2 border-[#ff7e3d] px-4`,
          elem.order
        )}
      >
        <p className="text-6xl font-[500] text-[#FFB38E]">0{index + 1}</p>
        <div>
          <h2 className="text-xl xl:text-3xl font-Primary font-[600]">
            {elem.processName}
          </h2>
          <p className="mt-1 text-md">{elem.description}</p>
        </div>
      </motion.div>

      {/* Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease:[0, 0, .2, 1] }}
        className="relative bg-slate-200 overflow-hidden rounded-[2rem] aspect-square w-full"
      >
        <motion.div
          initial={{ rotate: 0, scale: 0.725 }}
          whileInView={{ rotate: "45deg", scale: 0.725 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease:[0, 0, .2, 1] }}
          className="absolute overflow-hidden inset-0 bg-black mask-square  rounded-[2rem] w-full h-full"
        >
          <motion.img
            initial={{ rotate: 0, scale: 1.4 }}
            whileInView={{ rotate: "-45deg", scale: 1.4 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease:[0, 0, .2, 1] }}
            src={elem.img}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
