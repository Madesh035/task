import React from "react";

const projects = [
  {
    title: "Resume Builder",
    description: "A tool to create professional resumes.",
    tech: "React, Tailwind CSS",
    color: "bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400",
  },
  {
    title: "Job Tracker",
    description: "Track job applications and status.",
    tech: "MERN Stack",
    color: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
  {
    title: "Portfolio Website",
    description: "Showcase personal projects and skills.",
    tech: "React, Framer Motion",
    color: "bg-gradient-to-r from-green-400 to-teal-500",
  },
  {
    title: "Quiz App",
    description: "An app for coding quiz preparation.",
    tech: "React, Firebase",
    color: "bg-gradient-to-r from-purple-400 to-pink-500",
  },
];

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">🚀 Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-xl text-white p-6 transform hover:scale-105 transition-all duration-300 ${project.color}`}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-3">{project.description}</p>
            <span className="inline-block text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
