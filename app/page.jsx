"use client";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "./projects/page";
import Footer from "../components/Footer";
import Education from "../components/Education";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [particles, setParticles] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth, // Position within screen width
      y: Math.random() * window.innerHeight, // Position within screen height
      size: Math.random() * 8 + 3, // Random size (3px - 10px)
      duration: Math.random() * 8 + 4, // Random speed
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="overlay"></div>

        {/* Particles Background */}
        <div className="particles-container">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="particle"
              style={{
                width: particle.size,
                height: particle.size,
                top: particle.y,
                left: particle.x,
              }}
              animate={{
                y: ["0px", "30px", "-20px", "10px"],
                opacity: [0.3, 1, 0.5, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to Space</h1>
          <p>Building modern, intelligent, and scalable solutions.</p>
        </motion.div>
      </section>

      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
