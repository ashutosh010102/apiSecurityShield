"use client"
import { randomUUID } from "crypto";
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  name: string,
  major: string,
  year: string,
  summary: string[],
  img_url:string


}
function EducationCard({ name, major, year, summary, img_url }: Props) {
  
  return (
    <article className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[100%] xl:mt-10 snap-center bg-[#080808] py-5 -ml-7  md:p-10 opacity-90 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={`/Images/${img_url}.png`}
        alt="Image"
      />
      <div className="p-10 md:px-10">
        <h4 className="text-lg md:text-2xl text-center font-bold text-slate-300">{name}</h4>
        <div className = "flex justify-between">
          <p className="font-bold text-xs md:text-lg mt-1 text-slate-400 mb-2">{major}</p>
          <p className="font-bold text-xs md:text-lg mt-1 text-slate-400 mb-2">{year}</p>

        </div>

        
        <ul className="list-disc space-y-4 ml-5 text-xs text-slate-400">
   
          {summary.map((sum,index) => {
            return <li key = {index+1}> {sum}</li>
          })}
        </ul>
      </div>
    </article>
  );
};

export default EducationCard;
