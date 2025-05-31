import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const SectionBox = ({ children }) => (
    <div className="max-w-5xl w-full mx-auto bg-white/5 border border-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 transition duration-500 hover:shadow-2xl">
      {children}
    </div>
  );

  const sections = [
    {
      id: "home",
      content: (
        <motion.section key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="flex justify-center px-4 py-10">
          <SectionBox>
            <div className="flex flex-col items-center gap-10 text-center" data-aos="fade-up">
              <div className="w-48 h-48 rounded-full bg-white p-2 shadow-2xl" data-aos="zoom-in">
                <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">I’m <span className="text-blue-300">Madesh G</span></h1>
                <p className="text-white/90 mb-6 max-w-xl mx-auto text-lg">A passionate Software Developer skilled in building responsive web applications. I love solving problems and delivering user-friendly solutions.</p>
              </div>
            </div>
          </SectionBox>
        </motion.section>
      )
    },
    {
      id: "about",
      content: (
        <motion.section key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="space-y-10 px-4 py-10">
          <SectionBox>
            <h2 className="text-3xl font-bold mb-4 text-blue-300 text-center">Objective</h2>
            <p className="text-slate-200 text-center">To obtain a challenging position to the best utilization of my skills and looking for opportunities to grow my technical and managerial skills and fulfill organizational goals.</p>
          </SectionBox>
          <SectionBox>
            <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">Education</h2>
            <div className="space-y-6 text-slate-100">
              <div><h3 className="text-xl font-semibold">B.Tech Artificial Intelligence & Data Science (2022–2026)</h3><p>Karpagam Academy of Higher Education</p><p>CGPA: 8.5</p></div>
              <div><h3 className="text-xl font-semibold">HSC (2021–2022)</h3><p>Best Matriculation Higher Secondary School</p><p>Percentage: 68.5%</p></div>
              <div><h3 className="text-xl font-semibold">SSLC (2019–2020)</h3><p>S.M. Hindu Higher Secondary School</p><p>Percentage: 66.5%</p></div>
            </div>
          </SectionBox>
        </motion.section>
      )
    },
    {
      id: "skills",
      content: (
        <motion.section key="skills" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="px-4 py-10">
          <SectionBox>
            <h2 className="text-3xl font-bold text-blue-300 text-center mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-100">
              <div>
                <h3 className="font-semibold mb-2">Technical Skills</h3>
                <ul className="space-y-2">{["Python, C++", "JavaScript, React.js", "HTML, CSS"].map((skill, idx) => <li key={idx} className="border border-transparent hover:border-white rounded-md px-3 py-1 transition duration-300 ease-in-out hover:scale-105">{skill}</li>)}</ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Soft Skills</h3>
                <ul className="space-y-2">{["Team Work", "Social Skills", "Collaboration", "Adaptability"].map((skill, idx) => <li key={idx} className="border border-transparent hover:border-white rounded-md px-3 py-1 transition duration-300 ease-in-out hover:scale-105">{skill}</li>)}</ul>
              </div>
            </div>
          </SectionBox>
        </motion.section>
      )
    },
    {
      id: "projects",
      content: (
        <motion.section key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="px-4 py-10">
          <SectionBox>
            <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">Project</h2>
            <div className="text-slate-200 border border-transparent hover:border-white rounded-xl p-4 transition-all duration-300 ease-in-out hover:scale-105">
              <h3 className="text-xl font-semibold">Recipe Finder</h3>
              <p><strong>Duration:</strong> 15 Days</p>
              <p>Developed a user-friendly recipe finder website with features like ingredient filtering, dietary restrictions, and personalized recommendations.</p>
            </div>
          </SectionBox>
        </motion.section>
      )
    },
    {
      id: "certifications",
      content: (
        <motion.section key="certifications" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="space-y-10 px-4 py-10">
          <SectionBox>
            <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">Certifications</h2>
            <ul className="list-disc list-inside text-slate-200">
              <li>Certified in Python Foundation by Infosys Spring Board - 2023</li>
              <li>Certified in C Foundation by Infosys Spring Board - 2023</li>
            </ul>
          </SectionBox>
          <SectionBox>
            <h2 className="text-3xl font-bold text-blue-300 text-center mb-6">More About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-100">
              <div><h3 className="font-semibold">Languages</h3><ul className="list-disc list-inside"><li>Tamil</li><li>English</li></ul></div>
              <div><h3 className="font-semibold">Personality</h3><ul className="list-disc list-inside"><li>Adaptable</li><li>Problem-Solver</li></ul></div>
            </div>
          </SectionBox>
        </motion.section>
      )
    },
    {
      id: "contact",
      content: (
        <motion.section key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="px-4 py-10">
          <SectionBox>
            <h2 className="text-3xl font-bold text-blue-300 text-center mb-4">Contact</h2>
            <p className="text-white text-lg text-center">Email: <a href="mailto:madesh51342@gmail.com" className="text-blue-300 hover:underline">madesh51342@gmail.com</a></p>
            <p className="text-white text-lg text-center mt-2">Phone: <span className="text-blue-300">6374569160</span></p>
            <div className="flex justify-center mt-4 space-x-6 text-lg">
              <a href="https://github.com/Madesh035" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">GitHub</a>
              <a href="https://www.linkedin.com/in/madesh-madesh-167533254/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">LinkedIn</a>
            </div>
          </SectionBox>
        </motion.section>
      )
    }
  ];

  return (
    <div className="relative min-h-screen font-sans overflow-hidden text-white scroll-smooth transition-all duration-500 ease-in-out">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay opacity-30 blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay opacity-30 blur-3xl top-60 right-20 animate-ping"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay opacity-30 blur-3xl bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90 z-0"></div>
      <div className="relative z-10">
        <nav className="flex justify-center items-center px-8 py-4 border-b border-white/10 bg-white/10 backdrop-blur-md shadow-md">
          <ul className="flex flex-wrap gap-4 text-sm font-medium">
            {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
              <li key={section}>
                <button onClick={() => setActiveSection(section)} className={`px-4 py-2 rounded-lg border transition duration-300 ${activeSection === section ? "border-white text-blue-300 bg-white/10" : "border-white/30 text-white/80 hover:border-white hover:text-white"}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <AnimatePresence mode="wait">{sections.filter(({ id }) => id === activeSection).map(({ content }) => content)}</AnimatePresence>
      </div>
    </div>
  );
}

export default App;
