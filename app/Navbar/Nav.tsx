"use client";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../App_Chunks/Components/Logo";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  ArrowUpRight,
  CaretDown,
  DotsThreeOutline,
  X,
} from "@phosphor-icons/react";
import { ChevronDown } from "lucide-react";
const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const path = usePathname();
  const menus = [
    { name: "Home", route: "/" },
    { name: "About us", route: "/About-us" },
    {
      name: "Services",
      serviceList: [
        { name: "Joinery", route: "/Services/Joinery" },
        { name: "Interior Design", route: "/Services/Interior-Design" },
        { name: "Carpentry", route: "/Services/Carpentry" },
        { name: "Furniture Crafting", route: "/Services/Furniture-Crafting" },
        { name: "Fit-out & Refurbishments", route: "/Services/Fitout" },
        {
          name: "Visual Merchandising & Shop Display",
          route: "/Services/Merchandising",
        },
        { name: "Architecture Design", route: "/Services/Architecture" },
        { name: "Retail Turnkey Solutions", route: "/Services/Retail-Turnkey" },
        { name: "Home Maintenance", route: "/Services/Home-Maintenance" },
        { name: "Space Renovation", route: "/Services/Space-Renovation" },
        {
          name: "Building Contracting",
          route: "/Services/Building-Contracting",
        },
      ],
      route: "",
    },
    { name: "Careers", route: "/Careers" },
    { name: "Contact", route: "/Contact" },
  ];
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsNavShowing(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavShowing(false);
      } else {
        setIsNavShowing(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const [isOnMobile, setIsOnMobile] = useState(false);
  const [isMenuShowing, setIsMenuShowing] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State to track which menu is open
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsOnMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      lenis?.scrollTo(0, { immediate: true });
    } else {
      document.body.style.overflow = "auto";
      lenis?.start();
    }
  }, [isOpen]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <motion.div
      className={cn(
        "w-full fixed left-0 z-50",
        lastScrollY !== 0 && !isOpen && "backdrop-blur-lg"
      )}
      initial={{ top: 0 }}
      animate={{
        top: isNavShowing ? 0 : -100,
        backgroundColor:
          lastScrollY === 0
            ? isOnMobile
              ? "hsl(1, 5%, 85%, 0.8)" // Mobile: Slightly opaque at the top
              : "hsl(1, 5%, 85%, .9)" // Desktop: Fully transparent at the top
            : "hsl(1, 5%, 85%, 0.4)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.1,
      }} // Smooth animation
    >
      <div className="container  relative flex  justify-between items-center">
        <Logo
          className={cn(`transition-colors duration-200  text-slate-950`)}
        />

        <div className=" hidden lg:flex items-center bg-gradient-to-b gap-2 border from-white to-slate-100 p-[.4rem] rounded-xl">
          {menus.map((menu, idx) =>
            menu.serviceList ? (
              <div
                key={idx}
                className="relative"
                onMouseLeave={() => setIsMenuShowing(false)} // Only close when leaving the entire div
              >
                <button
                  onClick={() => setIsMenuShowing(!isMenuShowing)}
                  onMouseEnter={() => setIsMenuShowing(true)}
                  className={cn(
                    `px-4 py-[.5rem] rounded-xl hover:bg-orange-100`,
                    path.includes("Services") &&
                      `bg-orange-200 text-orange-900 hover:bg-orange-200`
                  )}
                >
                  <span className="flex items-center gap-2">
                    {menu.name}{" "}
                    <CaretDown
                      className={`${isMenuShowing ? "rotate-180" : "rotate-0"}`}
                    />
                  </span>
                </button>

                <AnimatePresence mode="wait">
                  {isMenuShowing && (
                    <div className="absolute -translate-x-1/2   top-[100%] left-1/2 bg-transparent min-w-[430px]">
                      <motion.div
                        initial={{ height: "1px" }}
                        animate={{ height: "100%" }}
                        exit={{ height: "1px" }}
                        transition={{ ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-[.48rem] overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_10px_10px_-15px] bg-slate-50" // Close when leaving dropdown
                      >
                        {menu.serviceList.map((service, index) => (
                          <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.05,
                              ease: [0, 0, 0.2, 1],
                            }}
                            key={index}
                            className={cn(
                              `hover:bg-orange-50 px-5 py-3`,
                              index !== menu.serviceList.length - 1 &&
                                "border-b border-slate-400",
                              path.includes(service.name) && "bg-orange-50"
                            )}
                          >
                            <Link
                              href={service.route}
                              className="text-xl flex justify-between items-center gap-2"
                            >
                              {service.name}
                              <ArrowUpRight />
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={idx}
                href={menu.route}
                className={cn(
                  `px-4 py-[.5rem] rounded-xl hover:bg-orange-100 hover:text-orange-900`,
                  path === menu.route &&
                    `bg-orange-200 text-orange-900 hover:bg-orange-200`
                )}
              >
                <div>{menu.name}</div>
              </Link>
            )
          )}
        </div>

        <div className="lg:hidden block ">
          <button onClick={() => setIsOpen(true)}>
            <DotsThreeOutline className="text-3xl" />
          </button>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: [0.23, 1, 0.32, 1], duration: 0.6 }}
              className="w-screen h-screen fixed top-0 left-0 "
            >
              <motion.div
                initial={{ backdropFilter: "blur(2px)" }}
                animate={{
                  backdropFilter: isOpen ? "blur([5px])" : "blur(2px)",
                }}
                exit={{ backdropFilter: "blur(2px)" }}
                transition={{ ease: [0.23, 1, 0.32, 1], duration: 0.6 }}
                className="bg-black/40 overflow-auto w-full h-full"
              >
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ ease: [0.23, 1, 0.32, 1], duration: 0.6 }}
                  className="bg-slate-200  relative z-10 container py-7"
                >
                  <div className=" flex justify-end items-center">
                    <button
                      className="text-3xl "
                      onClick={() => {
                        setIsOpen(false);
                        setOpenIndex(null);
                      }}
                    >
                      <X />
                    </button>
                  </div>
                  <div className="text-3xl font-Primary font-[600] mt-14 grid  grid-cols-1  gap-3">
                    {menus.map((menu, id) =>
                      menu.serviceList ? (
                        <motion.div
                          initial={{ y: 200 }}
                          animate={{ y: 0 }}
                          exit={{ y: 10 }}
                          transition={{
                            ease: [0.23, 1, 0.32, 1],
                            duration: 0.6,
                          }}
                          key={id}
                          className="mb-3 w-full "
                          onClick={() => toggleAccordion(id)} // Toggle accordion on click
                        >
                          <div className="flex items-center justify-between">
                            {" "}
                            <p className="flex-1">{menu.name}</p>
                            <ChevronDown
                              className={`size-6 duration-300 transition-transform transform ${
                                openIndex === id ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          {openIndex === id && (
                            <motion.div
                              initial={{ opacity: 0, height: "1px" }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: "1px" }}
                              transition={{ duration: 0.3 }}
                              className="pl-4"
                            >
                              {menu.serviceList.map((service, index) => (
                                <p
                                  className="font-[500] mt-3 text-2xl"
                                  key={index}
                                >
                                  <Link
                                    onClick={() => setIsOpen(false)}
                                    href={service.route}
                                  >
                                    {service.name}
                                  </Link>
                                </p>
                              ))}
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ y: 200 }}
                          animate={{ y: 0 }}
                          exit={{ y: 10 }}
                          transition={{
                            ease: [0.23, 1, 0.32, 1],
                            duration: 0.6,
                          }}
                          key={id}
                          className={`w-full mb-3`}
                        >
                          <Link href={menu.route}>{menu.name}</Link>
                        </motion.div>
                      )
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="hidden lg:block min-w-24" />
      </div>
    </motion.div>
  );
};

export default Nav;
