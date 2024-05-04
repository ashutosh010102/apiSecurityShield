"use client"

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { ParticlesContainer } from "./Particles";
import { useRouter } from "next/navigation";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  const router = useRouter();
  return (
    <header className=" sticky top-0 flex flex-row  w-full  justify-between px-5 md:px-7 py-3 md:py-5 max-w-7xl mx-auto z-20">
      {/* <ParticlesContainer /> */}
      <motion.div
        initial={{
          opacity: 0,
          x: -500,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row"
      >
        <SocialIcon
          url="https://github.com/p-rohitt"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/r007hitwastaken"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rohit-pansari-37a732236/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/_talksikk_/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row cursor-pointer text-gray-500 items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          onClick={() => {}}
        />
        <a
          href="mailto:pansari.rohit9@gmail.com"
          className="uppercase hidden md:block"
        >
          GET IN TOUCH
        </a>
        <Link href="/chat-bot">
          <div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-brain-circuit ml-2 mr-2 h-10"
          >
            <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
            <path d="M16 8V5c0-1.1.9-2 2-2" />
            <path d="M12 13h4" />
            <path d="M12 18h6a2 2 0 0 1 2 2v1" />
            <path d="M12 8h8" />
            <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
            <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
          </svg>
        </div>
        </Link>
        <a
          onClick={() => {
            router.push("/chat-bot");
          }}
          className="hidden md:block"
        >
          ASK AI
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
