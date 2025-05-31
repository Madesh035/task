import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const SectionBox = ({ children }) => (
    <div className="max-w-5xl w-full mx-auto bg-white/5 border border-white/10 hover:border-white backdrop-blur-md shadow-xl rounded-2xl p-8 transition-all duration-500 ease-in-out hover:shadow-2xl">
      {children}
    </div>
  );

  return (
    <div className="relative min-h-screen font-sans overflow-hidden text-white scroll-smooth transition-all duration-500 ease-in-out">
      {/* Animated colorful blurred background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay opacity-30 blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay opacity-30 blur-3xl top-60 right-20 animate-ping"></div>
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay opacity-30 blur-3xl bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-center items-center px-8 py-4 border-b border-white/10 bg-white/10 backdrop-blur-md shadow-md">
          <ul className="flex space-x-6 text-sm font-medium transition-all duration-300">
            {["home", "about", "skills", "projects", "certifications", "contact"].map((section) => (
              <li
                key={section}
                onClick={() => setActiveSection(section)}
                className={`cursor-pointer capitalize px-3 py-1 rounded transition duration-300 ${
                  activeSection === section
                    ? "text-sky-300 border border-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {section}
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        {activeSection === "home" && (
          <section className="flex justify-center px-4 py-10">
            <SectionBox>
              <div className="flex flex-col items-center gap-10 text-center" data-aos="fade-up">
                <div className="w-48 h-48 rounded-full bg-white p-2 shadow-2xl" data-aos="zoom-in">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                    I’m <span className="text-sky-300">Madesh G</span>
                  </h1>
                  <p className="text-white/90 mb-6 max-w-xl mx-auto text-lg">
                    A passionate Software Developer skilled in building responsive web applications. I love solving problems and delivering user-friendly solutions.
                  </p>
                </div>
              </div>
            </SectionBox>
          </section>
        )}

        {activeSection === "about" && (
          <section className="space-y-10 px-4 py-10">
            <SectionBox>
              <h2 className="text-3xl font-bold mb-4 text-sky-300 text-center">Objective</h2>
              <p className="text-slate-200 text-center">
                To obtain a challenging position to the best utilization of my skills and looking for opportunities to grow my technical and managerial skills and fulfill organizational goals.
              </p>
            </SectionBox>
            <SectionBox>
              <h2 className="text-3xl font-bold text-sky-300 text-center mb-8">Education</h2>
              <div className="space-y-6 text-slate-100">
                <div>
                  <h3 className="text-xl font-semibold">B.Tech Artificial Intelligence & Data Science (2022–2026)</h3>
                  <p>Karpagam Academy of Higher Education</p>
                  <p>CGPA: 8.5</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">HSC (2021–2022)</h3>
                  <p>Best Matriculation Higher Secondary School</p>
                  <p>Percentage: 68.5%</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">SSLC (2019–2020)</h3>
                  <p>S.M. Hindu Higher Secondary School</p>
                  <p>Percentage: 66.5%</p>
                </div>
              </div>
            </SectionBox>
          </section>
        )}

        {activeSection === "skills" && (
          <section className="px-4 py-10">
            <SectionBox>
              <h2 className="text-3xl font-bold text-sky-300 text-center mb-8">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-100">
                <div>
                  <h3 className="font-semibold">Technical Skills</h3>
                  <ul className="list-disc list-inside">
                    <li>Python, C++</li>
                    <li>JavaScript, React.js</li>
                    <li>HTML, CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Soft Skills</h3>
                  <ul className="list-disc list-inside">
                    <li>Team Work</li>
                    <li>Social Skills</li>
                    <li>Collaboration</li>
                    <li>Adaptability</li>
                  </ul>
                </div>
              </div>
            </SectionBox>
          </section>
        )}

        {activeSection === "projects" && (
          <section className="px-4 py-10">
            <SectionBox>
              <h2 className="text-3xl font-bold text-sky-300 text-center mb-6">Project</h2>
              <div className="text-slate-200">
                <h3 className="text-xl font-semibold">Recipe Finder</h3>
                <p><strong>Duration:</strong> 15 Days</p>
                <p>
                  Developed a user-friendly recipe finder website with features like ingredient filtering, dietary restrictions, and personalized recommendations.
                </p>
              </div>
            </SectionBox>
          </section>
        )}

        {activeSection === "certifications" && (
          <section className="space-y-10 px-4 py-10">
            <SectionBox>
              <h2 className="text-3xl font-bold text-sky-300 text-center mb-6">Certifications</h2>
              <ul className="list-disc list-inside text-slate-200">
                <li>Certified in Python Foundation by Infosys Spring Board - 2023</li>
                <li>Certified in C Foundation by Infosys Spring Board - 2023</li>
              </ul>
            </SectionBox>
            <SectionBox>
              <h2 className="text-3xl font-bold text-sky-300 text-center mb-6">More About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-100">
                <div>
                  <h3 className="font-semibold">Languages</h3>
                  <ul className="list-disc list-inside">
                    <li>Tamil</li>
                    <li>English</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Personality</h3>
                  <ul className="list-disc list-inside">
                    <li>Adaptable</li>
                    <li>Problem-Solver</li>
                  </ul>
                </div>
              </div>
            </SectionBox>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="px-4 py-10">
            <SectionBox>
              <h2 className="text-3xl font-bold text-sky-300 text-center mb-4">Contact</h2>
              <p className="text-white text-lg text-center">
                Email: <a href="mailto:madesh51342@gmail.com" className="text-blue-300 hover:underline">madesh51342@gmail.com</a>
              </p>
              <p className="text-white text-lg text-center mt-2">Phone: <span className="text-blue-300">6374569160</span></p>
              <div className="flex justify-center mt-4 space-x-6 text-lg">
                <a href="https://github.com/Madesh035" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300">GitHub</a>
                <a href="https://www.linkedin.com/in/madesh-madesh-167533254/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-300">LinkedIn</a>
              </div>
            </SectionBox>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
