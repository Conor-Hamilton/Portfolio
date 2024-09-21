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
      <main className="flex flex-2 my-20 mx-4 md:mx-28">
        <aside className="w-64 min-w-[250px] sticky top-0 lg:block hidden">
          <Navbar />
        </aside>
        <div className="flex-1 px-4 sm:px-6 md:px-2 lg:px-2">
          <section id="aboutme" className="mb-60">
            <About />
          </section>
          <section id="myskills" className="mb-96">
            <MySkills />
          </section>
          <section id="projects" className="mb-60 mt-12">
            <Projects />
          </section>
          <section id="contact" className="">
            <Contact />
          </section>
        </div>
      </main>
      <footer className="w-full bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
