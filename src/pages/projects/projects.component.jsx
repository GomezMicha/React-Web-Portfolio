import React, { useState } from "react";
import "./projects.style.scss";

import PreviewProjectCard from "../../components/preview-project-card/preview-project-card.component";
import PROJECTS from "./projects";

const Projects = () => {
  const [projectsData] = useState(PROJECTS);
  return (
    <main className="projects">
      <div className="projects-container">
        <h1 className="xyz-in" xyz="origin left">
          Projects
        </h1>
        <div className="projects-wrapper">
          {projectsData.map(({ id, ...otherProps }) => (
            <PreviewProjectCard key={id} id={id} {...otherProps} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
