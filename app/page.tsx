import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen z-0  overflow-y-hidden overflow-x-hidden snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-400/80">
      <Header />

      {/*Hero */}

      <section id="hero" className="snap-start mb-10">
        <Hero />
      </section>

      <section id="about" className="snap-center mb-10">
        <About
          about_body="Namaste! I'm Rohit, a dedicated aspiring software developer on a mission to turn lines of code into meaningful solutions. I've always been fascinated by the way technology shapes our world, and I'm excited to contribute to this ever-evolving landscape.
          My journey into the world of coding began when my dad got me my own pc. Since then, I've immersed myself in learning various programming languages, algorithms, and software development methodologies. My determination to overcome challenges and build functional, efficient, and user-friendly applications has driven me to continuously refine my skills.
          When I'm not typing away at my keyboard, I'm an avid problem solver and a continuous learner. I enjoy exploring coding challenges, attending tech meetups, and reading about the latest advancements in the world of software development. Outside of the tech realm, you might find me playing video games, hopping cafes, or reading non-fictions. 

"
        />
      </section>

      

      {/*Experience */}
      <section id="education" className="snap-start mb-10">
        <Education />
      </section>

      {/*Skills */}
      <section id="skills" className="snap-start mb-10">
        <Skills />
      </section>

      <section id="projects" className="snap-start mb-10">
        <Projects />
      </section>
      {/*Projects */}

      {/*Contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
