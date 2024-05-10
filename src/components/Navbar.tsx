import React from "react";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="nav hidden lg:block bg-[#0a192f] text-white sticky top-16 z-50 px-6 lg:px-10">
      <ul className="mt-24 mx-auto max-w-lg">
        {["aboutme", "myskills", "projects"].map((link, index) => (
          <li
            key={link}
            className={`${isVisible ? "fade-in-up" : "hidden-content"}`}
            style={{ animationDelay: `${index * 100 + 100}ms` }}
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              className="group flex items-center py-3 cursor-pointer"
            >
              <span className="nav-indicator mr-4 h-1 w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200"></span>
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