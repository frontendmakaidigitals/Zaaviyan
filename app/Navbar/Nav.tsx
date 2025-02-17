"use client";
import React, { useEffect, useState } from "react";
import Menu from "./menu";
import Logo from "../App_Chunks/Components/Logo";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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

  return (
    <motion.div
      className={cn(
        "w-full bg-white/50 backdrop-filter z-[99] backdrop-blur-xl fixed left-0",
        !isNavShowing && "-top-full"
      )}
      initial={{ top: 0 }}
      animate={{ top: isNavShowing ? 0 : -70 }} // Adjust -70 to your navbar height
      transition={{ type: "spring", stiffness: 100, damping: 25, duration:.1 }} // Smooth animation
    >
      <div className="container flex justify-between items-center">
        <Logo />
        <Menu />
      </div>
    </motion.div>
  );
};

export default Nav;
