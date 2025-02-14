"use client";
import educationData from "@/data/education.json";

export default function Education() {
  return (
    <section className="container">
      <h1>Education</h1>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h2>{edu.institution}</h2>
            <h3>{edu.degree}</h3>
            <p className="education-duration">{edu.duration}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
