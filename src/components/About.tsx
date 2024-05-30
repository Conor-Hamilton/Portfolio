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
          Full-Stack Engineer
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
          Computers have been my jam since I was knee-high to a keyboard. It all
          started with gaming - name any game. I was hooked. And then, like any
          curious kid, I started poking around, learning a bit of C++ with
          friends, and even dipping my toes into the world of private servers
          for said games. Good times...
        </p>
        <p className="text-base md:text-lg mt-4 leading-relaxed">
          Fast forward a bit, and here I am, a software engineer in the making.
          After years of being the go-to IT guy in the office, I decided to take
          the plunge and enroll in a software engineering bootcamp with General
          Assembly. With a young family to think about, it was time to turn my
          passion into a career.
        </p>
        <p className="text-base md:text-lg mt-4 leading-relaxed">
          When I'm not working on my projects, you can find me spending time
          with my family, playing video games, watching UFC or watching Arsenal bottle the
          league (again).
        </p>
      </div>
    </section>
  );
}
