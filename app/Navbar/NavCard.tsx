"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anime";
import { useLenis } from "lenis/react";
import "./menuCard.css";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";
export default function NavCard({ setServiceClicked, serviceClicked }) {
  const [isHoverd, setIsHoverd] = useState<number | null>(null);

  const services = [
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
    { title: "Joinery", href: "/" },
  ];
  const lenis = useLenis();
  useEffect(() => {
    if (serviceClicked) {
      lenis?.stop(); // Stop Lenis smooth scrolling
      document.body.style.overflow = "auto"; // Enable native scrolling
    } else {
      lenis?.start(); // Resume Lenis smooth scrolling
    }
  }, [serviceClicked]);
  return (
    <>
      <div className={`nav z-[99999]`}>
        {serviceClicked ? (
          <div className={`body overflow-y-auto`}>
            {services.map((link, i) => {
              const { title, href } = link;
              return (
                <div
                  key={`b_${i}`}
                  data-lenis-prevent="true"
                  className={`linkContainer `}
                >
                  <motion.div
                    onMouseEnter={() => setIsHoverd(i)}
                    onMouseLeave={() => setIsHoverd(null)}
                    custom={i}
                    
                  >
                    <AnimatePresence mode="wait">
                      <Link
                        href={href}
                        className="flex items-center gap-2 overflow-hidden"
                      >
                        {title}
                      </Link>
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`body overflow-hidden`}>
            {links.map((link, i) => {
              const { title, href } = link;
              return (
                <div key={`b_${i}`} className={`linkContainer `}>
                  <motion.div
                    onMouseEnter={() => setIsHoverd(i)}
                    onMouseLeave={() => setIsHoverd(null)}
                    custom={i}
                    variants={perspective}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <AnimatePresence mode="wait">
                      {title.toLowerCase() === "services" ? (
                        <a
                          className="flex justify-between cursor-pointer items-center gap-2 overflow-hidden"
                          onClick={() => setServiceClicked(true)}
                        >
                          {title}
                          <ArrowLeft size={'32'} className="rotate-[180deg]" />
                           
                        </a>
                      ) : (
                        <Link
                          href={href}
                          className="flex items-center gap-2 overflow-hidden"
                        >
                          {title}
                        </Link>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        )}
        <motion.div className={`footer`}>
          {footerLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.a
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
              >
                {title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
