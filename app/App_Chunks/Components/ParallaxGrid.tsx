'use client'
import { useRef, useEffect ,useState } from "react";
import { CheckFat } from "@phosphor-icons/react";
import { cn } from "@/app/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
const ParallaxGrid = ({ idx, e }: { idx: number; e: any }) => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]); // Subtle parallax effect
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);
  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        setTextHeight(textRef.current.offsetHeight);
      }
    };

    updateHeight(); // Initial height calculation
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center" key={idx}>
      <div
        ref={textRef}
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
        {e.solutions.map((sol : string, index: number) => (
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
        style={{height:`${textHeight ? textHeight : 0}px`}}
        className={cn(
          "relative overflow-hidden w-full", // Fixed height to keep things aligned
          idx % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
        )}
      >
        <motion.img
          style={{ y, scale: 1.05 }}
          className="w-full h-full object-cover transition-transform duration-300 ease-out"
          src={e.img}
        />
      </div>
    </div>
  );
};
export default ParallaxGrid