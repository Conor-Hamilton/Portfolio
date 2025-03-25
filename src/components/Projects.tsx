import React from "react";
import { IProject } from "../interfaces/Projects";

export default function Projects() {
  const projects: IProject[] = [
    {
      title: "Python Discord Bot",
      description:
        "A feature-rich Discord bot for managing a community server, with custom commands and event tracking.",
      technologies: ["Python", "Discord.py", "PostgreSQL", "JSON", "Heroku"],
      imageUrl:
        "https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png",
      liveUrl: "",
      githubUrl: "https://github.com/Conor-Hamilton/Discord_Bot",
      ongoing: true,
    },
    {
      title: "11th-Planet-JiuJitsu",
      description: "MMA Gym platform to book and attend classes.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "Flask",
        "PostgreSQL",
        "SQLAlchemy",
      ],
      imageUrl: "https://i.imgur.com/JM3GNui.png",
      liveUrl: "https://11th-planet-jiujitsu.netlify.app/",
      githubUrl: "https://github.com/Conor-Hamilton/SEB-Project-4-frontend",
      ongoing: false,
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
      ongoing: false,
    },
    {
      title: "Game of Thrones Character App",
      description: "Public API GoT Character App.",
      technologies: ["React", "TypeScript", "Bulma", "Git"],
      imageUrl: "https://i.imgur.com/81oGoUY.png",
      liveUrl: "https://majestic-pegasus-01f742.netlify.app/",
      githubUrl: "https://github.com/Conor-Hamilton/SEB-Project-2",
      ongoing: false,
    },
    {
      title: "Tetris Reloaded",
      description: "Matrix themed Tetris game.",
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      imageUrl: "https://i.imgur.com/PSprql6.png",
      liveUrl: "https://conor-hamilton.github.io/SEB-Project-1/",
      githubUrl: "https://github.com/Conor-Hamilton/SEB-Project-1",
      ongoing: false,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out"
          >
            <div className="relative">
              {project.ongoing && (
                <span className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Ongoing
                </span>
              )}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-base mb-4">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="bg-pink-900 bg-opacity-50 text-[#ff64da] text-xs font-medium px-2 py-1 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Live Project
                </a>
              ) : (
                <p className="text-gray-500 text-sm italic">
                  No live demo available
                </p>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
