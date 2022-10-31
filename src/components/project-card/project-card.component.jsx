import React from "react";
import "./project-card.style.scss";

import { XSquareFill, Github } from "react-bootstrap-icons";

const ProjectCard = ({ onClick, props }) => {
  const { src, title, description, technologies, links } = props;
  return (
    <div className="project-card-container">
      <div className="project-card-wrapper">
        <div className="project-card-details">
          <div className="project-card-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="project-card-technologies">
            <p>{technologies}</p>
          </div>
          <div className="project-card-links">
            <a href={links.repo} target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href={links.liveCode} target="_blank" rel="noreferrer">
              <span>Live Code</span>
            </a>
          </div>
        </div>
        <div className="image-container">
          <img src={src} alt="" />
        </div>
        <div className="close-icon">
          <XSquareFill onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
