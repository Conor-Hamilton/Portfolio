import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="nav hidden lg:block bg-[#0a192f] text-white sticky top-16 z-50 px-6 lg:px-10">
      <ul className="mt-16 mx-auto max-w-lg">
        <li>
          <a className="group flex items-center py-3 active" href="#about">
            <span className="nav-indicator mr-4 h-1 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              About
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-1 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3" href="#projects">
            <span className="nav-indicator mr-4 h-1 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
