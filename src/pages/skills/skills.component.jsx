import React, { useState } from "react";
import "./skills.style.scss";

import SVG_DATA from "./svg-data";

const Skills = () => {
  const [skillsData] = useState(SVG_DATA);
  return (
    <main className="skills">
      <div className="skills-container" xyz="fade stagger">
        <h1 className="xyz-in" xyz="inherit up">
          Skills
        </h1>
        <div className="svg-container xyz-in" xyz="inherit down">
          <div className="svg-wrapper">
            {skillsData.map(({ src, alt }) => (
              <div key={alt}>
                <img src={`skills_svg/${src}`} alt={alt} />
                <p>{alt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
