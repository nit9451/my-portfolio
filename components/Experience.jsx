// app/experience/page.js
export default function Experience() {
    return (
      <section className="container">
        <h1>Experience</h1>
        <div className="experience-section">
          <div className="experience-card">
            <h2>SDE-III</h2>
            <h3>Mobcoder</h3>
            <p className="experience-date">Jan 2022 - Present</p>
            <p>
              Leading the development of interactive, AI-powered interfaces with a focus on performance and usability.
            </p>
          </div>
          <div className="experience-card">
            <h2>Software Developer</h2>
            <h3>Siscaso</h3>
            <p className="experience-date">June 2020 - Dec 2021</p>
            <p>
              Crafted responsive and visually appealing web applications with modern JavaScript frameworks.
            </p>
          </div>
          {/* Add more experience cards as needed */}
        </div>
      </section>
    );
  }
  