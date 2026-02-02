import React from 'react';
import ProjectItem from '../components/ProjectItem';

function Projects() {
  const allProjects = [
    { id: 1, title: 'Project One', description: 'A brief description of Project One.' },
    { id: 2, title: 'Project Two', description: 'A brief description of Project Two.' },
    { id: 3, title: 'Project Three', description: 'A brief description of Project Three.' },
  ];

  return (
    <section className="projects">
      <h1 className="page-title">My Projects</h1>
      <div className="project-list">
        {allProjects.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
