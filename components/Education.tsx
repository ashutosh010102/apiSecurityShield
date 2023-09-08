"use client";
import { motion } from "framer-motion";
import { FC, useRef, useEffect } from "react";
import EducationCard from "./EducationCard";

const Education: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  function handleScroll(e: React.WheelEvent<HTMLDivElement>) {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  }
  //  useEffect(() => {
  //    const handleWheel = (e:any) => {
  //      if (containerRef.current) {
  //        if (containerRef.current.contains(e.target)) {
  //          e.preventDefault();
  //          containerRef.current.scrollLeft += e.deltaY;
  //        }
  //      }
  //    };

  //    window.addEventListener("wheel", handleWheel, { passive: false });

  //    return () => {
  //      window.removeEventListener("wheel", handleWheel);
  //    };
  //  }, []);
  return (
    <motion.div
      className="mt-10 h-screen flex overflow-x-hidden flex-col text-left  max-w-full px-3 md:px-10 justify-evenly mx-auto items-center space-y-4 mb-5 snap-start snap-always snap-mandatory"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className=" mt-10 uppercase tracking-[20px] md:tracking-[25px] text-slate-500 text-xl md:text-2xl font-semibold">
        Education
      </h3>

      <div className=" w-full md:w-[70%] xl:mt-24 mt-16 flex space-x-5 overflow-x-scroll p-2 md:p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80 scroll-auto snap-center snap-always">
        <EducationCard
          name="IIIT, Guwahati"
          year="2021-2025"
          major="B.Tech CSE"
          summary={[
            "Current GPA : 8.2/10 (Upto 4th semester)",
            "Took courses like DSA, DBMS, OS, Networks.",
            "Reading club coordinator for 2 consecutive semesters.",
            "Core Member of the Yuvaan's Media & Publicity Team for the year 2022.",
          ]}
          img_url="clglogo"
        />
        <EducationCard
          name="Vikash Group of Institutions"
          year="2018-2021"
          major="Senior Secondary"
          summary={["A podium finish in the CBSE examinations.", "Secured a silver medal in Science Olympiad by S.O.F", "Cleared JEE advanced with a rank of 11,000.","Active participation in the Technocrats Club."]}
          img_url="vikash"
        />
      </div>
    </motion.div>
  );
};

export default Education;
