import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="aboutme"
      className={`container mx-auto mb-28 px-4 md:px-24 ${
        isVisible ? "fade-in-up" : "hidden-content"
      }`}
    >
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white opacity-70">
          Conor Hamilton
        </h1>
        <h2 className="text-xl md:text-2xl mb-4 text-white opacity-80">
          Full-Stack Software Engineer | React | TypeScript | Python
        </h2>
        <div className="opacity-80 justify-center space-x-4 mb-4">
          <a
            href="https://github.com/Conor-Hamilton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl text-white hover:text-gray-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/conor-m-hamilton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl text-white hover:text-gray-300"
            />
          </a>
        </div>
        <p className="text-base md:text-lg leading-relaxed">
          I'm a full-stack software engineer specialising in{" "}
          <span className="text-[#ff64da]">React, TypeScript, and Python</span>,
          with additional experience in Node.js, Express, and Flask. My focus is
          on writing clean, maintainable code and building scalable applications
          tailored to solve real-world problems.
        </p>
        <p className="text-base md:text-lg mt-4 leading-relaxed">
          My journey into tech began with a passion for gaming, which led me to
          explore programming as a kid. After years of being the go-to "computer
          guy" in the office, I took the leap and completed an intensive{" "}
          <span className="text-[#ff64da]">
            Software Engineering Immersive course
          </span>{" "}
          at General Assembly. With a young family as my motivation, I
          transformed my passion into a career.
        </p>
        <p className="text-base md:text-lg mt-4 leading-relaxed">
          Outside of coding, I enjoy spending time with my family, gaming, and
          watching UFC. I’m currently expanding my skills with{" "}
          <span className="text-[#ff64da]">Next.js</span> and{" "}
          <span className="text-[#ff64da]">React Native</span>, while refining
          my approach to Test-Driven Development (TDD).
        </p>
      </div>
    </section>
  );
}
