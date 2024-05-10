import React, { useState, useEffect, useRef, RefObject } from "react";
import { IMySkill } from "../interfaces/Skills";

export default function MySkills() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef: RefObject<HTMLElement> = useRef(null);

  useEffect(() => {
    const calculateThreshold = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        return 0.25;
      } else {
        return 0.5;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: calculateThreshold() }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const techSkills: IMySkill[] = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "Bulma", "HTML", "CSS"],
    },
    { category: "Backend", skills: ["Node.js", "Express", "Flask"] },
    {
      category: "Databases",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "SQLAlchemy",
        "Mongoose",
        "Mongo Atlas",
      ],
    },
    { category: "Deployment", skills: ["Netlify", "Heroku", "Vercel"] },
    { category: "Tools", skills: ["Git", "GitHub", "Insomnia", "TablePlus"] },
  ];

  return (
    <section
      ref={sectionRef}
      className={`h-full max-w-[850px] mx-auto bg-[#0a192f] px-2 ${
        isVisible ? "fade-in" : "hidden-content"
      }`}
    >
      <div className="container px-4 sm:px-6 md:px-8 py-8 mx-auto">
        <h2 className="text-xl md:text-2xl mb-4 text-white opacity-80">
          My Skills
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
          {techSkills.map((category, index) => (
            <div
              key={index}
              className={`bg-opacity-60 rounded-lg p-4 bg-[#112240] shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? "visible fade-in" : "hidden-content"
              }`}
              style={{ animationDelay: `${index * 400}ms` }}
            >
              <h3 className="text-lg md:text-sm lg:text-xs font-semibold mb-3">
                {category.category}
              </h3>
              <ul>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-pink-900 bg-opacity-50 text-[#ff64da] text-sm md:text-xs font-medium my-1 px-2.5 py-0.5 rounded-full inline-block"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
