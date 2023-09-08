/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Button from "./Button";
import { ExternalLink } from "lucide-react";
type Props = {
  img_url: string;
  title: string;
  link: string;
  body: string;
};

function LeftProject({ img_url, title, link, body }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row mr-[5vh] md:mr-0 items-center justify-between max-w-6xl mx-auto mt-32 space-x-10"
    >
      <img
        src={`/Images/${img_url}.jpg`}
        alt=""
        className="h-60 w-4/5 ml-auto mr-7 md:mx-auto mb-4 xl:h-96 xl:w-1/2 md:h-72 md:w-1/2 object-contain rounded-lg "
      />

      <div className="flex flex-col space-y-10 bg-[#101010] p-10 rounded-xl">
        <h3 className="text-2xl font-extrabold tracking-wide text-center text-slate-300">
          {" "}
          {title}
        </h3>
        <div className="text-sm xl:text-md font-sans tracking-wider font-semibold text-slate-400">
          <ReactMarkdown>{body}</ReactMarkdown>
          <div className="flex mt-7 justify-evenly items-center">
            <Button
              type="demo"
              title="Demo"
              path="https://weather-gpt-seven.vercel.app"
            />
            <Button
              type="github"
              title="Code"
              path="https://github.com/p-rohitt/"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LeftProject;
