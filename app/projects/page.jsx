"use client";
import { useState } from "react";
import projects from "@/data/projects.json";

// Reusable FlipCard Component
function FlipCard({ title, logo, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          {logo && <img src={logo} alt={`${title} Logo`} className="project-logo" />}
          <h3>{title}</h3>
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <FlipCard
            key={index}
            title={project.title}
            logo={project.logo}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
