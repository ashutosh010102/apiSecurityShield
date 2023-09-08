import React from 'react'
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { Router, useRouter } from 'next/router';
type Props = {
  type:string,
  title: string,
  path:string
}


function Button({ type, title,path }: Props) {
  //   const router = useRouter()
  // function handleClick() {
    
  //     router.push(path)


  // }
  return (
    <>
    <a href={path} target = "_blank" className="px-8 py-4 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-slate-500/40 hover:text-slate-400/40 mr-1 bg-[#121212] flex items-center gap-2">
      <span className = "h-4 w-4 flex items-center">
        {type ==="demo" ? <ExternalLink/> : <Github/>}
      </span> 
      {title}
      
    </a>
    </>
  );
}

export default Button