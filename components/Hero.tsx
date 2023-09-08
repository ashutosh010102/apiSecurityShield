"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

const img_url = "/Images/dp.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, The Name's Rohit", "A devELOPER"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={img_url}
        alt={"dp_here"}
        className=" rounded-full h-40 w-40  mx-auto object-cover"
        width={40}
        height={40}
        priority
        unoptimized
      />
      <div className="z-20">
        <h2 className=" text-xs lg:text-sm text-slate-700 uppercase  tracking-[10px] lg:tracking-[15px] pb-2">
          Software Developer
        </h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <span className="text-slate-300 mr-3">{text}</span>
          <Cursor cursorColor="#ffffff" />
        </h1>
        <div className="pt-3">
          <Link href="#about">
            <button className="hero__button">About</button>
          </Link>
          <Link href="#education">
            <button className="hero__button">Education</button>
          </Link>
          <Link href="#skills">
            <button className="hero__button">Skills </button>
          </Link>
          <Link href="#projects">
            <button className="hero__button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
