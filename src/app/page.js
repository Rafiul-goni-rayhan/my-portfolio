"use client";
import SkillClickEffect from "@/components/SkillClickEffect";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] overflow-hidden selection:bg-blue-500/30">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Left Blue Glow */}
        <div className="absolute w-[600px] h-[600px] bg-blue-600/15 blur-[120px] rounded-full -top-32 -left-32 animate-pulse"></div>
        
        {/* Bottom Right Purple Glow */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[130px] rounded-full -bottom-32 -right-32 animate-pulse delay-700"></div>
        
        {/* Middle Subtle Glow to maintain continuity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 blur-[160px] rounded-full opacity-50"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <SkillClickEffect />
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tech" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
       
          <Technologies/>
        </section>
        <section id="skills" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
       
          <Skills/>
        </section>

        <section id="projects" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          {/* <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Projects Section</h2> */}
          <Projects/>
        </section>
        <section id="SocialLinks" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          {/* <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Projects Section</h2> */}
          <SocialLinks/>
        </section>
        <section id="Education" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          {/* <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Projects Section</h2> */}
          <Education/>
        </section>

        <section id="Contact" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          {/* <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Contact Section</h2> */}
          <Contact/>
        </section>
        <section id="Footer" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          {/* <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Contact Section</h2> */}
          <Footer/>
        </section>
      </div>
    </main>
  );
}







