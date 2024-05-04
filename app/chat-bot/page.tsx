"use client";

import { ParticlesContainer } from "@/components/Particles";
import { Loader2, PenBoxIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import TypeWriter from "react-ts-typewriter";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import BackgroundCircles from "@/components/BackgroundCircles";
type Props = {};
function ChatBotPage({}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  const [typewriterKey, setTypeWriterKey] = useState(0);
  const [forceRenderer, setForceRenderer] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setLoading(true);
      const response = await axios.post("/api/gemini", formData);
      setGptResponse(response.data.answer);
      setPrompt("");
      setTypeWriterKey((prev) => prev + 1);
    } catch (error) {
      console.log("Error :", error);
    } finally {
      setLoading(false);
      setForceRenderer((prev) => !prev);
    }
  }

  useEffect(() => {
    if (loading) {
      setGptResponse("");
    }
  }, [forceRenderer, loading]);
  return (
    <div className=" relative flex flex-col justify-center items-center min-h-screen">
      <div className="absolute -z-20">{/* <ParticlesContainer /> */}</div>
      {/* <div className ="absolute top-44">

      <BackgroundCircles />
      </div> */}
      <div className=" w-[100vw] md:w-[50%] h-[80vh] md:h-[70vh] bg-gray-950 opacity-80 rounded-xl flex flex-col p-2 justify-between overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80 overflow-x-hidden">
        <h1 className="flex items-center justify-center  text-2xl md:text-4xl font-bold font-inter">
          Ask questions about me!
        </h1>
        {gptResponse ? (
          <div className="flex justify-center items-center">
            <p className="text-sm text-white  p-10 max-w-2xl mx-auto mb-14">
              
              <TypeWriter
                key={typewriterKey}
                text={gptResponse}
                loop={false}
                speed={10}
              />
            </p>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="animate-spin h-14 w-14" />
          </div>
        ) : (
          <div className="h-96 flex flex-col items-center justify-center p-10 md:p-3 font-inter font-semibold">
            Hello! I am powered by Gemini Pro. Feel free to ask me questions
            about Rohit!{" "}
            <span className="font-light flex justify-center items-center text-center text-xs text ">
              A gentle reminder to keep the questions professional. No personal
              questions will be entertained. {<br />} Some example prompts: What
              is your tech stack? Why are you a good fit for xyz role?
            </span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex p-10 gap-2 md:gap-4 items-center justify-between md:justify-center"
        >
          <PenBoxIcon className="md:w-8 md:h-8 w-8 h-8" />
          <input
            className="md:h-10 md:w-96 h-10 w-48 rounded-xl text-black p-3 text-md md:text-lg"
            name="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-50 flex items-center justify-center p-2 w-20 md:w-32 h-10 text-black text-xs md:text-md font-semibold rounded-xl hover:text-white hover:bg-gray-950"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBotPage;
