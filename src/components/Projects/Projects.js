import React, { useState } from 'react';
import Project from '../Project/Project';
import nimbus from '../../assets/images/nimbus.png';

export default function Projects() {
  const projects = [
    {
      title: 'Nimbus',
      description: 'AWS Lambda developer tool for monitoring real-time metrics',
      link: 'https://www.nimbusos.io/',
      codeLink: 'https://github.com/oslabs-beta/nimbus',
      imageSrc: nimbus,
    },
    {
      title: 'New Project',
      description: 'This is a hypothetical new project description.',
      link: 'https://www.example.com/newproject',
      codeLink: '',
      imageSrc: nimbus,
    },
    {
      title: 'New Project',
      description: 'This is a hypothetical new project description.',
      link: 'https://www.example.com/newproject',
      imageSrc: nimbus,
    },
  ];
  
  return (
      <div className="portfolio-content">
        <div className="project-carousel">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              codeLink={project.codeLink}
              imageSrc={project.imageSrc}
            />
          ))}
          <div className="project-box last">
            More Coming Soon...
          </div>
        </div>
      </div>
  );
}