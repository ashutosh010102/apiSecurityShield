import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
      <motion.div
          initial={{
          opacity:0
          }}

          animate={{
              opacity:[0.1,0.2,0.4,0.8,1,1],
              scale: [1, 2, 2, 3, 1],
              borderRadius: ["20%","20%","50%","80%","20%"]
          }}
          transition={{
              duration:2.5
          }}
          
          className='relative flex justify-center items-center mt-20' >
        <div className  = "absolute border border-slate-600 rounded-full w-[200px] h-[200px] animate-ping mt-52 "/>
        <div className  = "absolute border border-slate-600 rounded-full w-[300px] h-[300px]  mt-52 opacity-10"/>
        <div className  = " absolute border border-slate-600 rounded-full w-[500px] h-[500px]  mt-52 opacity-20"/>
        <div className  = " absolute border border-slate-600 rounded-full w-[630px] h-[630px]  mt-52  opacity-30 animate-pulse "/>
        <div className  = " absolute border border-slate-600 rounded-full w-[800px] h-[800px]  mt-52 opacity-20"/>
    
        <div />
        <div />
        <div />
        <div />



    </motion.div>
  )
}

export default BackgroundCircles