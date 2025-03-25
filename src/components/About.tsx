import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section
      id="aboutme"
      className="max-w-5xl mx-auto my-16 px-4 sm:px-6 md:px-8"
    >
      <div className="bg-[#112240] rounded-lg p-6 shadow-md">
        <h1 className="text-2xl text-center md:text-3xl font-semibold text-white mb-2">
          Conor Hamilton
        </h1>
        <h2 className="text-xl text-center font-medium text-gray-300 mb-4">
          Full-Stack Software Engineer | Instructor Associate | React |
          TypeScript | Python
        </h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/Conor-Hamilton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl text-white hover:text-blue-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/conor-m-hamilton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl text-white hover:text-blue-300"
            />
          </a>
        </div>
        <p className="text-base text-gray-300 mb-4">
          I’m a full-stack software engineer specialising in{" "}
          <span className="text-[#ff64da]">React, TypeScript, and Python</span>,
          with experience in Node.js, Express, and Flask. I currently work as an{" "}
          <span className="text-[#ff64da]">
            Instructor Associate at General Assembly
          </span>
          , where I support aspiring developers on their coding journeys, and
          volunteer as a{" "}
          <span className="text-[#ff64da]">
            Software Engineer with Youth4Youth
          </span>
          , creating solutions to empower young people. My focus is on writing
          clean, maintainable code and developing tailored scalable solutions.
        </p>
        <p className="text-base text-gray-300 mb-4">
          My tech journey began with a passion for gaming, which sparked my
          interest in programming as a child. After years as the office
          "computer guy," I completed General Assembly’s intensive{" "}
          <span className="text-[#ff64da]">
            Software Engineering Immersive course
          </span>
          , turning my passion into a career, motivated by my young family.
        </p>
        <p className="text-base text-gray-300">
          Outside of coding, I enjoy family time, gaming, and watching UFC. I’m
          currently enhancing my skills in{" "}
          <span className="text-[#ff64da]">Next.js</span> and{" "}
          <span className="text-[#ff64da]">React Native</span>, while refining
          my approach to Test-Driven Development (TDD).
        </p>
      </div>
    </section>
  );
}
