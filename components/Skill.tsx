"use client";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Langar } from "next/font/google";
import { FC } from "react";
import Language from "./Language";

type Props = {
  category: string;
};

function Skill({ category }: Props) {
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[450px] md:w-[600px] xl:w-[100%] xl:mt-10 snap-center bg-[#080808] p-10 opacity-90 hover:opacity-100 transition-opacity duration-200 overflow-hidden -ml-10">
      {/* <motion.img
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/Images/clglogo.png"
        alt="Image"
      /> */}
      <div className="px-0 md:px-10 flex flex-col space-y-2">
        <h4 className="text-xl md:text-2xl tracking-widest text-center font-bold text-slate-300 mb-10">
          {category}
        </h4>
        {/* <div className="flex justify-between">
          <p className="font-bold text-lg mt-1 text-slate-400 mb-2">
            B.Tech CSE
          </p>
          <p className="font-bold text-lg mt-1 text-slate-400 mb-2">
            2021-2025
          </p>
        </div> */}

        <div className="grid grid-cols-2 gap-x-5 gap-y-7">
          {category === "Programming Languages" ? (
            <>
              <Language imagePath="c" lang="C" />
              <Language imagePath="cpp" lang="C++" />
              <Language imagePath="python" lang="Python" />
              <Language imagePath="java" lang="Java" />
            </>
          ) : category === "Tech Stack" ? (
            <>
              <Language imagePath="js" lang="Javascript" />
              <Language imagePath="next" lang="Next.js" />
              <Language imagePath="react" lang="React.js" />
              <Language imagePath="node" lang="Node.js" />
              <Language imagePath="tailwind" lang="Tailwind CSS" />
              <Language imagePath="firebase" lang="Firebase" />
            </>
          ) : category === "Databases" ? (
            <>
              <Language imagePath="mysql" lang="MySQL" />
              <Language imagePath="mongo" lang="MongoDB" />
              <Language imagePath="firebase" lang="Firestore" />
            </>
          ) : category === "Other Tools" ? (
            <>
            <Language imagePath="git" lang="Git" />
            <Language imagePath="github" lang="GitHub" />
            <Language imagePath="aws" lang="AWS" />
                  
                  
                  </>
          ) : (
            <p>NO languages</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default Skill;
