"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const process = [
    {
      processName: "Initial Consultation",
      img: "https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg",
      description:
        "We begin by discussing your vision and requirements to understand the scope of the project and your specific needs. ",
      grid: "grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]",
      order: "order-1 lg:order-first",
    },
    {
      processName: "Design and Planning",
      img: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg",
      description:
        "Our team creates detailed designs and layouts that optimize space, functionality, and aesthetics, tailored to your business or personal requirements.",
      grid: "grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] ",
      order: "order-2 lg:order-last",
    },
    {
      processName: "Project Management",
      img: "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg",
      description:
        "We assign a dedicated project manager to oversee timelines, budget, and coordinate with contractors and suppliers for smooth execution.",
      grid: "grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]",
      order: "order-1 lg:order-first",
    },
    {
      processName: "Construction and Fit-Out",
      img: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?q=80",
      description:
        "Our skilled workforce carry out all construction work, from partitioning to flooring and furniture installation, ensuring the highest quality.",
      grid: "grid-cols-1 lg:grid-cols-[0.5fr_1.5fr] ",
      order: "order-2 lg:order-last",
    },
    {
      processName: "Final Inspection and Handover",
      img: "https://media.licdn.com/dms/image/C4D12AQEkXdFE-RfY0g/article-cover_image-shrink_720_1280/0/1589820515311",
      description:
        "After completing the fit-out, a final inspection is conducted to ensure everything meets your expectations before handing over.",
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
          <p className="mt-1 text-sm">{elem.description}</p>
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
