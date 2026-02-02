import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';

function Home() {
  const featuredProjects = [
    { 
      id: 1, 
      title: 'Car Part Identifier App', 
      description: 'A mobile app that uses image recognition to identify car parts and provide detailed information about them.',
      tags: ['Flutter / Dart', 'Python', 'POSTGRESQL'],
      icon: '📱'
    },
    { 
      id: 2, 
      title: 'Travel Planning Website', 
      description: 'A hackathon project built in 3 days that estimates travel expenses and provides real-time weather forecasts via API integration.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      icon: '✈️'
    }
  ];

  const quickSkills = ['Java', 'Python', 'JavaScript', 'React', 'Flutter', 'SQL'];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Steven</span>
          </h1>
          <p className="hero-subtitle">Full-Stack Developer</p>
          <div className="hero-buttons">
            <a href="/projects" className="btn btn-primary">View My Work</a>
            <a href="/contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="quick-about-section">
        <div className="quick-about-content">
          <div className="quick-about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              I'm a BSc IT graduate from Richfield Graduate Institution with an 81.67% average. 
              I love building web and mobile applications that solve real-world problems.
            </p>
            <p>
              Based in Mossel Bay, South Africa, I'm passionate about clean code, user-friendly design, 
              and continuous learning in the ever-evolving tech landscape.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
          </div>
          <div className="quick-about-skills">
            <h3>Key Skills</h3>
            <div className="skills-grid">
              {quickSkills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        <div className="projects-scroll-container">
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
