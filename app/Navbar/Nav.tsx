"use client";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../App_Chunks/Components/Logo";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./MenuButton";
import { AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CaretDown,
  DotsThreeOutline,
} from "@phosphor-icons/react";
import NavCard from "./NavCard";
const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const menus = [
    { name: "Home", route: "/" },
    { name: "About us", route: "/About-us" },
    {
      name: "Services",
      serviceList: [
        { name: "Joinery", route:"/Services/Joinery" },
        { name: "Interior Design", route:"/Services/Interior-Design" },
        { name: "Carpentry", route:"/Services/Carpentry" },
        { name: "Furniture Crafting", route:"/Services/Furniture-Crafting" },
        { name: "Fit-out & Refurbishments", route:"/Services/Fitout" },
        { name: "Visual Merchandising & Shop Display", route:"/Services/Merchandising" },
        { name: "Architecture Design", route:"/Services/Architecture" },
        { name: "Retail Turnkey Solutions", route:"/Services/Retail-Turnkey" },
        { name: "Home Maintenance", route:"/Services/Home-Maintenance" },
        { name: "Space Renovation", route:"/Services/Space-Renovation" },
        { name: "Building Contracting", route:"/Services/Building-Contracting" },
      ],
      route: "",
    },
    { name: "Careers", route: "/Careers" },
    { name: "Contact", route: "/Contact" },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) // Prevents button from closing itself
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavShowing(false); // Scroll down -> hide navbar
      } else {
        setIsNavShowing(true); // Scroll up -> show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const [isActive, setIsActive] = useState(false);
  const [isOnMobile, setIsOnMobile] = useState(false);
  useEffect(() => {
    if (window) {
      if (window.innerWidth < 480) {
        setIsOnMobile(true);
      }
    }
  });
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) // Prevents button from closing itself
      ) {
        setIsActive(false);
      }
    };

    const handleScroll = () => {
      setIsActive(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuShowing, setIsMenuShowing] = useState(false);
  return (
    <motion.div
      className={cn(
        "w-full z-[99] fixed left-0",
      )}
      initial={{ top: 0 }}
      animate={{
        top: isNavShowing ? 0 : -100,
        backdropFilter: lastScrollY == 0 ? "blur(0rem)" : "blur(1.3rem)",
        backgroundColor:
          lastScrollY == 0 ? "hsl(1, 5%, 85%, 0)" : "hsl(1, 5%, 85%, 0.4)",
      }} // Adjust -70 to your navbar height
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.1,
      }} // Smooth animation
    >
      <div className="container relative flex  justify-between items-center">
        <Logo
          className={cn(
            `transition-colors duration-200  text-slate-950`
          )}
        />
        {/*<div className={`absolute right-8 top-0`} ref={menuRef}>
          <motion.div
            className={` bg-[#FFB38E] rounded-[25px] relative`}
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            {serviceClicked && (
              <button
                onClick={() => setServiceClicked(false)}
                className="absolute w-fit top-4 left-9"
              >
                <ArrowLeft className="text-4xl" />
              </button>
            )}
            <AnimatePresence>
              {isActive && (
                <NavCard
                  setServiceClicked={setServiceClicked}
                  serviceClicked={serviceClicked}
                />
              )}
            </AnimatePresence>
          </motion.div>
          <div ref={buttonRef}>
            <Button
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          </div>
        </div> */}

        <div className="hidden lg:flex items-center bg-gradient-to-b gap-2 border from-white to-slate-100 p-[.4rem] rounded-xl">
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
                    path === menu.route && `bg-orange-200`
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
                              `hover:bg-orange-100 px-5 py-3`,
                              index !== menu.serviceList.length - 1 &&
                                "border-b border-slate-400"
                            )}
                          >
                            <Link
                              href={service.route}
                              className="text-xl  flex justify-between items-center gap-2"
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

        <div className="lg:hidden block">
          <DotsThreeOutline className="text-3xl" />
        </div>
        <div className="hidden lg:block min-w-24" />
      </div>
    </motion.div>
  );
};

export default Nav;
