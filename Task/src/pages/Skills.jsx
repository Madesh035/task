import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "MongoDB", "Git"
];

function Skills() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">💻 Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md hover:scale-110 transform transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
