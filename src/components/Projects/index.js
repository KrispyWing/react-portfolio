import React, { useState } from 'react';
import ProjectCard from '../ProjectCard';

function Projects() {

  const [projects] = useState([
    {
      name: 'mind-decks',
      description: 'Flash Card based learning, Group Project MERN SPA Website/App',
      link: 'https://group5-project3-uot-duolingo.herokuapp.com/',
      repo: 'https://github.com/Uot-Project3-Group05/uot-project3-group5'
    },
    {
      name: 'dangles-fantasy-sports',
      description: 'Fantasy Hockey Full Stack Application using MySQL Group Project',
      link: 'https://intense-headland-44008.herokuapp.com',
      repo: 'https://github.com/uoft-project2-group7/project'
    },
    {
      name: 'covid-positivity',
      description: 'Group project website focusing only on positive aspects of the Covid-19 pandemic',
      link: 'https://uot-project1-group07.github.io/project1-group07/',
      repo: 'https://github.com/Uot-Project1-Group07/project1-group07'
    },
    {
      name: 'work-day-scheduler',
      description: 'Hour by Hour scheduler for a work day',
      link: 'https://krispywing.github.io/workday-scheduler/',
      repo: 'https://github.com/KrispyWing/workday-scheduler'
    },
    {
      name: 'note-taker',
      description: 'Simple note taker app',
      link: 'https://lit-lake-21479.herokuapp.com/',
      repo: 'https://github.com/KrispyWing/note-taker'
    },
    {
      name: 'weather-dashboard',
      description: 'Weather Dashboard using the openWeathermap API',
      link: 'https://krispywing.github.io/weather-dashboard/',
      repo: 'https://github.com/KrispyWing/weather-dashboard'
    },
    {
      name: 'mvc-blog',
      description: 'CMS-style Tech blog',
      link: 'https://sleepy-thicket-80653.herokuapp.com/',
      repo: 'https://github.com/KrispyWing/mvc-blog'
    }
  ]);

  return (
    <div>
      <div className='flex-row'>
        {projects.map((project, idx) => (
          <ProjectCard
            project={project}
            key={'project' + idx}
          ></ProjectCard>        
        ))}
      </div>
    </div>
  )
}

export default Projects;