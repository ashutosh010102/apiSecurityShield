/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import Button from "./Button";
type Props = {
  img_url: string;
  title: string;
  body: string;
  link: string;
};

function RightProject({ img_url, title, body, link }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row-reverse items-center ml-[5vh] md:ml-0 justify-center md:justify-between max-w-6xl mx-auto mt-44 space-x-10 space-x-reverse"
    >
      <img
        src={`/Images/${img_url}.jpg`}
        alt=""
        className="h-60 w-4/5 mr-auto ml-7 md:mx-auto mb-4 xl:h-96 xl:w-1/2 md:h-72 md:w-1/2 object-contain rounded-lg "
      />
      <div className="flex flex-col space-y-10 bg-[#101010] p-6 opacity-80 hover:opacity-100 rounded-xl">
        <h3 className="text-2xl font-extrabold tracking-wide text-center text-slate-300">
          {" "}
          {title}
        </h3>
        <div className="text-sm xl:text-md font-sans tracking-wider font-semibold text-slate-400 p-3">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
        <div className="flex mt-3 justify-evenly items-center">
          <Button
            type="github"
            title="Code"
            path="https://github.com/p-rohitt/youtube-ad-recommender"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default RightProject;
