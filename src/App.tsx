import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Languages from "./components/Languages";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full text-gray-400 bg-[#0a192f]">
      <div className="flex flex-1">
        <div className="w-64 min-w-[250px]">
          <Navbar />
        </div>

        <div className="flex-1 px-6 py-12 md:px-12 lg:px-24">
          <About />
          <Languages />
          <Projects />
        </div>
      </div>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
