import React from 'react';
import ProjectItem from '../components/ProjectItem';

function Home() {
  const featuredProjects = [
    { id: 1, title: 'Project One', description: 'A brief description of Project One.' },
    { id: 2, title: 'Project Two', description: 'A brief description of Project Two.' },
    { id: 3, title: 'Project Three', description: 'A brief description of Project Three.' },
  ];

  return (
    <>
      <section className="intro">
        <h1 className="page-title">Welcome to StevenDev</h1>
        <p>Your one-stop solution for web development and design.</p>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
