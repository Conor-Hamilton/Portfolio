import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar({ isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <>

        <nav className="bg-[#0a192f] text-white px-6 fixed top-0 w-full z-50">
          <div className="flex justify-between items-center py-4">
            <div className="text-lg font-bold"></div>
            <button
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16" 
                  }
                />
              </svg>
            </button>
          </div>
        </nav>


        <div
          className={`fixed top-10 right-0 h-full w-64 bg-[#0a192f] text-white shadow-lg z-40 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <ul className="mt-12 space-y-6 px-6">
            {["aboutme", "myskills", "projects", "contact me"].map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-slate-200"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }


  return (
    <nav className="bg-[#0a192f] text-white sticky top-16 z-50 px-6 lg:px-10">
      <ul className="mt-24 mx-auto max-w-lg">
        {["aboutme", "myskills", "projects", "contact me"].map((link) => (
          <li key={link}>
            <Link
              to={link}
              smooth={true}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
            >
              <span className="nav-indicator mr-4 h-1 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
