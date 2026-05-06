"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    // মেইন কন্টেইনারে ফিক্সড ব্যাকগ্রাউন্ড কালার এবং গ্রেডিয়েন্ট দেওয়া হয়েছে
    <main className="relative min-h-screen bg-[#030014] overflow-hidden selection:bg-blue-500/30">
      
      {/* 🌌 Global Background Glows - এগুলি ফিক্সড থাকবে যাতে স্ক্রল করলে কালার কেটে না যায় */}
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
        <Navbar />

        <section id="home">
          <Hero />
        </section>

        {/* About Section - h1 ট্যাগ সরিয়ে সরাসরি কম্পোনেন্ট রাখা হয়েছে */}
        <section id="about">
          <About />
        </section>

        <section id="tech" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
       
          <Technologies/>
        </section>
        <section id="tech" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
       
          <Skills/>
        </section>

        <section id="projects" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          {/* <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Projects Section</h2> */}
          <Projects/>
        </section>

        <section id="contact" className="min-h-screen text-white flex items-center justify-center border-t border-white/5">
          <h2 className="text-4xl font-bold tracking-tighter opacity-20 uppercase italic">Contact Section</h2>
        </section>
      </div>
    </main>
  );
}
// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";

// export default function Home() {
//   return (
//     <div>
      
//       {/* Deep Blue/Purple Glows*/}
//       {/* <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]"></div>
//       <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]"></div>  */}
      
//       <section id="home">
//         <Hero />
//       </section>

//       <section id="about" className="min-h-screen text-white flex items-center justify-center">
//         <h1 className="text-3xl"> <About/> </h1>
//       </section>
//       <section id="tech" className="min-h-screen text-white flex items-center justify-center">
//         <h1 className="text-3xl">Tech Stack Section</h1>
//       </section>

//       <section id="projects" className="min-h-screen text-white flex items-center justify-center">
//         <h1 className="text-3xl">Projects Section</h1>
//       </section>

//       <section id="contact" className="min-h-screen text-white flex items-center justify-center">
//         <h1 className="text-3xl">Contact Section</h1>
//       </section>
//     </div>
//   );
// }