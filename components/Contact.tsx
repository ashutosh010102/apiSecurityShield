"use client";
import { motion } from "framer-motion";
import { Mail, MapPinIcon, PhoneIcon } from "lucide-react";

const img_url = "/Images/dp2.jpg";



function Contact(){
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
      className="h-screen flex flex-col relative mt-24 md:flex-row text-center md:text-left max-w-7xl justify-evenly mx-auto items-center px-10"
    >
      <h3 className="absolute top-4 uppercase tracking-[25px] text-slate-500 text-2xl md:text-3xl font-bold">
        Contact
      </h3>

          <div className = "flex flex-col items-center justify-center text-slate-400 p-3">
              <h2 className = "text-2xl md:text-5xl font-extrabold">I have got just what you need.</h2>
              <h2 className=" text-2xl md:text-5xl mt-3 font-extrabold text-center  underline">Lets talk.</h2>  
              

              <div className="mt-10 flex flex-col space-y-2 text-lg ml-10 md:ml-20">
                  <p className="flex font-bold">
                      <span className = "mr-1">
                      <PhoneIcon/>
                       </span>
                      +91-9337641082
                  
                  </p>

                  <p className="flex font-bold">
                      <span className = "mr-1">
                          <Mail/>
                      </span>
                      pansari.rohit9@gmail.com
                      
                  </p>
                  <p className="flex font-bold">
                      <span className = "mr-1">
                          <MapPinIcon/>
                      </span>
                      Guwahati, India
                      
                  </p>
                  
              </div>
          </div>
         

    </motion.div>
  );
}

export default Contact;
