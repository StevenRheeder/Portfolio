import React from 'react';

function About() {
  const technicalSkills = ['Java', 'Python', 'C++', 'C#', 'PHP', 'JavaScript', 'HTML5', 'CSS', 'SQL', 'Flutter', 'PostgreSQL'];
  const coreSkills = ['Programming', 'Software Development', 'Web Development', 'Problem Solving', 'Debugging', 'Performance Tuning'];

  return (
    <section className="about-page">
      <div className="about-header">
        <h1 className="page-title">About Me</h1>
        <p className="about-subtitle">Software Engineer based in South Africa</p>
      </div>

      <div className="about-content">
        <div className="about-summary">
          <h2>Professional Summary</h2>
          <p>
            Versatile Software Engineer with a strong foundation in Java development and exposure to both frontend and backend technologies. 
            Proficient in Java, C#, HTML5, and CSS, with hands-on experience building scalable applications and web solutions. 
            Adept at debugging, performance tuning, and delivering clean, maintainable code. 
            Seeking to leverage technical expertise and problem-solving skills to contribute to innovative projects within dynamic development teams.
          </p>
        </div>

        <div className="skills-section">
          <div className="skills-column">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-column">
            <h3>Core Skills</h3>
            <div className="skills-grid">
              {coreSkills.map((skill) => (
                <span key={skill} className="skill-badge core">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h2>Work Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Intern Software Developer</h3>
              <span className="experience-date">July 2025 – August 2025</span>
            </div>
            <p className="experience-company">Rivetprop Management Services</p>
            <ul>
              <li>Designed and implemented a secure authorization framework ensuring one-to-one user account mapping, strengthening data protection and eliminating account misuse.</li>
              <li>Implemented and optimized a SQL Server stored procedure to automate duplicate elimination, improving data consistency and reducing manual cleanup efforts.</li>
            </ul>
          </div>
        </div>

        <div className="projects-section">
          <h2>Notable Projects</h2>
          <div className="project-highlight">
            <h3>🚗 Car-Part Identification Mobile Application</h3>
            <p>Built a mobile application to identify automotive parts from images, providing troubleshooting information and related data.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Flutter</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>
          <div className="project-highlight">
            <h3>✈️ Travel Planning Website – Hackathon</h3>
            <p>Developed a travel planning website estimating expenses and providing real-time weather forecasts via API integration. Completed within three days as part of a team of six.</p>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">Python</span>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Information Technology</h3>
            <p className="education-school">Richfield Graduate Institution of Technology – Johannesburg</p>
            <p className="education-details">81.67% average – December 2025</p>
            <p className="education-courses">Relevant Coursework: Software Development, Web Development, Database Management</p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Get In Touch</h2>
          <div className="contact-info">
            <p>📍 Mossel Bay, Western Cape, South Africa</p>
            <p>📧 <a href="mailto:steven.rheeder2002@gmail.com">steven.rheeder2002@gmail.com</a></p>
            <p>🔗 <a href="https://www.linkedin.com/in/steven-rheeder-a8b41a3a4/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Download My Resume</h2>
          <p>Get the full PDF version of my CV for more details.</p>
          <a 
            href="/Steven_Rheeder_CV_2026.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
