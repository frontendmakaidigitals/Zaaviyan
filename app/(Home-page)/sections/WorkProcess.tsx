import { cn } from "@/app/lib/utils";
import React from "react";

const WorkProcess = () => {
  const process = [
    {
      processName: "Consultation",
      img: "https://images.pexels.com/photos/8297652/pexels-photo-8297652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[1.5fr_0.5fr]",
      order: "order-first",
    },
    {
      processName: "Design",
      img: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[0.5fr_1.5fr] ",
      order: "order-last",
    },
    {
      processName: "Production",
      img: "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[1.5fr_0.5fr]",
      order: "order-first",
    },
    {
      processName: "Installation",
      img: "https://images.unsplash.com/photo-1545296664-39db56ad95bd?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Lorem Ipsum generator sadf dsafnaso;n asdfnasd aosdn d fdfs ;sdf",
      grid: "grid-cols-[0.5fr_1.5fr] ",
      order: "order-last",
    },
    {
      processName: "Handover",
      img: "https://media.licdn.com/dms/image/C4D12AQEkXdFE-RfY0g/article-cover_image-shrink_720_1280/0/1589820515311?e=2147483647&v=beta&t=1VeIZQ_33HOjCFtd_xU7WzTTGu9_XDfhfrdEmgEzZF0",
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
            <Process elem={elem} index={idx} key={idx} />
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
      <div
        className={cn(
          `w-full h-full flex flex-col justify-between rlative border-l-2 border-purple-600 px-4`,
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
      </div>
      <div className="relative bg-slate-200 overflow-hidden rounded-[2rem] aspect-square w-full">
        <div className="absolute overflow-hidden inset-0 bg-black mask-square rotate-45 rounded-[2rem] scale-[.725] w-full h-full">
          <img
            src={elem.img}
            className="object-cover w-full h-full -rotate-45 scale-[1.4]"
          />
        </div>
      </div>
    </div>
  );
};
