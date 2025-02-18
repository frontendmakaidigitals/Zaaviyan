"use client";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../App_Chunks/Components/Logo";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import Button from "./MenuButton";
import { AnimatePresence } from "framer-motion";
import NavCard from "./NavCard";
const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
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
  const menu = {
    open: {
      width: "480px",
      height: "650px",
      top: "-10px",
      right: "-10px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
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
  return (
    <motion.div
      className={cn(
        "w-full bg-white/50 backdrop-filter py-3 z-[99] backdrop-blur-xl fixed left-0",
        !isNavShowing && "-top-full"
      )}
      initial={{ top: 0 }}
      animate={{ top: isNavShowing ? 0 : -70 }} // Adjust -70 to your navbar height
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 0.1,
      }} // Smooth animation
    >
      <div className="container relative flex justify-between items-center">
        <Logo />
        <div className={`absolute right-8 top-0`} ref={menuRef}>
          <motion.div
            className={`w-[480px] bg-[#c9fd74] rounded-[25px] relative`}
            variants={menu}
            animate={isActive ? "open" : "closed"}
            initial="closed"
          >
            <AnimatePresence>{isActive && <NavCard />}</AnimatePresence>
          </motion.div>
          <div ref={buttonRef}>
            <Button
              isActive={isActive}
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          </div>
           
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
