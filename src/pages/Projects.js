import React from 'react';
import ProjectItem from '../components/ProjectItem';

function Projects() {
  const allProjects = [
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
      description: 'A hackathon project built in 3 days in Johannesburg. Estimates travel expenses and provides real-time weather forecasts via API integration. Collaborated with a team of 6 students.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
      icon: '✈️'
    }
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">Explore my portfolio of work</p>
      </div>
      <div className="projects-scroll-container">
        <div className="projects-grid">
          {allProjects.map((project) => (
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
  );
}

export default Projects;
