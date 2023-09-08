"use client";

import { motion } from "framer-motion";
import { FC, useRef, useEffect } from "react";
import Skill from "./Skill";

const Skills: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  }
  // useEffect(() => {
  //   const handleWheel = (e: any) => {
  //     if (containerRef.current) {
  //       if (containerRef.current.contains(e.target)) {
  //         e.preventDefault();
  //         containerRef.current.scrollLeft += e.deltaY/2;
  //       }
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);
  return (
    <motion.div
      className="flex  flex-col md:h-screen px-3 text-center md:text-left  max-w-[2000px] xl:px-10  justify-center xl:space-y-0 mx-auto items-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className=" uppercase tracking-[20px] md:tracking-[25px] text-slate-500 text-xl md:text-2xl font-semibold  px-3 mb-7">
        Skills
      </h3>

      <div className="w-full mx-auto md:w-[70%] xl:mt-24 mt-16 flex space-x-5 overflow-x-scroll p-1 md:p-7 snap-center snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80">
        <Skill category="Programming Languages" />
        <Skill category="Tech Stack" />
        <Skill category="Databases" />
        <Skill category="Other Tools" />
      </div>
    </motion.div>
  );
};

export default Skills;
