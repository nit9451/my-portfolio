// app/skills/page.js
import {
    FaReact,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaNodeJs,
    FaPython,
    FaAws,
    FaDatabase,
    FaFlask,
    FaJenkins,
    FaCogs,
    FaCubes,
  } from "react-icons/fa";
  
  export default function Skills() {
    return (
      <section className="container">
        <h1>My Skills</h1>
        <div className="skills-section">
          <button className="skill-button">
            <FaReact className="skill-icon" />
            <span>React</span>
          </button>
          <button className="skill-button">
            <FaJs className="skill-icon" />
            <span>JavaScript</span>
          </button>
          <button className="skill-button">
            <FaCss3Alt className="skill-icon" />
            <span>CSS3</span>
          </button>
          <button className="skill-button">
            <FaHtml5 className="skill-icon" />
            <span>HTML5</span>
          </button>
          <button className="skill-button">
            <FaNodeJs className="skill-icon" />
            <span>Node.js</span>
          </button>
          <button className="skill-button">
            <FaCogs className="skill-icon" />
            <span>TypeScript</span>
          </button>
          <button className="skill-button">
            <FaPython className="skill-icon" />
            <span>Python</span>
          </button>
          <button className="skill-button">
            <FaCubes className="skill-icon" />
            <span>Express.js</span>
          </button>
          <button className="skill-button">
            <FaFlask className="skill-icon" />
            <span>Flask</span>
          </button>
          <button className="skill-button">
            <FaDatabase className="skill-icon" />
            <span>MongoDB</span>
          </button>
          <button className="skill-button">
            <FaAws className="skill-icon" />
            <span>AWS</span>
          </button>
          <button className="skill-button">
            <FaJenkins className="skill-icon" />
            <span>Jest</span>
          </button>
        </div>
      </section>
    );
  }
  