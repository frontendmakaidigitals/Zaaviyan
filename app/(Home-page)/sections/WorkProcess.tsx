"use client";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const process = [
    {
      processName: "Consultation",
      img: "https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[1.5fr_0.5fr]",
      order: "order-first",
    },
    {
      processName: "Design",
      img: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[0.5fr_1.5fr] ",
      order: "order-last",
    },
    {
      processName: "Production",
      img: "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[1.5fr_0.5fr]",
      order: "order-first",
    },
    {
      processName: "Installation",
      img: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?q=80",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[0.5fr_1.5fr] ",
      order: "order-last",
    },
    {
      processName: "Handover",
      img: "https://media.licdn.com/dms/image/C4D12AQEkXdFE-RfY0g/article-cover_image-shrink_720_1280/0/1589820515311",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[1.5fr_0.5fr]",
      order: "order-first",
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
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
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
    <div className={cn(`w-full grid gap-6`, elem.grid)}>
      {/* Text Content Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className={cn(
          `w-full h-full flex flex-col justify-between relative border-l-2 border-purple-600 px-4`,
          elem.order
        )}
      >
        <p className="text-6xl font-Primary text-purple-600">0{index + 1}</p>
        <div>
          <h2 className="text-2xl font-Primary font-[600]">
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
        transition={{ duration: 0.6 }}
        className="relative bg-slate-200 overflow-hidden rounded-[2rem] aspect-square w-full"
      >
        <div className="absolute overflow-hidden inset-0 bg-black mask-square rotate-45 rounded-[2rem] scale-[.725] w-full h-full">
          <img
            src={elem.img}
            className="object-cover w-full h-full -rotate-45 scale-[1.4]"
          />
        </div>
      </motion.div>
    </div>
  );
};
