"use client";
import { motion } from "framer-motion";

const img_url = "/Images/dp2.jpg";

type Props = {
  about_body: string;
};

function About({ about_body }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" h-screen flex flex-col mt-44  text-center md:text-left max-w-7xl justify-evenly mx-auto items-center px-10 mb-5 snap-start snap-mandatory"
    >
      <h3 className="uppercase tracking-[25px] md:tracking-[25px] text-slate-500 text-xl md:text-2xl font-semibold mb-2 md:mb-0">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <motion.img
          src={img_url}
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{
            once: true,
          }}
          width={60}
          height={60}
          className="  mb-10 md:mb-0 rounded-full object-cover w-40 h-40 md:h-80 md:w-80 xl:w-[400px] xl:h-[400px] xl:rounded-lg flex-shrink-0 mt-24 xl:mt-30 mr-3"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-2xl font-semibold text-slate-300  text-center">
            Here is a{" "}
            <span className="underline decoration-slate-600">little</span>{" "}
            background
          </h4>
          <p className="text-sm text-slate-500 font-semibold">{about_body}</p>
        </div>
      </div>
      {/* <div className="border border-slate-300 mx-auto w-full  md:max-w-2xl lg:max-w-4xl mb-44 " /> */}
    </motion.div>
  );
}

export default About;
