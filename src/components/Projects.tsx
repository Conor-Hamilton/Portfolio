import React, { useState, useEffect, useRef, RefObject } from "react";
import { IProject } from "../interfaces/Projects";


export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef: RefObject<HTMLElement> = useRef(null);

  const projects: IProject[] = [
    {
      title: "Tetris Reloaded",
      description: "Matrix themed Tetris game.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      imageUrl: "https://i.imgur.com/PSprql6.png",
      liveUrl: "https://conor-hamilton.github.io/SEB-Project-1/",
      githubUrl: "https://github.com/Conor-Hamilton/SEB-Project-1",
    },
    {
      title: "Game of Thrones Character App",
      description: "Public API GoT Character App.",
      technologies: ["React", "TypeScript", "Bulma", "Git"],
      imageUrl: "https://i.imgur.com/81oGoUY.png",
      liveUrl: "https://majestic-pegasus-01f742.netlify.app/",
      githubUrl: "https://github.com/Conor-Hamilton/SEB-Project-2",
    },
    {
      title: "Bootcamp Buddy",
      description: "Bootcamp advice platform.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Express",
        "MongoDB",
        "Mongoose",
        "Mongo Atlas",
      ],
      imageUrl: "https://i.imgur.com/osCt7GQ.png",
      liveUrl: "https://bootcamp-buddy.netlify.app/",
      githubUrl: "https://github.com/Conor-Hamilton/project-3-frontend",
    },
    {
      title: "11th-Planet-JiuJitsu",
      description: "MMA Gym platform to book and attend classes.",
      technologies: ["React Native", "Firebase"],
      imageUrl: "https://i.imgur.com/JM3GNui.png",
      liveUrl: "https://11th-planet-jiujitsu.netlify.app/",
      githubUrl: "https://github.com/Conor-Hamilton/SEB-Project-4-frontend",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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

  return (
    <section
      ref={sectionRef}
      className={`max-w-4xl mx-auto my-20 px-4 md:px-24 ${
        isVisible ? "fade-in" : "hidden-content"
      }`}
    >
      <h2 className="text-xl md:text-2xl mb-4 text-white opacity-80">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a192f] border border-transparent hover:border-white/30 rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl fade-in"
            style={{
              animationDelay: `${index * 400}ms`,
              animationFillMode: "both",
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl text-white font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-base text-white mb-3">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-pink-900 bg-opacity-50 text-[#ff64da] text-xs font-medium my-1 px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex justify-between space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub Repo
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}