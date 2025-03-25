import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full text-gray-400 bg-[#0a192f]">
      <div className="lg:hidden">
        <Navbar isMobile />
      </div>
      <main className="flex flex-1 my-12 mx-4 sm:mx-8 md:mx-10 lg:mx-12">
        <aside className="w-56 min-w-[180px] sticky top-0 lg:block hidden">
          <Navbar />
        </aside>
        <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10">
          <About />
          <MySkills />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
