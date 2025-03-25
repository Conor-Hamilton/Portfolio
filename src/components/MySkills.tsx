import React from "react";
import { IMySkill } from "../interfaces/Skills";

export default function MySkills() {
  const techSkills: IMySkill[] = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Bulma"],
    },
    { category: "Backend", skills: ["Node.js", "Express", "Flask", "Django"] },
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
    {
      category: "Deployment",
      skills: ["Netlify", "Heroku", "Vercel", "CI/CD (GitHub Actions)"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Insomnia", "TablePlus", "Jira"],
    },
    {
      category: "Other",
      skills: [
        "REST APIs",
        "State Management",
        "Agile Development",
        "Test-Driven Development (TDD)",
      ],
    },
  ];

  const learningCurrently = ["Next.js", "Server-side rendering"];
  const learningNext = ["TDD, Jest, React Testing Library"];

  return (
    <section className="max-w-5xl mx-auto my-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
        My Skills & Interests
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {techSkills.map((category, index) => (
          <div
            key={index}
            className="bg-[#112240] rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out"
          >
            <h3 className="text-xl font-medium text-white mb-3">
              {category.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-pink-900 bg-opacity-50 text-[#ff64da] text-xs font-medium px-2 py-1 rounded"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-[#112240] rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-white mb-2">
              Currently Working On
            </h3>
            <ul className="flex flex-wrap gap-2">
              {learningCurrently.map((topic, index) => (
                <li
                  key={index}
                  className="bg-pink-900 bg-opacity-50 text-[#ff64da] text-xs font-medium px-2 py-1 rounded"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">What’s Next</h3>
            <ul className="flex flex-wrap gap-2">
              {learningNext.map((topic, index) => (
                <li
                  key={index}
                  className="bg-pink-900 bg-opacity-50 text-[#ff64da] text-xs font-medium px-2 py-1 rounded"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
